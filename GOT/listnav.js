function search_people() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('list-group-item clist'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
}

$(() => {

    var CHARLIST = []
    var keep = true;
    var keepgoing = true
    
    $(function () {
        let pageNum = 0;
        function getNames(pageNum) {
            $.get(`https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=50`)
            .done(function (response) {
                CHARLIST.push(...response)
                console.log(pageNum)
                console.log(response)
                if (response.length > 0) {
                    pageNum++;
                    getNames(pageNum);
                }
            })
            .fail(function (error) {
                console.log(error);
            })
        }
        getNames(pageNum);
    })

    $('.charButton').click((event) => {
        event.preventDefault();
        CHARLIST.sort(function(a, b) {
            return parseFloat(a.name) - parseFloat(b.name);
            
        });

        CHARLIST.sort((a, b) => {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        })
        // console.log(`Charlist: ${CHARLIST.length}`)


        let obj = {};
        let uChars = [];
        for (let i = 0; i < CHARLIST.length; i++) {
            if(!obj[CHARLIST[i].name]) {
                uChars.push(CHARLIST[i]);
                obj[CHARLIST[i].name] = true
            }
        }
        // console.log(`unique: ${uChars.length}`)

        
        $('.results').html("")
        for (let char in uChars) {
            let charName = uChars[char].name
            if (charName.length > 0) {
                // console.log(uChars[char])
                let charLink = uChars[char].allegiances[0]
                let mystring = `<li id='${charLink}' class='list-group-item clist'>${charName}</li>`
                $('.results').append(mystring) 
                
            }
            
        }

    })
    
    //books 
    $('.bookButton').click((event) => {
        event.preventDefault();
        $('.results').html("")
        let myURL = `https://www.anapioficeandfire.com/api/books`
        
        $.get(myURL)
        .done(function (books) {
            // console.log(books)
            for (let book in books) {
                let pdate = books[book].released
                let date = pdate.slice(0,4)
                let mystring = `<li class='list-group-item blist'>${books[book].name}  (${date})</li>`
                $('.results').append(mystring) 
                
            }
        })
    })

    $('ul').on('click', 'li', function(e){
        // console.log(e.target.innerText)
        $.get(e.target.id)
        .done(function (obj) {
            let name = e.target.innerText
            let newString = `${name} - <em>${obj.name}</em>`
            // console.log(obj.name)
            e.target.innerHTML = newString;
            
            
        })
        .fail(function (error) {
            let name = e.target.innerText
            newString = `${name} - <em>no house</em>`
            e.target.innerHTML = newString

        })
    })
    
    
})