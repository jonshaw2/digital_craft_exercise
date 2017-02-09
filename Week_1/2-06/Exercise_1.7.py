total_bill = float(raw_input("Total bill amount? "))

service = "filler"

while service != "good" and service != "fair" and service != "bad":
    service = raw_input("Level of service? ")

if service == "good":
    tip = float(total_bill* 0.2)
    total_bill = float(total_bill + tip)
if service == "fair":
    tip = float(total_bill * 0.15)
    total_bill = float(total_bill + tip)
if service == "bad":
    tip = float(total_bill * 0.1)
    total_bill = float(total_bill + tip)

print "Tip amount: $%0.2f" % tip
print "Total amount: $%0.2f" % total_bill
