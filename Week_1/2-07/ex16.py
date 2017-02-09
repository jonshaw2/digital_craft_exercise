from sys import argv

script, filename = argv

print "We're going to erase %r." % filename
print "If you don't want that, hit CTRL-C (^C)."
print "If you do want that, hit RETURN."

raw_input("?")
target = open(filename, 'r+')

target.write("what is this?\n")
target.write("this is line 2")
print target.read()
target.close()
