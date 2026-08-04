# li-learn-micropython

![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)
![Language](https://img.shields.io/badge/language-MicroPython-2b5b84.svg)
![Platform](https://img.shields.io/badge/platform-Cardputer%201.1-orange.svg)
![Status](https://img.shields.io/badge/status-learning-success.svg)

**[中文](#中文) · [English](#english)**

---

## 中文

为 M5Stack Cardputer 1.1 准备的 MicroPython 学习项目，逐步练习按键、屏幕、键盘等基础外设。每个功能按版本迭代演进，并配有版本说明文档。

### 目录结构

```text
Files
├── Btn           按键模块
│   ├── Btn1.0
│   └── Btn2.0
├── Keyboard      键盘模块
│   └── Keyboard1.0
└── Screen        屏幕模块
    └── Screen1.0
```

### 功能模块

| 模块 | 版本 | 功能说明 | 版本文档 |
| :--- | :--- | :--- | :--- |
| Btn | [Btn1.0](Files/Btn/Btn1.0/Btn1.0.py) | 按键 A 点击事件响应，点击后屏幕显示提示文字 | [Ver.md](Files/Btn/Btn1.0/Ver.md) |
| Btn | [Btn2.0](Files/Btn/Btn2.0/Btn2.0.py) | 双击继续交互，带弹跳动画效果 | [Ver.md](Files/Btn/Btn2.0/Ver.md) |
| Keyboard | [Keyboard1.0](Files/Keyboard/Keyboard1.0/Keyboard1.0.py) | 仅支持输入 | [Ver.md](Files/Keyboard/Keyboard1.0/Ver.md) |
| Screen | [Screen1.0](Files/Screen/Screen1.0/Screen1.0.py) | 屏幕彩虹色循环显示 | [Ver.md](Files/Screen/Screen1.0/Ver.md) |

### 快速开始

1. 准备一台 M5Stack Cardputer 1.1 设备。
2. 刷入支持 MicroPython 的最新固件。
3. 将 `Files/` 下对应版本的 `.py` 文件上传到设备。
4. 运行即可看到对应效果。

### 许可证

本项目基于 [GPL-3.0](LICENSE) 协议开源。

---

## English

A MicroPython learning project for the M5Stack Cardputer 1.1. Practice basic peripherals step by step—buttons, screen, and keyboard. Each feature evolves by version and ships with its own version notes.

### Directory Structure

```text
Files
├── Btn           Button module
│   ├── Btn1.0
│   └── Btn2.0
├── Keyboard      Keyboard module
│   └── Keyboard1.0
└── Screen        Screen module
    └── Screen1.0
```

### Feature Modules

| Module | Version | Features | Version Notes |
| :--- | :--- | :--- | :--- |
| Btn | [Btn1.0](Files/Btn/Btn1.0/Btn1.0.py) | Button A click response; shows hint text on click | [Ver.md](Files/Btn/Btn1.0/Ver.md) |
| Btn | [Btn2.0](Files/Btn/Btn2.0/Btn2.0.py) | Double-click to continue with bounce animation | [Ver.md](Files/Btn/Btn2.0/Ver.md) |
| Keyboard | [Keyboard1.0](Files/Keyboard/Keyboard1.0/Keyboard1.0.py) | Input only | [Ver.md](Files/Keyboard/Keyboard1.0/Ver.md) |
| Screen | [Screen1.0](Files/Screen/Screen1.0/Screen1.0.py) | Screen cycles through rainbow colors | [Ver.md](Files/Screen/Screen1.0/Ver.md) |

### Quick Start

1. Prepare an M5Stack Cardputer 1.1 device.
2. Flash the latest MicroPython firmware.
3. Upload the desired `.py` file from `Files/` to the device.
4. Run it to see the result.

### License

This project is open-sourced under the [GPL-3.0](LICENSE) license.
