fibonacci = [1,2]
num_add = 3
limit = 4000000
fib_x=0
fib_y=1
total = 0

while num_add <= limit:
    num_add = fibonacci[fib_x]+fibonacci[fib_y]

    if num_add < limit:
        fibonacci.append(num_add)

    fib_x += 1
    fib_y += 1



print fibonacci

for i in fibonacci:
    if i%2==0:
        total += i

print total

#current, previous = current + previous, current
