def madlib(fName, subject):
    if fName <= " " or subject <= " ":
        print("You must enter a value.")
    else:
        return f"{fName} loves learning {subject}."
    
fName = input("What is your name? > ")
subject = input("What is your favorite subject? > ")
result = madlib(fName, subject)
print(result)