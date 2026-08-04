# li-learn-micropython

> 为 Cardputer 1.1 准备的 MicroPython 学习项目 / A MicroPython learning project for Cardputer 1.1

![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)
![Language](https://img.shields.io/badge/language-MicroPython-2b5b84.svg)
![Platform](https://img.shields.io/badge/platform-Cardputer%201.1-orange.svg)
![Status](https://img.shields.io/badge/status-learning-success.svg)

在 M5Stack Cardputer 1.1 上用 MicroPython 逐步练习按键、屏幕、键盘等基础外设，每个功能按版本迭代演进，并配有版本说明文档。

Learn MicroPython step by step on the M5Stack Cardputer 1.1, practicing basic peripherals such as buttons, screen, and keyboard. Each feature evolves by version and ships with its own version notes.

## 目录结构 / Directory Structure

```text
Files
├── Btn           按键模块 / Button module
│   ├── Btn1.0
│   └── Btn2.0
├── Keyboard      键盘模块 / Keyboard module
│   └── Keyboard1.0
└── Screen        屏幕模块 / Screen module
    └── Screen1.0
```

## 功能模块 / Feature Modules

| 模块 / Module | 版本 / Version | 功能说明 / Features | 版本文档 / Version Notes |
| :--- | :--- | :--- | :--- |
| Btn | [Btn1.0](Files/Btn/Btn1.0/Btn1.0.py) | 按键 A 点击事件响应，点击后屏幕显示提示文字<br>Button A click response, shows hint text on click | [Ver.md](Files/Btn/Btn1.0/Ver.md) |
| Btn | [Btn2.0](Files/Btn/Btn2.0/Btn2.0.py) | 双击继续交互，带弹跳动画效果<br>Double-click to continue with bounce animation | [Ver.md](Files/Btn/Btn2.0/Ver.md) |
| Keyboard | [Keyboard1.0](Files/Keyboard/Keyboard1.0/Keyboard1.0.py) | 仅支持输入<br>Input only | [Ver.md](Files/Keyboard/Keyboard1.0/Ver.md) |
| Screen | [Screen1.0](Files/Screen/Screen1.0/Screen1.0.py) | 屏幕彩虹色循环显示<br>Screen cycles through rainbow colors | [Ver.md](Files/Screen/Screen1.0/Ver.md) |

## 快速开始 / Quick Start

1. 准备一台 M5Stack Cardputer 1.1 设备。 / Prepare an M5Stack Cardputer 1.1 device.
2. 刷入支持 MicroPython 的最新固件。 / Flash the latest MicroPython firmware.
3. 将 `Files/` 下对应版本的 `.py` 文件上传到设备。 / Upload the `.py` file of the desired version from `Files/` to the device.
4. 运行即可看到对应效果。 / Run it to see the result.

## 许可证 / License

本项目基于 [GPL-3.0](LICENSE) 协议开源。 / This project is open-sourced under the [GPL-3.0](LICENSE) license.
