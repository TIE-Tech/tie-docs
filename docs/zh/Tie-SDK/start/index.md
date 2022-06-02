---
title: 开始使用
description: 
lang: zh
sidebar: true
---

## 1. 概述

Tie-SDK是使用Golang开发的轻量级SDK, 用于与以太坊兼容的TIE区块链交互


## 2. 安装

- 将下载的 `go-sdk` 放在您的golang项目目录 `$gopath/src/go-sdk`
- 安装扩展包 `go get -u`
- 新建 `main.go` 入口文件开始使用 `$gopath/src/go-sdk/main.go`
- 初始化 sdk对象 `tie, _ := rpc.NewClient(rpc.Url)`
- 使用sdk对象来调用方法 `tie.ChainID()`


## 3. 公共参数
`rpc.Url`  区块链的RPC地址<br>
`rpc.ChainID` 区块链的ChainID

- 生产环境-TIE测试网: `rpc.testnet.tie.tech` ChainID： `188`
- 灰度环境-TIE测试网: `rpc.testnet.test.tie.tech` ChainID：`166`

## 4. 初始化 创建TieSDK对象

```go
import "go-sdk/rpc"

// 传入链url 等同于 tiesdk.NewClient("https://data-seed-prebsc-1-s1.binance.org:8545/")
tie, _ := tiesdk.NewClient(rpc.url) 
```


## 5. 什么是 tie.Eth() tie.Net() tie.Web3()?

为了区分不同方法的所属模块
例如：tie.Eth() 模块下有：
`GetCode()` `Accounts()` `GetStorageAt()` 等方法
而 tie.Web3() 有
`Sha3()` `ClientVersion()` 等方法

## 6. 导出导入 keystore

```go
// 生成keystore
keystoreJson, err := keystore.CreateKeystore(你的私钥字符串, 你的密码)
if err != nil {
	fmt.Println(err)
}

// 导出私钥
privkey, err := keystore.Importkeystore(keystoreJson, 你的密码)
if err != nil {
	fmt.Println(err)
}
fmt.Println(privkey)
```