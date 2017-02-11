import matplotlib as plot

celcius = float(raw_input("Celcius?: "))
Fahrenheight = celcius*1.8 + 32
x_axis = ["Celcius", "Fahrenheight"]
temp = [celcius, Fahrenheight]


plot.bar(x_axis, temp)
plot.show()
