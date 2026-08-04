<div align="center">
  <img src="https://m5stack.com/cdn-cgi/image/width=400,quality=80,format=auto/products/core-basic/Core-Basic-01.png" width="300" alt="Cardputer 1.1" />
</div>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/license-GPL--3.0-blue.svg" alt="License" />
  <img src="https://img.shields.io/badge/language-MicroPython-2b5b84.svg" alt="Language" />
  <img src="https://img.shields.io/badge/platform-Cardputer%201.1-orange.svg" alt="Platform" />
  <img src="https://img.shields.io/badge/status-learning-success.svg" alt="Status" />
</div>

<br/>

<div align="center">
  <strong>[中文](#中文) · [English](#english)</strong>
</div>

---

## 中文

**li-learn-micropython** 是一个为 M5Stack Cardputer 1.1 设计的 MicroPython 学习项目。我们将带你一步步学习如何使用代码控制屏幕、按键和键盘等硬件外设。

每个功能都会按版本迭代，并配有详细的版本说明文档，方便你追踪学习进度。

### ✨ 特性

- 🎨 **可视化界面**：通过屏幕显示丰富的交互内容
- 🎮 **外设交互**：学习如何读取按键、键盘输入
- 📚 **版本控制**：每个功能都有独立的版本演进历史
- 🌍 **中英双语**：所有文档均支持中英文双语

### 📁 目录结构

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

### 🛠️ 功能模块

| 模块 | 版本 | 功能说明 | 版本文档 |
| :--- | :--- | :--- | :--- |
| Btn | [Btn1.0](Files/Btn/Btn1.0/Btn1.0.py) | 按键 A 点击事件响应，点击后屏幕显示提示文字 | [Ver.md](Files/Btn/Btn1.0/Ver.md) |
| Btn | [Btn2.0](Files/Btn/Btn2.0/Btn2.0.py) | 双击继续交互，带弹跳动画效果 | [Ver.md](Files/Btn/Btn2.0/Ver.md) |
| Keyboard | [Keyboard1.0](Files/Keyboard/Keyboard1.0/Keyboard1.0.py) | 仅支持输入 | [Ver.md](Files/Keyboard/Keyboard1.0/Ver.md) |
| Screen | [Screen1.0](Files/Screen/Screen1.0/Screen1.0.py) | 屏幕彩虹色循环显示 | [Ver.md](Files/Screen/Screen1.0/Ver.md) |

### 🚀 快速开始

1. 准备一台 M5Stack Cardputer 1.1 设备。
2. 刷入支持 MicroPython 的最新固件。
3. 将 `Files/` 下对应版本的 `.py` 文件上传到设备。
4. 运行即可看到对应效果。

### 📄 许可证

本项目基于 [GPL-3.0](LICENSE) 协议开源。

---

## English

**li-learn-micropython** is a MicroPython learning project designed for the M5Stack Cardputer 1.1. We will guide you step by step on how to control hardware peripherals like screens, buttons, and keyboards using code.

Each feature iterates by version and comes with detailed version notes so you can track your learning progress.

### ✨ Features

- 🎨 **Visual Interface**: Display rich interactive content on the screen
- 🎮 **Peripheral Interaction**: Learn how to read buttons and keyboard input
- 📚 **Version Control**: Each feature has an independent version evolution history
- 🌍 **Bilingual**: All documents support both Chinese and English

### 📁 Directory Structure

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

### 🛠️ Feature Modules

| Module | Version | Features | Version Notes |
| :--- | :--- | :--- | :--- |
| Btn | [Btn1.0](Files/Btn/Btn1.0/Btn1.0.py) | Button A click response; shows hint text on click | [Ver.md](Files/Btn/Btn1.0/Ver.md) |
| Btn | [Btn2.0](Files/Btn/Btn2.0/Btn2.0.py) | Double-click to continue with bounce animation | [Ver.md](Files/Btn/Btn2.0/Ver.md) |
| Keyboard | [Keyboard1.0](Files/Keyboard/Keyboard1.0/Keyboard1.0.py) | Input only | [Ver.md](Files/Keyboard/Keyboard1.0/Ver.md) |
| Screen | [Screen1.0](Files/Screen/Screen1.0/Screen1.0.py) | Screen cycles through rainbow colors | [Ver.md](Files/Screen/Screen1.0/Ver.md) |

### 🚀 Quick Start

1. Prepare an M5Stack Cardputer 1.1 device.
2. Flash the latest MicroPython firmware.
3. Upload the desired `.py` file from `Files/` to the device.
4. Run it to see the result.

### 📄 License

This project is open-sourced under the [GPL-3.0](LICENSE) license.
