import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from js import document

data_add = document.getElementById('add')
calculate = document.getElementById('calculate')

def calculate():
  x_list = []
  y_list = []

  data = document.getElementById('data')
  num_data = data.childElementCount

  exist_num = []
  for i in range(num_data):
    if (document.getElementById('data_x_' + str(i)).value) and (document.getElementById('data_y_' + str(i)).value):
      exist_num.append(i)
  print(exist_num)

  # for i in range(num_data):
  #   x_list.append(float(document.getElementById('data_x_' + str(i)).value))
  #   y_list.append(float(document.getElementById('data_y_' + str(i)).value))

  for i in exist_num:
    x_list.append(float(document.getElementById('data_x_' + str(i)).value))
    y_list.append(float(document.getElementById('data_y_' + str(i)).value))

  x = np.array(x_list)
  y = np.array(y_list)

  xc = x - x.mean()
  yc = y - y.mean()

  xx = xc * xc
  xy = xc * yc

  a = xy.sum() / xx.sum()
  a_message = '傾きは' + str(a) + 'です。'
  display(a_message, target='display_a', append=False)

  plt.cla()
  plt.scatter(x=xc, y=yc)
  plt.plot(x, a * x, c='red')
  display(plt, target='display_plt', append=False)

# x = np.array([1, 2, 3])
# y = np.array([2, 3.9, 6.1])