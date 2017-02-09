word = "aeiou"
word_cell = []
display_word = ""
for i in range(len(word)):
    word_cell.append("-")

guessed = 7

while display_word != word:
    print "\n\n\n\n\n\n\n"
    display_word = ""
    for i in range(len(word_cell)):
        display_word = display_word + word_cell[i]

    print display_word

    print "you have %d guesses left" %guessed
    guess_word = raw_input("Guess the word!: ")

    for i in range(len(word)):
        if guess_word == word[i]:
            word_cell[i] = word[i]
            guessed += 1

    guessed -=1



#    /------------
#    |           |
#    |          ( )
#    |         \ | /
#    |          \|/
#    |           |
#    |          / \
#    |         /   \
#   ___
