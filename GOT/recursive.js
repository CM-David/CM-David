$(function () {
    let pageNum = 0; //********* YOU NEED THIS ************
    function getNames(pageNum) {. //*********** WRAP YOUR API CALL IN A FUNCTION *************
        $.get("https://www.anapioficeandfire.com/api/characters?page=" + pageNum + "&pageSize=50")
            .done(function (response) {
                if (response.length > 0) {. //****** TEST LENGTH OF RESPONSE *******
                    pageNum++;  // *****INCREMENT YOUR PAGE COUNT. *********
                    console.log(pageNum);
                    console.log(response);
                    getNames(pageNum);  // ******. CALL THE FUNCTION AGAIN RECURSIVELY 
                }
            })
            .fail(function (error) {
                console.log(error);
            })
    }
    getNames(pageNum);
})

$(function () {
    let pageNum = 0;
    function getNames(pageNum) {
        $.get(`https://www.anapioficeandfire.com/api/characters?page=${pageNum}&pageSize=50`)
        .done(function (response) {
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