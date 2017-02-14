from word_summary import *
from letter_summary import *

word_counter = letter_histogram('banana')
word_lib = word_histogram('to be or not to be')

print word_counter
print word_lib

combine = {}

for i in word_counter:
    combine[i] = combine.get(i,0)
    combine[i] = combine[i] + word_counter[i]
    print i

for j in word_lib:
    combine[j] = combine.get(j,0)
    combine[j] = combine[j] + word_lib[j]

print combine
