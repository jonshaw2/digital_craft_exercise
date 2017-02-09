import random
secret_number = random.randint(1,10)
guess_counter = 5
again = True
end = False

print "I a thinking of a number between 1 and 10"
print "you have %d guesses left." %guess_counter

while True:
    guess = float(raw_input('What\'s the number?'))
    if guess > secret_number:
        print "%d is too high" %guess
        guess_counter -=1
        print "you have %d guesses left." %guess_counter
    if guess < secret_number:
        print "%d is too low" %guess
        guess_counter -=1
        print "you have %d guesses left." %guess_counter

    if guess == secret_number:
        print "Yes! You win!"
        end = True

    if guess_counter == 0:
        print "You ran out of guesses!"
        end = True

    if end == True:
        end = False
        while True:
            question = raw_input ("Do you want to play again (Y or N)?")
            if question == "N":
                again = False
                print "Bye!"
                break
            elif question == "Y":
                secret_number = random.randint(1,10)
                guess_counter = 5
                again = True
                break
        question = "filler"

    if again == False:
        break
