width = int( raw_input("Width? "))
height = int (raw_input("Height? "))

for i in range(height):
    a=""
    for j in range(width):
        if i==0 or i==height-1 or j ==0 or j==width-1:
            a=a+"*"
        else:
            a=a+" "
    print a
