import matplotlib.pyplot as plot

def square_it(x):
    return x*x
xs = range(-100,101)
ys = []

for i in xs:
    ys.append(square_it(i))

plot.plot(xs,ys)
plot.show()
