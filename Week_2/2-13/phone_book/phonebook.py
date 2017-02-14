import pickle

phonebook = {}

def look_up_entry():
    name = raw_input("Name: ")
    print "Found entry for " + name+":\n"+"Phone Number: "+ phonebook[name]["Phone"]+"\n"+"Email: "+ phonebook[name]["Email"] +"\n"+"Website: "+phonebook[name]["Website"]+"\n"
def set_an_entry():
    name = raw_input("Name: ")
    phonenumber = raw_input("Phone Number: ")
    email = raw_input("Email: ")
    website = raw_input("Website: ")
    print ("Entry stored for "+name)
    phonebook[name] = {"Phone":phonenumber, "Email":email, "Website":website}
def delete_an_entry():
    name = raw_input("Name: ")
    print ("Deleted entry for " + name)
    del phonebook[name]

def list_all_entries():
    for entry in phonebook:
        print "Found entry for " + entry +":\n"+"Phone Number: "+ phonebook[entry]["Phone"]+"\n"+"Email: "+ phonebook[entry]["Email"] +"\n"+"Website: "+phonebook[entry]["Website"]+"\n"

def save_entries():
    global phonebook
    myfile = open('phonebook.pickle', 'w')
    pickle.dump(phonebook, myfile)
    myfile.close()

def restore_saved_entries():
    global phonebook
    myfile = open('phonebook.pickle', 'r')
    phonebook = pickle.load(myfile)
    myfile.close()

print "\n"*20
while True:
    print "Electronic Phone Book"
    print "====================="
    print "1. Look up an entry"
    print "2. Set an entry"
    print "3. Delete an entry"
    print "4. List all entries"
    print "5. Save entries"
    print "6. Restore saved entries"
    print "7. Quit"

    answer = float(raw_input("What do you want to do (1-5)?"))
    print "\n"
    if answer == 1:
        look_up_entry()

    elif answer == 2:
        set_an_entry()

    elif answer == 3:
        delete_an_entry()

    elif answer == 4:
        list_all_entries()

    elif answer == 5:
        save_entries()

    elif answer == 6:
        restore_saved_entries()

    elif answer == 7:
        break

    else:
        print "Please input valid entry!\n"
