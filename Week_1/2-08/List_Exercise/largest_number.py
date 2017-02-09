number = [1,5,3,4, 2, 7,9,11,-5,15,30.5, 2, 30]
number2 = [2,4,5,6, 2, 9,10,8,10,-3,20.1, 5, 10]
largest_num = number[0]
smallest_num = number[0]
even_num = []
positive_num = []
x_factor = 7
multiply_list = []
multiplied_list = []


for i in range(len(number)):
    if number[i] >= largest_num:
        largest_num = number[i]

print "Largest Number: %r" %largest_num

for i in range(len(number)):
    if number[i] <= smallest_num:
        smallest_num = number[i]

print "Smallest Number: %r" %smallest_num


for i in range(len(number)):
    if number[i]%2 == 0:
        even_num.append(number[i])

print "Even Numbers: %r" %even_num

for i in range(len(number)):
    if number[i] > 0 :
        positive_num.append(number[i])

print "Positive Number: %r" %positive_num

for i in range(len(number)):
    multiply_list.append(number[i]*x_factor)

print multiply_list

for i in range(len(number)):
    multiplied_list.append(number[i]*number2[i])

print multiplied_list
