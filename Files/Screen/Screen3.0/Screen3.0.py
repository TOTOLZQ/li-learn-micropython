import time
import M5
from M5 import *

COLORS = (0xff0000, 0xff6600, 0xffff00, 0x33cc00, 0x66ffff, 0x3366ff, 0x6600cc)
STEPS = 30
TRANSITION_MS = 20
HOLD_MS = 500


def _build_frames():
    frames = []
    count = len(COLORS)
    for i in range(count):
        c1 = COLORS[i]
        c2 = COLORS[(i + 1) % count]
        r1, g1, b1 = c1 >> 16 & 0xff, c1 >> 8 & 0xff, c1 & 0xff
        dr = (c2 >> 16 & 0xff) - r1
        dg = (c2 >> 8 & 0xff) - g1
        db = (c2 & 0xff) - b1
        for s in range(1, STEPS + 1):
            frames.append(
                (r1 + dr * s // STEPS) << 16
                | (g1 + dg * s // STEPS) << 8
                | (b1 + db * s // STEPS)
            )
    return frames


FRAMES = _build_frames()
TOTAL_FRAMES = len(FRAMES)
_frame_pos = 0


def setup():
    M5.begin()
    Widgets.fillScreen(COLORS[0])


def loop():
    global _frame_pos
    M5.update()
    fill = Widgets.fillScreen
    sleep = time.sleep_ms
    pos = _frame_pos
    for _ in range(STEPS):
        fill(FRAMES[pos])
        pos += 1
        sleep(TRANSITION_MS)
    _frame_pos = 0 if pos == TOTAL_FRAMES else pos
    sleep(HOLD_MS)


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