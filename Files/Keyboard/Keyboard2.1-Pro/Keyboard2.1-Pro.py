import os, sys, io
import M5
from M5 import *
from hardware import MatrixKeyboard

label0 = None
label1 = None
label_count = None
kb = None
total_count = 0
last_char = ""

def kb_pressed_event(kb_0):
    global label1, label_count, total_count, last_char
    char = str(kb_0.get_string())
    if len(char) == 1 and 32 <= ord(char) <= 126:
        if char != last_char:
            M5.Lcd.fillRect(70, 60, 120, 70, 0xF5F5F5)
            label1.setText(char)
            last_char = char
        total_count += 1
        label_count.setText("Count: " + str(total_count))
    else:
        if last_char != "":
            M5.Lcd.fillRect(70, 60, 120, 70, 0xF5F5F5)
            label1.setText("")
            last_char = ""
        if total_count > 0:
            total_count -= 1
            label_count.setText("Count: " + str(total_count))

def setup():
    global label0, label1, label_count, kb, total_count, last_char

    M5.begin()
    Widgets.fillScreen(0xF5F5F5)
    M5.Lcd.fillRect(0, 0, 240, 30, 0x2B579A)
    M5.Lcd.fillRect(0, 30, 240, 2, 0xFF6B00)
    label0 = Widgets.Label("State", 3, 3, 1.0, 0xFFFFFF, 0x2B579A, Widgets.FONTS.AlibabaPuHuiTiCN24)
    label_count = Widgets.Label("Count: 0", 125, 6, 1.0, 0xFFFFFF, 0x2B579A, Widgets.FONTS.DejaVu18)
    label1 = Widgets.Label("", 81, 67, 1.0, 0x2B579A, 0xF5F5F5, Widgets.FONTS.Montserrat44)

    kb = MatrixKeyboard()
    kb.set_callback(kb_pressed_event)
    total_count = 0
    last_char = ""

def loop():
    global kb
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