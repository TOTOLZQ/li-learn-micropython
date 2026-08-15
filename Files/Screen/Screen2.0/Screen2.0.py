import os, sys, io
import M5
from M5 import *
import time


COLORS = (0xff0000, 0xff6600, 0xffff00, 0x33cc00, 0x66ffff, 0x3366ff, 0x6600cc)
_INDEX = 0
_STEPS = 30
_TRANSITION_MS = 0.02
_HOLD_S = 0.5


def _lerp(a, b, t):
  return int(a + (b - a) * t)


def _blend(c1, c2, t):
  r1, g1, b1 = (c1 >> 16) & 0xff, (c1 >> 8) & 0xff, c1 & 0xff
  r2, g2, b2 = (c2 >> 16) & 0xff, (c2 >> 8) & 0xff, c2 & 0xff
  r = _lerp(r1, r2, t)
  g = _lerp(g1, g2, t)
  b = _lerp(b1, b2, t)
  return (r << 16) | (g << 8) | b


def _fade_to(target):
  current = COLORS[_INDEX]
  for i in range(1, _STEPS + 1):
    t = i / _STEPS
    Widgets.fillScreen(_blend(current, target, t))
    time.sleep(_TRANSITION_MS)


def setup():
  M5.begin()
  Widgets.fillScreen(COLORS[0])


def loop():
  global _INDEX
  M5.update()
  next_index = (_INDEX + 1) % len(COLORS)
  _fade_to(COLORS[next_index])
  _INDEX = next_index
  time.sleep(_HOLD_S)


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
