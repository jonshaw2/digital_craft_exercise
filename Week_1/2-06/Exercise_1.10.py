want_coin = "yes"
coin = 0
while want_coin != "no":
    print "You have %d coins" %coin
    want_coin = raw_input("Do you want another? ")
    if want_coin == "yes":
        coin+=1

print "Bye"
