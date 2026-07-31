import os, sys, io
import M5
from M5 import *
from hardware import MatrixKeyboard



label0 = None
label1 = None
kb = None


def kb_pressed_event(kb_0):
  global label0, label1, kb, pahub_0, rgb_0, gpsv11_0, rfid_0
  label1.setText(str(kb.get_string()))


def setup():
  global label0, label1, kb, pahub_0, rgb_0, gpsv11_0, rfid_0

  M5.begin()
  Widgets.fillScreen(0xeee6eb)
  label0 = Widgets.Label("State", 3, 3, 1.0, 0xffffff, 0x222222, Widgets.FONTS.AlibabaPuHuiTiCN24)
  label1 = Widgets.Label("label1", 81, 67, 1.0, 0xffffff, 0x222222, Widgets.FONTS.Montserrat44)

  kb = MatrixKeyboard()
  kb.set_callback(kb_pressed_event)


def loop():
  global label0, label1, kb, pahub_0, rgb_0, gpsv11_0, rfid_0
  M5.update()
  kb.tick()


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
