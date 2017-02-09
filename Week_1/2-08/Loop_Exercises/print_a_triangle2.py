height = int(raw_input("Height? "))
width = int(1+(height-1)*2)
1,3,5,7,9
4,3,2,1,0
for i in range(height):
    print " "*(height-(i+1))+"*"*(((i+1)*2)-1)
