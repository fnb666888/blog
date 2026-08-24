---
title: "单片机（MCU）基础知识"
description: "介绍单片机的基础知识"
summary: "介绍单片机的基础知识"
date: 2026-08-24
lastmod: 2026-08-24
draft: false
weight: 50
categories: ["基础知识"]
tags: ["单片机"]
contributors: []
pinned: false
homepage: false
params:
  seo:
    title: ""
    description: ""
    canonical: ""
    robots: ""
---



MCU 是一颗"片上系统"，内部模块众多且各司其职。下面以一颗**主流 ARM Cortex-M MCU（如 STM32F4）** 为蓝本，从内到外、从核心到外设，逐层拆解每一个模块的功能、原理和实际用途。

## 一、整体架构鸟瞰图

```
┌─────────────────────────────────────────────────────────┐
│                    MCU 芯片                              │
│                                                         │
│  ┌──────────┐  ┌──────┐  ┌───────┐  ┌───────────────┐  │
│  │ CPU Core │  │ SRAM │  │ Flash │  │ Boot ROM      │  │
│  │(Cortex-M)│  │      │  │       │  │(出厂固化程序) │  │
│  └────┬─────┘  └──┬───┘  └──┬────┘  └──────┬────────┘  │
│       │           │         │               │           │
│  ═════╪═══════════╪═════════╪═══════════════╪═════════  │
│       │        内部总线矩阵 (Bus Matrix)                │
│  ═════╪═══════════╪═════════╪═══════════════╪═════════  │
│       │           │         │               │           │
│  ┌────┴───────────┴─────────┴───────────────┴────────┐  │
│  │              外设 & 系统模块                        │  │
│  │                                                    │  │
│  │  GPIO | UART | SPI | I²C | CAN | USB | ETH        │  │
│  │  ADC  | DAC  | TIM | PWM | RTC | WDT             │  │
│  │  DMA  | NVIC | CRC  | RNG | AES/HASH            │  │
│  │  PWR  | RCC  | DBG  | MPU/FPU                   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                         │
│  Pins ←→ 外部世界                                       │
└─────────────────────────────────────────────────────────┘
```

下面按 **7 大类** 逐一详解。

---

## 二、CPU 核心（Core）

MCU 的"大脑"，负责取指、译码、执行。

| 子模块 | 功能 | 说明 |
|--------|------|------|
| **ALU** | 算术逻辑运算 | 加减乘除、位操作 |
| **寄存器组** | 通用寄存器 R0-R15 | R13=SP(栈指针), R14=LR(链接寄存器), R15=PC(程序计数器) |
| **流水线** | 指令预取+解码+执行 | Cortex-M3/M4 为 3 级流水线 |
| **FPU** | 浮点运算单元 | M4F/M7 才有，硬件加速 float/double |
| **MPU** | 内存保护单元 | 防止越界访问，RTOS 中隔离任务内存 |
| **Cache** | 指令/数据缓存 | M7 有 L1 Cache；M0/M3/M4 通常无 |
| **Bit-Band** | 位带操作 | 对单个 bit 进行原子读写（Cortex-M3/M4） |
| **SysTick** | 系统滴答定时器 | RTOS 的时基，24-bit 递减计数器 |

> 🔑 **Cortex-M 系列分级**：M0(入门) → M3(主流) → M4(DSP+FPU) → M7(高性能双核) → M23/M33(安全TrustZone) → M55/M85(AI+安全)

---

## 三、存储器系统（Memory）

### 3.1 Flash（程序存储器）
- **作用**：存放固件代码、常量表、校准参数
- **特点**：断电不丢失，按页/扇区擦写，写入前必须先擦除
- **容量**：16KB ~ 2MB+
- **特殊区域**：
  - Option Bytes：配置启动模式、读保护等级
  - OTP 区：一次性编程，存序列号/密钥

### 3.2 SRAM（数据存储器）
- **作用**：运行时变量、栈、堆、DMA 缓冲
- **特点**：断电丢失，读写速度 = CPU 主频
- **分区**（STM32F4 为例）：
  - CCM RAM：紧耦合内存，仅 CPU 可访问，DMA 不可用
  - AHB SRAM：通用，CPU 和 DMA 都可访问
  - Backup SRAM：掉电后由 VBAT 维持，存关键状态

