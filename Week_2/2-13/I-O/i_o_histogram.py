file_name = 'histogram.txt'
file = open(file_name)
sentence = file.read()
word_histogram = {}
letter_histogram = {}

print sentence

word = sentence.split()

for j in sentence:
    if j not in letter_histogram and j != " " and j!= "\n":
        letter_histogram[j] = 1
    elif j != " " and j != "\n":
        letter_histogram[j] += 1

for i in word:
    if i not in word_histogram:
        word_histogram[i] = 1
    else:
        word_histogram[i] += 1

print letter_histogram
print word_histogram
