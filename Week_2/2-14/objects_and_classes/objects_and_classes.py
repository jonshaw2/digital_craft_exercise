class Person(object):

    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []
        self.greeting_counter = 0
        self.unique_greeting = 0
        self.greeted_friend = []

    def __repr__(self):
        return "Name: %s Email: %s Phone: %s \n He/She has %d friends." %(self.name, self.email, self.phone, len(self.friends))

    def greet(self, other_person):
        self.greeting_counter += 1

        if other_person not in self.greeted_friend:
            self.unique_greeting += 1
            self.greeted_friend.append(other_person)

        print 'Hello %s, I am %s!' % (other_person.name, self.name)

    def print_contact_info(self):
        print "%s\'s email: %s, %s\'s phone number: %s" %(self.name, self.email, self.name, self.phone)

    def add_friend(self, friend):
        self.friends.append(friend)

    def num_friends(self):
        print len(self.friends)

    def greeting_count(self):
        print self.greeting_counter

    def num_unique_people_greeted(self):
        print "you have greeted %d unique people" %(self.unique_greeting)


sonny = Person("Sonny","sonny@hotmail.com","483-485-4948")
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

sonny.greet(jordan)
jordan.greet(sonny)
jordan.greet(sonny)
jordan.greet(sonny)

print "\n"
print sonny.name
print sonny.phone
print sonny.email
print "\n"
print jordan.name
print jordan.phone
print jordan.email

sonny.print_contact_info()

jordan.add_friend(sonny)
jordan.num_friends()
jordan.greeting_count()

print "\n"
print (jordan)

jordan.num_unique_people_greeted()
jordan.greet(jordan)

jordan.num_unique_people_greeted()
jordan.greet(sonny)

jordan.num_unique_people_greeted()
