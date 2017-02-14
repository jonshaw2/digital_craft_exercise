word_counter = {}

def letter_histogram(word):

    for letter in word:
        word_counter[letter] = word_counter.get(letter,0)
        word_counter[letter] = word_counter[letter] + 1

    return word_counter
letter_histogram('banana')

# for char in word:
#   if char not in counts:
#       counts[char] = 1
#   else:
#       counts[char] += 1
