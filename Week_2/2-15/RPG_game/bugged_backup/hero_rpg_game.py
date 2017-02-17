class Character(object):

    def alive(self):
        if self.health <=0 and self.name != "zombie":
            print "The %s is dead" % self.name
            return False
        else:
            return True

    def print_status(self):
        print "The %s has %d health and %d power." % (self.name, self.health, self.power)

    def attack(self, target):
        target.health -= self.power
        print "The %s did %d damage to the %s." %(self.name, self.power, target.name)

class Hero(Character):
    def __init__(self):
        self.health = 10
        self.power = 5
        self.name = "Hero"


class Goblin(Character):
    def __init__(self):
        self.health = 6
        self.power = 2
        self.name = "goblin"

class Zombie(Character):
    def __init__(self):
        self.health = 1
        self.power = 1
        self.name = "zombie"

hero = Hero()
goblin = Goblin()
zombie = Zombie()

while goblin.alive() and hero.alive():
    print "\n"
    hero.print_status()
    #goblin.print_status()
    zombie.print_status()
    print "(Action)"
    print "1. fight goblin"
    print "2. do nothing"
    print "3. flee"
    print "> ",
    input = raw_input("What you wanna do?: ")
    if input == "1":
        # Hero attacks goblin
        #hero.attack(goblin)
        hero.attack(zombie)
    elif input == "2":
        pass

    elif input == "3":
        print "Goodbye."
        break

    else:
        print "Invalid input %r" % input



    #goblin.attack(hero)
    zombie.attack(hero)
