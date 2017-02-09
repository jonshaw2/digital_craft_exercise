text = ["l","b","h"," ","z","h","f","g"," ","h","a","y","r","n","e","a"," ","j","u","n","g"," ","l","b","h"," ","u","n","i","r"," ","y","r","n","e","a","r","q"]

amount = int(raw_input("Increase by?: "))

for i in range(len(text)):
    text[i] = ord(text[i])
    text[i] = text[i]+amount
    text[i] = chr(text[i])

print text
