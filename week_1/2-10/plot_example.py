import matplotlib.pyplot as plot
import matplotlib.pyplot as something
def f(x):
  return 2 * x + 1

def g(x):
  return x + 1

xs = range(-3, 5)
fys = []
for x in xs:
  fys.append(f(x))

gys = []
for x in xs:
  gys.append(g(x))


plot.plot(xs, fys, xs, gys, [5,4,3,2,1], [5,4,3,2,1])
plot.show()

something.plot([6,6,6,6,6],[5,4,3,2,1])
something.show()
