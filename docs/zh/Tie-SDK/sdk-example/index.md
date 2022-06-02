---
title: 完整的 SDK 示例
description: 
lang: zh
sidebar: true
---

这个例子展示了一个完整的 Go 文件，发送一个签名交易。此示例重点介绍如何使用sdk，创建tiesdk对象、发出请求、处理错误和处理响应。

```go
package main

import (
	"fmt"
	"go-sdk/response"
	"go-sdk/rpc"
	"math/big"
)

func main() {

// 初始化 sdk对象，使用任何sdk功能都必须要先创建sdk对象，所有的功能都是sdk的方法
// 这里我们传入一个 rpc.Url 常量，这是在sdk包内定义好的url string，如果你需要修改请到 go-sdk/rpc/tie.go 文件
// 这里等同于 	tie, err := rpc.NewClient("https://data-seed-prebsc-1-s1.binance.org:8545/")
tie, err := rpc.NewClient(rpc.Url)
if err != nil {
	fmt.Println(err.Error())
}

// 发送交易的源地址
from := response.HexToAddress("0xb587AeDE058783506F98402AA933Fc1EB4c6f317")

// 交易目标地址
to := response.HexToAddress("0xf1c85E122Ca79F70dD7615b9038e06F4f5913612")

// 构造交易对象，设置gas、gasprice、value。以wei为单位。 
// 检查源代码查看 response.Transaction 的属性类型
txn := &response.Transaction{
	From:     from,
	To:       &to,
	Gas:      234723,
	GasPrice: 10000000000,
	Value:    big.NewInt(90000000000),
}

// 设置私钥，可以使用第三方钱包或其他方式导出私钥
hexprv := "lvcg78vz02cfr7x98fg1skbu43nptkuz5l0p7x1mo4y0r0701w8dj014qd0v1s7" // 示例假私钥

// 使用 Sign 方法生成交易签名 传入私钥、交易结构体、rpc.ChainID
// ChaiIDr 与 rpc.Url 类似，同样在 go-sdk/rpc/tie.go 文件中定义
// 也可以传入 uint64类型的数字 tie.Eth().Sign(hexprv, txn, 79)
// 需要检查 err，error 是一个err类型的值
// 签名成功会返回 []byte 类型的值
sign, err := tie.Eth().Sign(hexprv, txn, rpc.ChainID)
if err != nil {
	fmt.Println(err.Error())
}


// 发送交易。需要检查 err，发送成功会返回 交易hash地址，使用地址在区块链浏览器查找交易
result, err := tie.Eth().SendRawTransactionStr(sign)
if err != nil {
	fmt.Println(err.Error())
}

fmt.Println(result)

// 验证签名
signer2 := wallet.NewEIP155Signer(rpc.rpc.ChainID)   
from2, _ := signer2.RecoverSender(txn)
fmt.Println(from2.String())  // 验证成功返回发送者的公钥地址
}

```
