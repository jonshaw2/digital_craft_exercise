height = int(raw_input("Height? "))

width = int(1+((height-1)*2))
start_position = int(((width-1)/2))
x = start_position
y = start_position

for i in range(height):
    a=""
    for j in range(width):
        space = True

        for k in range(x,y+1):
            if j == k:
                a=a+"*"
                space = False

        if space == True:
            a=a+" "

    x=x-1
    y=y+1
    print a
