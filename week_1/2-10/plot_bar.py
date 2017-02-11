import matplotlib.pyplot as plot

xrange = range(-5,6)
ys = []
def y_value(x):
    if x%2 == 0:
        return -1
    else:
        return 1


for i in xrange:
    ys.append(y_value(i))

plot.bar(xrange, ys)
plot.show()