### 3.3 Boot ROM / System Memory
- 出厂固化的引导程序
- 支持通过 UART/USB/CAN 烧录固件（ISP 模式）
- 用户不可修改

### 3.4 EEPROM / Data Flash（部分型号）
- 模拟 EEPROM 或独立数据 Flash
- 用于频繁小量写入（配置参数、日志）

---

## 四、时钟与复位系统（RCC & Reset）

**所有数字电路的心脏起搏器。**

| 模块 | 功能 |
|------|------|
| **HSI** | 内部高速 RC 振荡器（~16MHz），精度 ±1%，上电默认时钟源 |
| **HSE** | 外部高速晶振（4~26MHz），精度高，PLL 基准 |
| **LSI** | 内部低速 RC（~32kHz），供 IWDG/RTC |
| **LSE** | 外部 32.768kHz 晶振，RTC 精确时基 |
| **PLL** | 锁相环，将 HSI/HSE 倍频到系统主频（如 8MHz→168MHz） |
| **时钟树** | 分频器网络，给 AHB/APB1/APB2 总线分配不同频率 |
| **CSS** | 时钟安全系统，HSE 失效自动切回 HSI |
| **复位源** | POR/PDR/BOR/NRST/WWDG/IWDG/SOFTWARE/STANDBY |

> ⚠️ **时钟配置是 MCU 初始化的第一步**。配错 PLL 参数 → 主频不对 → UART 波特率偏差 → 通信乱码。

---

## 五、GPIO（通用输入输出）

MCU 与外部世界的**最基本接口**。

每个引脚可配置为：

| 模式 | 说明 | 典型用途 |
|------|------|---------|
| Input Floating | 浮空输入 | 外部已有上拉/下拉 |
| Input Pull-Up | 上拉输入 | 按键（低有效） |
| Input Pull-Down | 下拉输入 | 按键（高有效） |
| Output Push-Pull | 推挽输出 | LED、继电器驱动 |
| Output Open-Drain | 开漏输出 | I²C SDA/SCL、电平转换 |
| AF (Alternate Function) | 复用功能 | UART TX/RX、SPI CLK、PWM 等 |
| Analog | 模拟模式 | ADC/DAC 输入输出 |

附加特性：
- **施密特触发器**：抗噪声
- **输出速率**：低速/中速/高速/超高速（控制边沿斜率，减少 EMI）
- **外部中断**：EXTI，任意引脚可触发中断
- **唤醒源**：Stop/Standby 模式下可被 GPIO 唤醒

---

## 六、通信外设

### 6.1 UART / USART
- 异步串行，TX/RX 两线
- 支持硬件流控 RTS/CTS
- 部分支持 LIN、IrDA、SmartCard 协议
- FIFO + DMA 减轻 CPU 负担

### 6.2 SPI
- 同步全双工，4 线（SCK/MOSI/MISO/NSS）
- 主从模式，多主机仲裁
- 速率可达几十 MHz
- 常用于 Flash、LCD、传感器

### 6.3 I²C
- 同步半双工，2 线（SCL/SDA），开漏+上拉
- 7/10-bit 地址寻址
- 标准100k / 快速400k / 高速1M / 超快3.4M
- 多主多从总线

### 6.4 CAN / CAN-FD
- 差分双线（CAN_H/CAN_L）
- 多节点总线，硬件仲裁，错误检测
- 汽车/工业标准
- CAN-FD 支持更高速率和更长数据帧

### 6.5 USB
- Device / Host / OTG 模式
- Full-Speed (12Mbps) / High-Speed (480Mbps)
- CDC（虚拟串口）、HID（键盘鼠标）、MSC（U盘）、Audio 等类

### 6.6 Ethernet（高端型号）
- MAC 控制器 + 外部 PHY
- 10/100 Mbps，支持 TCP/IP 协议栈（LwIP）

---

## 七、模拟外设

### 7.1 ADC（模数转换器）
- 12/16-bit SAR 型
- 多通道（多达 24 路），扫描/注入模式
- 硬件触发（定时器/EXTI）
- 过采样 + 平均提高精度
- 内部温度传感器 / VREFINT 校准通道

### 7.2 DAC（数模转换器）
- 12-bit 输出
- 三角波/噪声波形生成
- DMA 驱动，可做音频输出

### 7.3 比较器（COMP）
- 模拟电压比较，输出数字信号
- 可触发 ADC、定时器、中断

