day = 8
while (day < 0) or (day > 6):
    day = int(raw_input('Day (0-6)?: '))
    if (day <= 5 and day >= 1):
        print "Go to work"
    if (day == 0 or day == 6):
        print "Sleep in"
