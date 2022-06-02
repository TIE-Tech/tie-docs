---
title: Start using
description: 
lang: en
sidebar: true
---

## 1. Overview

Tie-SDK is a lightweight SDK developed in Golang for interacting with the Ethereum-compatible TIE blockchain

## 2. Install

- Put the downloaded `go-sdk` in your golang project directory `$gopath/src/go-sdk`
- Install the extension `go get -u`
- Create a new `main.go` entry file to start using `$gopath/src/go-sdk/main.go`
- Initialize sdk object `tie, _ := rpc.NewClient(rpc.Url)`
- use the sdk object to call the method `tie.ChainID()`

## 3. Public parameters
`rpc.Url` The RPC address of the blockchain<br>
`rpc.ChainID` The ChainID of the blockchain

- Production environment-TIE testnet: `rpc.testnet.tie.tech` ChainID: `188`
- Grayscale environment-TIE testnet: `rpc.testnet.test.tie.tech` ChainID: `166`

## 4. Initialize Create TieSDK object

```go
import "go-sdk/rpc"

// incoming chain url is equivalent to tiesdk.NewClient("https://data-seed-prebsc-1-s1.binance.org:8545/")
tie, _ := tiesdk.NewClient(rpc.url) 
```


## 5. what is tie.Eth() tie.Net() tie.Web3() ?

In order to distinguish the modules to which different methods belong
For example: under the tie.Eth() module:
`GetCode()` `Accounts()` `GetStorageAt()` and other methods
while tie.Web3() has
`Sha3()` `ClientVersion()` and other methods

## 6. keystore

```go
// Generate keystore
keystoreJson, err := keystore.CreateKeystore(your private key string, your password)
if err != nil {
	fmt.Println(err)
}

// export private key
privkey, err := keystore.Importkeystore(keystoreJson, your password)
if err != nil {
	fmt.Println(err)
}
fmt.Println(privkey)
```