file_name = raw_input("File To Open?: ")
file = open(file_name,'r')
print file.read()
file.close()

file_name = raw_input("File To Write?: ")
file = open(file_name,'w')
file.write(raw_input("what do you want to write?: "))
file.close()
file = open(file_name,'r')
print file.read()
file.close()
