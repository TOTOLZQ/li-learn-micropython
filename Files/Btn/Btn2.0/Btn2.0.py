import os, sys, io
import M5
from M5 import *
import time


title0 = None


def btnA_wasClicked_event(state):
    global title0
    title0.setText('BtnA Was Clicked')
    time.sleep(3)
    show_press_twice_to_continue()
    Widgets.fillScreen(0xffffff)
    title0.setText('Title')


def show_press_twice_to_continue():
    Widgets.fillScreen(0xffffff)

    bar_w = 64
    bar_h = 6
    rest_y = 22
    ground_y = 42
    bar_x = (240 - bar_w) // 2

    M5.Lcd.setFont(M5.Lcd.FONTS.DejaVu18)
    text = 'Double Click to Continue'
    try:
        text_w = M5.Lcd.textWidth(text)
    except Exception:
        text_w = 180
    M5.Lcd.setTextColor(0x000000, 0xffffff)
    M5.Lcd.setCursor((240 - text_w) // 2, 64)
    M5.Lcd.print(text)

    M5.Lcd.setFont(M5.Lcd.FONTS.DejaVu12)
    btn_text = 'Btn Go'
    try:
        btn_w = M5.Lcd.textWidth(btn_text)
    except Exception:
        btn_w = 40
    M5.Lcd.setCursor((240 - btn_w) // 2, 112)
    M5.Lcd.print(btn_text)

    def ease_out_cubic(t):
        t = 1.0 if t > 1.0 else (0.0 if t < 0.0 else t)
        return 1 - (1 - t) ** 3

    y = float(rest_y)
    vy = 0.0
    pressing = False
    last_release_ms = 0
    click_count = 0

    hint_static_drawn = False
    bar_clear_y = rest_y - 2
    bar_clear_h = ground_y + bar_h + 4 - bar_clear_y

    def draw_static_hint():
        for i in range(3):
            shade = 0x1b - i * 0x07
            shade = max(0x08, shade)
            color = (shade << 16) | (shade << 8) | shade
            iy = 8 + i * 4
            M5.Lcd.fillRoundRect(bar_x + 8, iy, bar_w - 16, 2, 1, color)

    draw_static_hint()
    M5.Lcd.fillRoundRect(bar_x, rest_y, bar_w, bar_h, 3, 0x1be6e1)
    hint_static_drawn = True

    while True:
        M5.update()
        now_ms = time.ticks_ms()

        if BtnA.wasPressed():
            click_count += 1
            if click_count >= 2 and time.ticks_diff(now_ms, last_release_ms) < 400:
                break
            pressing = True
        if BtnA.wasReleased():
            last_release_ms = now_ms
            pressing = False

        if pressing:
            vy += 0.35
        else:
            vy += -0.13 * (y - rest_y) - 0.28 * vy

        y += vy

        if y >= ground_y:
            y = float(ground_y)
            vy = 0.0
        elif y <= rest_y:
            if vy < -0.3:
                y = float(rest_y)
                vy = -vy * 0.22
            else:
                y = float(rest_y)
                vy = 0.0

        drop_progress = max(0.0, min(1.0, (y - rest_y) / (ground_y - rest_y)))
        squash = int(3 * ease_out_cubic(drop_progress)) if pressing else 0
        bar_h_actual = bar_h + squash

        M5.Lcd.fillRect(bar_x - 2, bar_clear_y, bar_w + 4, bar_clear_h, 0xffffff)

        if not pressing and abs(y - rest_y) < 0.5 and abs(vy) < 0.3:
            if not hint_static_drawn:
                draw_static_hint()
                hint_static_drawn = True
        else:
            hint_static_drawn = False

        M5.Lcd.fillRoundRect(bar_x, int(round(y)), bar_w, int(bar_h_actual), 3, 0x1be6e1)
        time.sleep(0.04)


def setup():
    global title0

    M5.begin()

    show_press_twice_to_continue()

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
