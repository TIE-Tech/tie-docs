---
title: Complete SDK example
description: 
lang: en
sidebar: true
---

This example shows a complete Go file sending a signed transaction. This example focuses on using the SDK, creating tiesdk objects, making requests, handling errors, and handling responses.

```go
package main

import (
	"fmt"
	"go-sdk/response"
	"go-sdk/rpc"
	"math/big"
)

func main() {

// Initialize the sdk object. To use any sdk function, you must first create the sdk object. All functions are sdk methods.
// Here we pass in a rpc.Url constant, which is the url string defined in the sdk package. If you need to modify it, please go to the go-sdk/rpc/tie.go file
// This is equivalent to tie, err := rpc.NewClient("https://data-seed-prebsc-1-s1.binance.org:8545/")
tie, err := rpc.NewClient(rpc.Url)
if err != nil {
	fmt.Println(err.Error())
}

// The source address to send the transaction to
from := response.HexToAddress("0xb587AeDE058783506F98402AA933Fc1EB4c6f317")

// transaction target address
to := response.HexToAddress("0xf1c85E122Ca79F70dD7615b9038e06F4f5913612")

// Construct the transaction object, set gas, gasprice, value. In wei.
// Check the source code to see the property type of response.Transaction
txn := &response.Transaction{
	From:     from,
	To:       &to,
	Gas:      234723,
	GasPrice: 10000000000,
	Value:    big.NewInt(90000000000),
}

// Set the private key, you can use a third-party wallet or other ways to export the private key
hexprv := "lvcg78vz02cfr7x98fg1skbu43nptkuz5l0p7x1mo4y0r0701w8dj014qd0v1s7" // Example fake private key

// Use the Sign method to generate a transaction signature Pass in the private key, transaction structure, rpc.ChainID
// ChaiIDr is similar to rpc.Url and is also defined in the go-sdk/rpc/tie.go file
// You can also pass in a uint64 number tie.Eth().Sign(hexprv, txn, 79)
// Need to check err, error is a value of type err
// If the signature is successful, it will return a value of type []byte
sign, err := tie.Eth().Sign(hexprv, txn, rpc.ChainID)
if err != nil {
	fmt.Println(err.Error())
}


// Send the transaction. err needs to be checked, and the transaction hash address will be returned if the sending is successful. Use the address to find the transaction in the blockchain browser
result, err := tie.Eth().SendRawTransactionStr(sign)
if err != nil {
	fmt.Println(err.Error())
}

fmt.Println(result)

// Verify signature
signer2 := wallet.NewEIP155Signer(rpc.rpc.ChainID)   
from2, _ := signer2.RecoverSender(txn)
fmt.Println(from2.String())  // If the verification is successful, return the sender's public key address
}

```
