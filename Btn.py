import os, sys, io
import M5
from M5 import *
import time



title0 = None


def btnA_wasClicked_event(state):
  global title0
  Widgets.fillScreen(0xffffff)
  title0.setText('BtnA Was Clicked')
  time.sleep(2)
  Widgets.fillScreen(0xffffff)


def setup():
  global title0

  M5.begin()
  Widgets.fillScreen(0xffffff)
  title0 = Widgets.Title("Title", 3, 0xffffff, 0x1be6e1, Widgets.FONTS.Montserrat18)

  BtnA.setCallback(type=BtnA.CB_TYPE.WAS_CLICKED, cb=btnA_wasClicked_event)



def loop():
  global title0
  M5.update()


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
