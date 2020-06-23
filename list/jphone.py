import time # timer
import pickle # file saver/loader
import os.path # path checker

def save(phonebook):
        # save file
        with open("phonebook_app.pickle", "wb") as handle: # store data to external file -> "wb" means "write" "binary"
            pickle.dump(phonebook, handle, protocol=pickle.HIGHEST_PROTOCOL)

def init():
    # check if file exists
    if os.path.exists("phonebook_app.pickle"):
        with open("phonebook_app.pickle", "rb") as handle:
            phonebook = pickle.load(handle)
    
    else:
        # phonebook initialization if pickle file does not exist
        phonebook = { 
            "Alice": "703-493-1834", 
            "Bob": "857-384-1234", 
            "Elizabeth": "484-584-2923",
            "Jared" : "555-987-2350",
            "Angela" : "555-872-9410",
            "Melissa" : "555-554-5523"
        }
        # saves file
        with open("phonebook_app.pickle", "wb") as handle: # store data to external file
            pickle.dump(phonebook, handle, protocol=pickle.HIGHEST_PROTOCOL)
    return phonebook

def back_to_main_menu(phonebook):
    menu_restart = "Would you like to go to the previous menu? (Y / N)  "

    app_restart = input(menu_restart).upper()
    if app_restart == "Y":
        print("Redirecting...")
        time.sleep(1)
        main()
    else:
        print("Good bye!")
        save(phonebook)

def main():

    phonebook = init() # load phonebook file -> variables created in a function live only in that function, need to "recreate" variable while referencing function

    print("Welcome to the Electronic Phone Book")
    print("=====================")
    time.sleep(.5)
    print("Please select from one of the following:  ")
    time.sleep(1)
    print("1. Look up an entry")
    time.sleep(.3)
    print("2. Set an entry")
    time.sleep(.3)
    print("3. Delete an entry")
    time.sleep(.3)
    print("4. List all entries")
    time.sleep(.3)
    print("5. Quit")
    time.sleep(.3)
    phonebook_options = int(input("What would you like to do? Select 1 - 5  "))

    if phonebook_options == 1: # Number look up
        name_lookup = input("Enter the name of the person:  ").capitalize()
        if name_lookup in phonebook:
            print("This person's number is:  ", phonebook[name_lookup])
            time.sleep(.2)
            back_to_main_menu(phonebook)
        else:
            print("Please select a valid person.")
            time.sleep(1)
            main()
    
    elif phonebook_options == 2: # set a new dictionary entry
        print("Please fill in the information below:")
        new_name = input("Name:  ").capitalize()
        new_num = input("Number:  ")
        phonebook.update({new_name : new_num})
        time.sleep(.2)
        print(f"Entry stored for {new_name}")
        save(phonebook) # call save function to save dictionary changes
        main() # call main function to restart from beginning
    
    elif phonebook_options == 3: # delete dictionary entry
        print("Please fill in the information below:")
        name_del = input("Enter the name of the person who's information you'd like to delete:  ").capitalize()
        if name_del in phonebook:
            confirm = input("You are about to delete a person's information. This action cannot be undone. Are you sure? (Y/N)  ").upper()
            if confirm == "Y":
                print("Now deleting...")
                time.sleep(1)
                del phonebook[name_del]
                save(phonebook) # call save function to save dictionary changes
                back_to_main_menu(phonebook)
            else:
                print("Now redirecting to main menu...")
                time.sleep(1)
                main() # call main function to restart from beginning
        else:
            print("Please enter a valid person.")
            time.sleep(1)
            main()

    elif phonebook_options == 4: # print phonebook listings
        for key,val in phonebook.items():
            print("Found entry for " + key + ": " + val)
            time.sleep(.2)
        back_to_main_menu(phonebook)
    
    elif phonebook_options == 5:
        print("Good bye!")
        save(phonebook) # call save function to save dictionary changes

    else: # restarts phonebook app if user inputs incorrect value
        print("Please start from the beginning and enter a valid choice.")
        time.sleep(1)
        main() # call main function to restart from beginning

main()