import os, sys, io
import M5
from M5 import *
import time






def setup():

  M5.begin()
  Widgets.fillScreen(0xff0000)



def loop():
  M5.update()
  Widgets.fillScreen(0xff0000)
  time.sleep(1)
  Widgets.fillScreen(0xff6600)
  time.sleep(1)
  Widgets.fillScreen(0xffff00)
  time.sleep(1)
  Widgets.fillScreen(0x33cc00)
  time.sleep(1)
  Widgets.fillScreen(0x66ffff)
  time.sleep(1)
  Widgets.fillScreen(0x3366ff)
  time.sleep(1)
  Widgets.fillScreen(0x6600cc)
  time.sleep(1)


if __name__ == '__main__':
  try:
    setup()
    while True:
      loop()
  except (Exception, KeyboardInterrupt) as e:
    try:
      from utility import print_error_msg
      print_error_msg(e)
    except ImportError:
      print("please update to latest firmware")
