total_bill = float(raw_input("Total bill amount? "))

service = "filler"

while service != "good" and service != "fair" and service != "bad":
    service = raw_input("Level of service?")

split_amount = float(raw_input("Split how many ways?"))

if service == "good":
    tip = total_bill*0.2
if service == "fair":
    tip = total_bill*0.15
if service =="bad":
    tip = total_bill*0.1

total_bill = total_bill+tip
amount_per_person = total_bill / split_amount
print "Tip amount: $%d" %tip
print 'Total amount: $%d' %total_bill
print "Amount per person: $%d" %amount_per_person
