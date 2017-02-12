
word = "Hello There"
word = word.lower()
word_cell = []
display_word = ""
guessed_word = [" "]
guessed_a_word = False

for i in range(len(word)):
    if word[i] == " ":
        word_cell.append(" ")
    else:
        word_cell.append("-")
    display_word = display_word + word_cell[i]
guessed = 7

the_man=[
[" "," "," "," ","/","-","-","-","-","-","-","-","-","-","-","-","-"," "," "," "," "," "," "," "," "],
[" "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," "," ","|"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
[" "," "," ","-","-","-"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]]


print the_man
def draw_man():
    global the_man


#    print "\n\n\n"
#    print "    /------------        "
#    print "    |           |        "
#    print "    |          ( )       "
#    print "    |         \ | /      "
#    print "    |          \|/       "
#    print "    |           |        "
#    print "    |          / \       "
#    print "    |         /   \      "
#    print "   ___                   "

    print "\n"*15
    if guessed == 6:
        the_man[1][16]="|"
    if guessed == 5:
        the_man[2][14]="("
        the_man[2][15]="o"
        the_man[2][16]="_"
        the_man[2][17]="O"
        the_man[2][18]=")"
    if guessed == 4:
        the_man[3][16]="|"
        the_man[4][16]="|"
        the_man[5][16]="|"
    if guessed == 3:
        the_man[3][14]="\\"
        the_man[4][15]="\\"
    if guessed == 2:
        the_man[3][18]="/"
        the_man[4][17]="/"
    if guessed == 1:
        the_man[6][15]="/"
        the_man[7][14]="/"
    if guessed == 0:
        the_man[6][17]="\\"
        the_man[7][18]="\\"
        the_man[2][15]="x"
        the_man[2][17]="x"

    for i in range (len(the_man)):
        display_man = ""

        for j in range(len(the_man[i])):
            display_man = display_man + the_man[i][j]

            if j == len(the_man[i])-1:
                print display_man

    return;

def build_display_word():
    global display_word
    display_word = ""
    for i in range(len(word_cell)):
        display_word = display_word + word_cell[i]
    return display_word


while display_word != word:

    draw_man();
    if guessed == 0:
        break


    print display_word

    print "\n"
    print "you have %d guesses left" %guessed
    print "\nGuessed Words:"
    print guessed_word

    #check word condition
    out = False
    while out == False:
        check_again = False

        guess_word = raw_input("\nGuess the word!: ")
        guess_word = guess_word.lower()
        if (len(guess_word) != 1):
            print("Please input valid word")

        else:
            for i in range(len(guessed_word)):
                if guess_word == guessed_word[i]:
                    print("You already gussed this word")
                    check_again = True

            if check_again == False:
                out = True
                guessed_word.append(guess_word)

        print guessed_word


    for i in range(len(word)):
        if guess_word == word[i]:
            word_cell[i] = word[i]
            guessed_a_word = True

    if guessed_a_word == True:
        guessed_a_word = False
    else:
        guessed -=1

    print build_display_word()

if guessed >0:
    print "Yes! The Word Is: "+ display_word
    print "Victory!"
else:
    print "You Achieved: "+ display_word
    print "The Word Is:  "+ word
    print "You Lose!"
