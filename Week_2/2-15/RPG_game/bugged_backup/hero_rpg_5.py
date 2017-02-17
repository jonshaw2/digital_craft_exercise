"""
Added a store. The hero can now buy a tonic or a sword. A tonic will add 2 to the hero's health wherease a sword will add 2 power.
"""
import time
import random


class Character(object):
    def __init__(self):
        self.name = '<undefined>'
        self.health = 10
        self.max_health = self.health
        self.power = 5
        self.coins = 0
        self.critical = 0
        self.regen_chance = 0
        self.regen_power = 0
        self.dodge = 0
        self.bounty = 0
        self.armor = 0
        self.agility = 5

    def alive(self):
        return self.health > 0

    def attack(self, enemy):

        attack_time = int(self.agility/enemy.agility)
        if attack_time <= 0:
            attack_time = 1

        print attack_time
        for i in range(attack_time):
            if not self.alive():
                enemy.coins += self.bounty
                print "%s received a bounty of %d" %(enemy.name, self.bounty)
                return

            print "%s attacks %s" % (self.name, enemy.name)


            if random.randint(1,100) < self.critical:
                print "critical strike!"

                if ((self.power)*2)-enemy.armor < 0:
                    enemy.receive_damage(0)
                else:
                    enemy.receive_damage((self.power)*2-enemy.armor)
            else:

                if (self.power - enemy.armor < 0):
                    enemy.receive_damage(0)
                else:
                    enemy.receive_damage(self.power-enemy.armor)


        time.sleep(0.5)

    def receive_damage(self, points):

        if random.randint(1,100) < self.dodge:
            print "attack is dodged"

        else:
            self.health -= points
            print "%s received %d damage." % (self.name, points)

        if random.randint(1,100) < self.regen_chance:
            self.restore(self.regen_power)

            if self.health <= 0:
                print "%s is dead." % self.name


    def print_status(self):
        print "%s has %d health and %d power." % (self.name, self.health, self.power)


    def restore(self, amount):
        self.health = self.health + amount
        if self.health > self.max_health:
            self.health = self.max_health
        print "healed for %d amount" %(amount)
        print "%s's health is restored to %d!" % (self.name, self.health)
        time.sleep(0.5)



    def check_inventory(self):
        #print "What do you want to do?"
        #for i in xrange(len(Store.items)):
        id = 1
        #for i in self.inventory:
        #    item = self.inventory[i]
        #    print "%d. %s [%d]" % (id, i, self.inventory[i])
        #    id += 1
        #print "10. leave"
        #input = int(raw_input("> "))

        #while True:
        #    if input == 10:
        #        break
        #    else:
                #ItemToBuy = Store.items[input - 1]
                #item = ItemToBuy()
                #hero.buy(item)
        pass
class Hero(Character):
    def __init__(self):
        Character.__init__(self)
        self.name = 'hero'
        self.health = 10
        self.max_health = self.health
        self.power = 5
        self.coins = 20
        self.critical = 100
        self.regen_chance = 100
        self.regen_power = 3
        self.dodge = 10
        self.armor = 1
        self.agility = 10
        self.inventory = [[],[]]


    def buy(self, item):
        if self.coins >= item.cost:
            self.coins -= item.cost
            item.apply(hero)
            #if item.name not in self.inventory:
            #    self.inventory[0].append(item.name)
            #    self.inventory[1].append(1)
            #    print self.inventory

        else:
            print "not enough monies!"

class Medic(Character):
    def __init__(self):
        Character.__init__(self)
        self.name = 'medic'
        self.health = 10
        self.power = 5
        self.coins = 20
        self.regen_chance = 20
        self.regen_power = 2
        self.bounty = 10


class Shadow(Character):
    def __init__(self):
        Character.__init__(self)
        self.name = 'shadow'
        self.health = 10
        self.power = 5
        self.coins = 20
        self.dodge = 90

class Goblin(Character):
    def __init__(self):
        Character.__init__(self)
        self.name = 'goblin'
        self.health = 6
        self.power = 2
        self.bounty = 5


class Wizard(Character):
    def __init__(self):
        Character.__init__(self)
        self.name = 'wizard'
        self.health = 8
        self.power = 1
        self.bounty = 6

    def attack(self, enemy):
        swap_power = random.random() > 0.5
        if swap_power:
            print "%s swaps power with %s during attack" % (self.name, enemy.name)
            self.power, enemy.power = enemy.power, self.power
        super(Wizard, self).attack(enemy)
        if swap_power:
            self.power, enemy.power = enemy.power, self.power

