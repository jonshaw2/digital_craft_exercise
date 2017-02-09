height = int(raw_input("Height? "))

width = int(1+(height-1)*2)
start_position = int(((width-1)/2)+1)
x = start_position
y = start_position

for i in range(height-1):
    a=""

    for j in range(width-1):

        for k in range(x,y+1):
            if j==k:
                a=a+"*"
        if k+1>j:
            a=a+" "

    print a
    x=x-1
    y=y+1
