number = int (raw_input ("Number to factor: "))

counter = []

for i in range(1,number+1):
    if number%(i) == 0:
        counter.append(i)

print counter
