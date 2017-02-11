import matplotlib.pyplot as plot
from math import sin
from numpy import arange

xs = arange(-5,6,.1)
ys = []

def plot_y(x):
    return sin(x)

for i in xs:
    ys.append(plot_y(i))

plot.plot(xs,ys)
plot.show()