### 7.4 运放（OPAMP，部分型号）
- 片内集成，做信号调理、跟随器

---

## 八、定时器系统（TIM）

MCU 中**数量最多、功能最丰富**的外设之一。

| 类型 | 功能 |
|------|------|
| **基本定时器** | 纯计数，触发 DAC、ADC |
| **通用定时器** | PWM 输出、输入捕获、编码器接口、单脉冲模式 |
| **高级定时器** | 互补 PWM + 死区插入 + 刹车 → 电机驱动 |
| **低功耗定时器** | Stop 模式下仍可运行 |
| **看门狗定时器** | IWDG（独立）/ WWDG（窗口），防程序跑飞 |
| **RTC** | 实时时钟，日历+闹钟+备份域供电 |
| **SysTick** | RTOS 时基 |

PWM 关键参数：频率、占空比、分辨率、死区时间、互补输出。

---

## 九、系统与辅助模块

| 模块 | 功能 |
|------|------|
| **NVIC** | 嵌套向量中断控制器，优先级分组，最多 240 个中断源 |
| **DMA** | 直接内存访问，外设↔内存/内存↔内存搬运，解放 CPU |
| **PWR** | 电源管理：Sleep/Stop/Standby 低功耗模式，电压调节器 |
| **CRC** | 硬件 CRC32 校验，验证固件完整性 |
| **RNG** | 真随机数发生器，安全/加密用途 |
| **AES / HASH / PKA** | 硬件加密加速器（高端型号） |
| **DBG** | 调试接口 SWD/JTAG，断点、单步、变量查看 |
| **Temp Sensor** | 片内温度监测 |
| **Unique ID** | 96-bit 出厂唯一标识符 |

---

## 十、模块间如何协作？——总线矩阵

所有模块不是孤立工作的，通过**多层 AHB/APB 总线矩阵**互联：

```
CPU ──── AHB Bus Matrix ──── Flash
  │              │           SRAM
  │              │           DMA
  │              │           GPIO
  │              │           ...
  │
  └── APB1 Bridge ─── UART/SPI/I²C/TIM/...
  └── APB2 Bridge ─── ADC/高级TIM/USB/...
```

- **AHB**：高速总线（= CPU 主频），连 CPU、DMA、Flash、SRAM
- **APB1/APB2**：低速外设总线（通常 AHB/2 或 AHB/4）
- **Bus Matrix**：多主设备并发访问仲裁，避免瓶颈

> ⚠️ 理解总线结构对性能优化至关重要：把频繁访问的数据放在 AHB SRAM 而非 APB 外设寄存器，把 DMA 缓冲区放在 DMA 可访问的 SRAM 区域。

---

## 十一、一张总表速查

| 类别 | 模块 | 一句话功能 |
|------|------|-----------|
| 核心 | CPU/FPU/MPU | 执行程序、浮点运算、内存保护 |
| 存储 | Flash/SRAM/Boot ROM | 存代码、存数据、引导启动 |
| 时钟 | HSI/HSE/PLL/RCC | 产生并分配系统节拍 |
| IO | GPIO/EXTI | 数字输入输出、外部中断 |
| 通信 | UART/SPI/I²C/CAN/USB/ETH | 与外界交换数据 |
| 模拟 | ADC/DAC/COMP/OPAMP | 真实世界 ↔ 数字世界 |
| 定时 | TIM/PWM/WDT/RTC/SysTick | 计时、波形、看门狗、实时钟 |
| 系统 | NVIC/DMA/PWR/CRC/RNG/DBG | 中断、搬运、省电、校验、调试 |
| 互联 | Bus Matrix/AHB/APB | 模块间数据通路 |

---

## 十二、学习建议

不要试图一次记住所有模块。推荐路径：

1. **先点亮 LED** → GPIO + RCC
2. **printf 到电脑** → UART + 时钟配置
3. **读传感器** → SPI/I²C + DMA
4. **采集模拟信号** → ADC + TIM 触发
5. **控制电机** → PWM + 高级定时器
6. **跑 RTOS** → SysTick + NVIC + MPU
7. **低功耗设计** → PWR + LSE + EXTI 唤醒

每学一个模块，对照**芯片参考手册（Reference Manual）** 中的对应章节和**数据手册（Datasheet）** 中的引脚定义，这是 MCU 工程师的基本功。