class Zombie(Character):
    def __init__(self):
        Character.__init__(self)
        self.name = 'zombie'
        self.health = 1
        self.power = 1
        self.bounty = 100

    def alive(self):
        print "the %s stares at you" % (self.name)
        return True

    def receive_damage(self, points):

        if random.randint(1,100) < self.dodge:
            print "attack is dodged"

        else:
            self.health -= points
            print "%s received %d damage." % (self.name, points)
            if self.health <= 0:
                print "%s is already dead inside." % self.name

        if random.randint(1,100) < self.regen_chance:
            self.health += self.regen_power
            print "%s healed for %d amount" % (self.name, self.regen_power)

class Final_Boss(Character):
    def __init__(self):
        Character.__init__(self)
        self.name = 'Final Boss'
        self.health = 100
        self.power = 20
        self.coins = 1000
        self.critical = 20
        self.regen_chance = 100
        self.regen_power = 10
        self.dodge = 20
        self.armor = 5
        self.agility = 20

class Dopple_Ganger(Hero):
    def __init__(self):
        Hero.__init__(self)
        self.name = self.name + "?"
        self.bounty = self.coins


class Battle(object):
    def do_battle(self, hero, enemy):
        print "====================="
        print "Hero faces the %s" % enemy.name
        print "====================="
        while hero.alive() and enemy.alive():
            hero.print_status()
            enemy.print_status()
            time.sleep(0.5)
            print "-----------------------"
            print "What do you want to do?"
            print "1. fight %s" % enemy.name
            print "2. use item"
            print "3. do nothing"
            print "4. flee"

            print "> ",
            input = int(raw_input())
            if input == 1:
                hero.attack(enemy)
            elif input == 2:
                hero.check_inventory()
            elif input == 3:
                pass
            elif input == 4:
                print "Goodbye."
                exit(0)
            else:
                print "Invalid input %r" % input
                continue
            enemy.attack(hero)
        if hero.alive():
            print "You defeated the %s" % enemy.name
            return True
        else:
            print "YOU LOSE!"
            return False

class Supertonic(object):
    cost = 20
    name = 'super tonic'
    def apply(self, character):
        character.health += 10
        print "%s's health increased to %d." % (character.name, character.health)

class Tonic(object):
    cost = 5
    name = 'tonic'
    def apply(self, character):
        character.health += 2
        character.restore(2)
        #print "%s's health increased to %d." % (character.name, character.health)

class Sword(object):
    cost = 10
    name = 'sword'
    def apply(self, hero):
        hero.power += 2
        print "%s's power increased to %d." % (hero.name, hero.power)

class Armor(object):
    cost = 15
    name = 'armor'
    def apply(self, hero):
        hero.armor += 2
        print "%s's armor increased to %d." % (hero.name, hero.armor)

class Evasion(object):
    cost = 20
    name = 'evasion'
    def apply(self, hero):
        if hero.dodge >= 90:
            print "max dodge chance already reached!"
            hero.coin += 20
        elif hero.dodge + 5 == 90:
            print "maxed dodge chance achieved!"
            hero.dodge = 90

            hero.dodge += 5
        else:
            print "%s's dodge increased to %d" % (hero.name, hero.dodge)

class Agility(object):
    cost = 30
    name = 'Agility'
    def apply(self, hero):
        hero.agility += 5
        print "%s's agility increased to %d." % (hero.name, hero.agility)

class Store(object):
    # If you define a variable in the scope of a class:
    # This is a class variable and you can access it like
    # Store.items => [Tonic, Sword]
    items = [Tonic, Sword, Supertonic, Armor, Evasion, Agility]
    def do_shopping(self, hero):
        while True:
            print "====================="
            print "Welcome to the store!"
            print "====================="
            print "You have %d coins." % hero.coins
            print "What do you want to do?"
            for i in xrange(len(Store.items)):
                item = Store.items[i]
                print "%d. buy %s (%d)" % (i + 1, item.name, item.cost)
            print "10. leave"
            input = int(raw_input("> "))
            if input == 10:
                break
            else:
                ItemToBuy = Store.items[input - 1]
                item = ItemToBuy()
                hero.buy(item)


hero = Hero()
enemies = [Goblin(), Wizard(), Medic(), Shadow(), Dopple_Ganger(), Final_Boss(),Zombie()]
battle_engine = Battle()
shopping_engine = Store()

for enemy in enemies:
    hero_won = battle_engine.do_battle(hero, enemy)
    if not hero_won:
        print "YOU LOSE!"
        exit(0)
    shopping_engine.do_shopping(hero)

print "YOU WIN!"
