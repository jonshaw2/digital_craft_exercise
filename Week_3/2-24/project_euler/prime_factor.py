import math

# number = 600861475143
number = 100
largest_prime = 1
factor=[]
prime=[]

print math.sqrt(number)
# for i in range(number+1)
#     for j in
for i in range(1,math.trunc((math.sqrt(number)))):
    if number%i==0:
        prime.append(i)
        prime.append(number/i)

print prime

for j in range(len(prime)):
    for i in range(1, prime[j]):
        if j%i == 0 and j%i >= largest_prime:
            largest_prime = prim[j]

print i
