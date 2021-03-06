# 周易金钱卦自动占卜应用 v1.18

## 入口

国内: 

海外: https://humoonruc.github.io/auto-divination/

## 托管地址

CODING: https://humoonruc.coding.net/p/node.js-demo/d/auto-divination/git

GitHub: https://github.com/Humoonruc/auto-divination

## 更新计划

==64卦的数据结构，和互相的勾稽关系，天然地适合用对象网络来描述。==所以将本应用彻底改写为OOP是非常必要的。



## 心得体会

1. 针对不同情况写大量通用的小函数，哪怕代码冗余，在逻辑上是非常省脑的。事先想不全的情况，需要实现时，往往有现成的函数可以拼接。这叫做在架构上支持扩展性。
2. 对象可以把很多变量封装起来，在函数调用时非常简洁。否则经常要传递很多个参数，或者只能设置一大堆全局变量。
4. 面向对象的思想，结构上完整的数据和函数结构要及时封装起来。事实上，calculate.js 中的许多函数都可以封装在复卦对象内部。


## 程序结构

### 第一阶段 前期准备工作

爬虫和整理数据表，主要使用 R 语言

### 第二阶段 将完整程序模块化

config.js 全局变量和参数设置

auto.js 自动占卜的主函数

manual.js 手动查询占卜结果的主函数

calculate.js 根据输入的6个数计算出所有占卜结果，保存为完整的复卦对象便于传递

renderChart.js 绘制卦变图

output.js 文字输出占卜结果，包括卦辞和变爻爻辞

reset.js 复位开关
