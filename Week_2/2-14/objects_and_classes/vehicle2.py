class Person(object):
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone

    def greet(self, other_person):
        print 'Hello %s, I am %s!' % (other_person.name, self.name)




class Vehicle():
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def print_info(self):
        print "%s %s %.f" %(self.make, self.model, self.year)

car = Vehicle('Nissan', 'Leaf', 2015)

print car.make
print car.model
print car.year

car.print_info()
