---
title: 功能列表
description: 
lang: zh
sidebar: true
---

## 1. 功能列表

- [ChainID()](#_2-3-1-当前链id)  当前链ID
- [ClientVersion()](#_2-1-1-获取客户端版本)  获取客户端版本
- [Sha3()](#_2-1-2-指定数据的keccak-256哈希值) 指定数据的Keccak-256哈希值
- [Version()](#_2-2-1-当前链接网络的id)  当前链接网络的ID
- [GetTransactionReceipt()](#_2-3-2-指定哈希交易的收据)  指定哈希交易的收据
- [Listening()](#_2-2-2-监听连接的状态)  监听连接的状态
- [PeerCount()](#_2-2-3-客户端连接的对端节点数量)  客户端连接的对端节点数量
- [GasPrice()](#_2-3-3-当前gas价格)  当前gas价格
- [Accounts()](#_2-3-4-客户端持有地址列表) 客户端持有地址列表
- [GetBalance()](#_2-3-5-指定地址账户的余额) 指定地址账户的余额
- [GetStorageAt()](#_2-3-6-指定地址存储位置的值) 指定地址存储位置的值
- [GetTransactionCount()](#_2-3-7-指定地址发生的交易数量)  指定地址发生的交易数量
- [GetBlockTransactionCountByHash()](#_2-3-8-指定块内的交易数量-哈希查找)  指定块内的交易数量(哈希查找)
- [GetBlockTransactionCountByNumber()](#_2-3-9-指定块内的交易数量-高度查找)  指定块内的交易数量(高度查找)
- [Code()](#_2-3-10-指定地址的代码)  指定地址的代码
- [Call()](#_2-3-11-消息调用)  消息调用
- [SendTransaction()](#_2-3-12-创建消息调用交易或合约创建) 创建消息调用交易或合约创建
- [SendRawTransaction()](#_2-3-13-为已签名的交易创建新的消息调用交易或合约创建)  为已签名的交易创建新的消息调用交易或合约创建
- [SendRawTransaction()](#_2-3-25-发送交易) 发送交易
- [EstimateGas()](#_2-3-14-估算交易gas费)  估算交易gas费
- [GetBlockByHash()](#_2-3-15-指定哈希的块信息)  指定哈希的块信息
- [GetBlockByNumber()](#_2-3-16-指定高度的块信息)  指定高度的块信息
- [BlockNumber()](#_2-3-17-最新块的编号) 最新块的编号
- [GetTransactionByHash()](#_2-3-18-指定哈希对应的交易)  指定哈希对应的交易
- [NewFilter()](#_2-3-19-创建过滤器) 创建过滤器
- [NewBlockFilter()](#_2-3-20-节点中创建一个过滤器-以便当新块生成时进行通知) 节点中创建一个过滤器,以便当新块生成时进行通知
- [UninstallFilter()](#_2-3-21-卸载指定id的过滤器) 卸载指定ID的过滤器
- [GetFilterChanges()](#_2-3-22-轮询指定的过滤器并返回自上次轮询之后新生成的日志数组)  轮询指定的过滤器，并返回自上次轮询之后新生成的日志数组
- [GetLogs()](#_2-3-23-指定过滤器中的所有日志) 指定过滤器中的所有日志
- [Sign()](#_2-3-24-生成签名)  生成签名


## 2. 方法说明

## 2.1 Web3
### 2.1.1 获取客户端版本

```go
ver, err := tie.Web3().ClientVersion()
```

- **输出**
  ver(string): 当前客户端版本

### 2.1.2 指定数据的Keccak-256哈希值

```go
hash, err := tie.Web3().Sha3(data)
```

- **输入**
  data([]byte): 要计算的数据
- **输出**
  hash([]byte): 计算结果

## 2.2 Net

### 2.2.1 当前链接网络的id

```go
id, err := tie.Net().Version()
```

- **输出**
  id(uint64): 当前网络ID

### 2.2.2 监听连接的状态

```go
bool, err := tie.Net().Listening()
```

- **输出**

  bool(bool): 是否处于监听状态

### 2.2.3 客户端连接的对端节点数量

```go
count, err := tie.Net().PeerCount()
```

- **输出**

  count(uint64): 节点数量

## 2.3 ETH
### 2.3.1 当前链id

```go
id, err := tie.Eth().ChainID()
```

- **输出:**
  id (big.Int): 当前链的Id

### 2.3.2 指定哈希交易的收据

```go
receipt, err := tie.Eth().GetTransactionReceipt(TranHash)
```

- **输入**

  TranHash([32]byte): 交易hash

- **输出**

  receipt: 交易收据对象

  - transactionHash: DATA, [32]byte - 交易的hash.
  - transactionIndex: QUANTITY - 区块中交易index的位置。
  - blockHash: DATA, [32]byte - 此交易所处的区块hash。
  - blockNumber: QUANTITY - 此交易所处的区块号
  - cumulativeGasUsed: QUANTITY - 当这笔交易已经在区块中执行完成，所使用的gas总量。
  - gasUsed: QUANTITY - 此特定交易所使用的单个gas金额。
  - contractAddress: DATA, [20]byte - 创建的合同地址（如果该交易是创建合约该值为新创建的合约地址) 否则为空。
  - logs: Array - 此交易生成的日志对象数组。
  - logsBloom：用于快速提取相关日志的布隆过滤器
  - from: DATA, [20]byte - 交易发送方地址
  - status: QUANTITY ，1 (成功) 或 0 (失败)

  ```go
  type Receipt struct {
  	TransactionHash   Hash
  	TransactionIndex  uint64
  	ContractAddress   Address
  	BlockHash         Hash
  	From              Address
  	BlockNumber       uint64
  	GasUsed           uint64
  	CumulativeGasUsed uint64
  	LogsBloom         []byte
  	Logs              []*Log
  	Status            uint64
  }
  ```

### 2.3.3 当前gas价格

```go
price, err := tie.Eth().GasPrice()
```

- 输出

  price(uint64): 当前gas价格

### 2.3.4 客户端持有地址列表

```go
list, err := tie.Eth()Accounts()
```

- 输出
  list(\[\][]byte): 地址列表

### 2.3.5 指定地址账户的余额

```go
balance, err := tie.Eth()GetBalance(address, BlockNumberOrHash)
```

- 输入

  address([20]byte): 钱包地址
  BlockNumberOrHash(interface): 输入块Hash([32]byte)/输入sdk.BlockNumber(int)代表区块高度/输入sdk.Latest代表"latest"/输入sdk.Earliest代表"earliest"/输入sdk.Pending代表"pending

- 输出
  balance(big.Int): 账户的余额

### 2.3.6 指定地址存储位置的值

```go
data, err := tie.Eth().GetStorageAt(address, slot, blocknumber)
```

- 输入

  address([20]byte): 钱包地址
  slot([32]byte): 存储中的位置号/值
  blocknumber(interface): 输入sdk.BlockNumber(int)代表区块高度/输入sdk.Latest代表"latest"/输入sdk.Earliest代表"earliest"/输入sdk.Pending代表"pending

- 输出
  data([32]byte): 存储的内容

### 2.3.7 指定地址发生的交易数量

```go
count, err := tie.Eth().GetTransactionCount(address, blocknumber)
```

- 输入

  address([20]byte): 钱包地址
  blocknumber(interface): 输入sdk.BlockNumber(int)代表区块高度/输入sdk.Latest代表"latest"/输入sdk.Earliest代表"earliest"/输入sdk.Pending代表"pending

- 输出
  count(uint64): 交易的数量

### 2.3.8 指定块内的交易数量-哈希查找

```go
count, err := tie.Eth().GetBlockTransactionCountByHash(hash)
```

- 输入
  hash([32]byte): 块哈希值

- 输出

  count(uint64): 交易的数量

### 2.3.9 指定块内的交易数量-高度查找

```go
count, err := tie.Eth().GetBlockTransactionCountByNumber(blocknumber)
```

- 输入
  blocknumber(interface): 输入sdk.BlockNumber(int)代表区块高度/输入sdk.Latest代表"latest"/输入sdk.Earliest代表"earliest"/输入sdk.Pending代表"pending

- 输出

  count(uint64): 交易的数量

### 2.3.10 指定地址的代码

```go
data, err := tie.Eth().Code(address, blocknumber)
```

- 输入

  address([20]byte): 钱包地址
  blocknumber(interface): 输入sdk.BlockNumber(int)代表区块高度/输入sdk.Latest代表"latest"/输入sdk.Earliest代表"earliest"/输入sdk.Pending代表"pending

- 输出
  data(string): 地址代码

### 2.3.11 消息调用

```go
data, err := tie.Eth().Call(msg, blocknumber)
```

- 输入

  msg: 调用对象

  - from: DATA, [20]byte - (可选) 交易发送的地址。
  - to: DATA, [20]byte - 交易所针对的地址。
  - gas: QUANTITY - (可选) 交易执行提供的gas。 eth_call消耗0gas，但某些执行可能需要此参数。
  - gasPrice: QUANTITY - (可选) 为每个gas支付多少个gasPrice.
  - value: QUANTITY - (可选) 此交易发送的value
  - data: DATA - (可选) 合约的编译代码

  blocknumber(interface): 输入sdk.BlockNumber(int)代表区块高度/输入sdk.Latest代表"latest"/输入sdk.Earliest代表"earliest"/输入sdk.Pending代表"pending

  ```go
  type CallMsg struct {
  	From     Address
  	To       *Address
  	Data     []byte
  	GasPrice uint64
  	Gas      *big.Int
  	Value    *big.Int
  }
  ```

- 输出
  data(string): 已执行合约的返回价值

### 2.3.12 创建消息调用交易或合约创建

```go
hash, err := tie.Eth().SendTransaction(txn)
```

- 输入

  txn: 交易对象

  - from: DATA, 20 Bytes - 交易的发送地址。

  - to: DATA, 20 Bytes -（创建新合约时可选）交易指向的地址。

  - gas: QUANTITY -（可选，默认值：90000）为交易执行提供的gas。它会返回未使用的gas。

  - gasPrice: QUANTITY -（可选，默认：待确认）GasPrice就是你愿意为一个单位的Gas出多少Eth，一般用Gwei作单位。所以Gas Price 越高， 就表示交易中每运算一步，会支付更多的Eth。

  - value: QUANTITY - (可选) 交易发送的金额

  - input: DATA, []byte - (可选) 合约的编译后的代码

  - nonce: QUANTITY -（可选）一个整数。允许你使用相同的nonce覆盖自己处于等待中交易。

  ```go
  type Transaction struct {
  	Type TransactionType
  
  	Hash     Hash
  	From     Address
  	To       *Address
  	Input    []byte
  	GasPrice uint64
  	Gas      uint64
  	Value    *big.Int
  	Nonce    uint64
  	V        []byte
  	R        []byte
  	S        []byte
  
  	BlockHash   Hash
  	BlockNumber uint64
  	TxnIndex    uint64
  
  	ChainID    *big.Int
  	AccessList AccessList
  
  	MaxPriorityFeePerGas *big.Int
  	MaxFeePerGas         *big.Int
  }
  ```

- 输出
  hash([32]byte): 交易哈希

### 2.3.13 为已签名的交易创建新的消息调用交易或合约创建

```go
hash, err := tie.Eth().SendRawTransaction(data)
```

- 输入

  data([]byte): 已签名的交易数据

- 输出

  hash([32]byte): 交易哈希

### 2.3.14 估算交易gas费

```go
gas, err := tie.Eth().EstimateGas(msg)
```

- 输入
  msg: 所有消息调用Call()的参数
- 输出
  gas(uint64): 估算出的gas费

### 2.3.15 指定哈希的块信息

```go
block, err := tie.Eth().GetBlockByHash(hash, bool)
```

- 输入

  hash([32]byte): 块哈希
  bool(bool): 是否返回完整块对象

- 输出

  block: 块对象

  - number: QUANTITY - 块号。 当处于pending时为null。

  - hash: DATA  块的hash. 当处于pending时为null。

  - parentHash: DATA,   父块的hash。

  - transactionsRoot: DATA,  -块的交易树根哈希。

  - stateRoot: DATA,  该块的状态树的根哈希。
  - receiptsRoot: DATA, 块收据树的根哈希。

  - miner: DATA, -获得挖矿奖励的受益人的地址。

  - difficulty: QUANTITY - 该块的难度整数。

  - gasLimit: QUANTITY - 此区块允许的最大gas数量。

  - gasUsed: QUANTITY - 在此区块中所有交易使用的总gas。
  - timestamp: QUANTITY - 整理块时的unix时间戳。

  - transactions: Array - 交易对象数组，或32字节长的交易哈希数组

  ```go
  type Block struct {
  	Number             uint64
  	Hash               Hash
  	ParentHash         Hash
  	Sha3Uncles         Hash
  	TransactionsRoot   Hash
  	StateRoot          Hash
  	ReceiptsRoot       Hash
  	Miner              Address
  	Difficulty         *big.Int
  	ExtraData          []byte
  	GasLimit           uint64
  	GasUsed            uint64
  	Timestamp          uint64
  	Transactions       []*Transaction
  	TransactionsHashes []Hash
  	Uncles             []Hash
  }
  ```

### 2.3.16 指定高度的块信息

```go
block, err := tie.Eth().GetBlockByNumber(blocknumber, bool)
```

- 输入

  blocknumber(interface): 输入sdk.BlockNumber(int)代表区块高度/输入sdk.Latest代表"latest"/输入sdk.Earliest代表"earliest"/输入sdk.Pending代表"pending
  bool(bool): 是否返回完整块对象

- 输出

  block: 块对象, 等同于GetBlockByHash()输出对象

### 2.3.17 最新块的编号

```go
num, err := tie.Eth().BlockNumber()
```

- 输出

  num(uint64): 最新区块号

### 2.3.18 指定哈希对应的交易

```go
transaction, err := tie.Eth().GetTransactionByHash(hash)
```

- 输入

  hash([32]byte): 交易哈希

- 输出

  transaction: 交易对象

  - hash: DATA, - 交易的hash

  - nonce: QUANTITY - 发送人在此之前进行的交易次数。

  - blockHash: DATA,  - 该交易处于其中的区块的散列，当其处于pending状态时为空。

  - blockNumber: QUANTITY - 该交易处于其中的区块号，当其处于pending状态时为空。

  - transactionIndex: QUANTITY - 在区块中交易index位置，当其处于pending状态时为空。

  - from: DATA,  -发送者的地址。

  - to: DATA,  - 接收者地址，当它是合约创建交易时为null。

  - value: QUANTITY - 发送以太数量.

  - gasPrice: QUANTITY - 发送者提供的gas价格

  - gas: QUANTITY - 发送者提供的gas数量

  - input: DATA - 随交易一起发送的数据

  ```go
  type Transaction struct {
  	Type TransactionType
  
  	Hash     Hash
  	From     Address
  	To       *Address
  	Input    []byte
  	GasPrice uint64
  	Gas      uint64
  	Value    *big.Int
  	Nonce    uint64
  	V        []byte
  	R        []byte
  	S        []byte
  
  	BlockHash   Hash
  	BlockNumber uint64
  	TxnIndex    uint64
  
  	ChainID    *big.Int
  	AccessList AccessList
  
  	MaxPriorityFeePerGas *big.Int
  	MaxFeePerGas         *big.Int
  }
  ```

### 2.3.19 创建过滤器

```go
id, err := tie.Eth().NewFilter(data)
```

- 输入

  data: 过滤器对象

  - from: QUANTITY|TAG - （可选，默认值：“latest”）区块号，输入-1代表"latest"/输入-2代表"earliest"/输入-3代表"pending。
  - to: QUANTITY|TAG - (可选, 默认值: "latest") 区块号，输入-1代表"latest"/输入-2代表"earliest"/输入-3代表"pending
  - address: DATA|Array -（可选）合约地址或日志应从其发出的地址列表。
  - topics: DATA数组, - (可选) topic数组

  ```go
  type LogFilter struct {
  	Address   []Address
  	Topics    [][]*Hash
  	BlockHash *Hash
  	From      *BlockNumber
  	To        *BlockNumber
  }
  ```

- 输出

  id(string): 过滤器ID

### 2.3.20 节点中创建一个过滤器-以便当新块生成时进行通知

```go
id, err := tie.Eth().NewBlockFilter()
```

- 输出

  id(string): 过滤器ID

### 2.3.21 卸载指定id的过滤器

```go
bool, err := tie.Eth().UninstallFilter(Id)
```

- 输入

  Id(string): 过滤器ID

- 输出

  bool(bool): 卸载是否成功

### 2.3.22 轮询指定的过滤器并返回自上次轮询之后新生成的日志数组

```go
array, err := tie.Eth().GetFilterChanges(Id)
```

- 输入

  Id(string): 过滤器ID

- 输出
  array: 日志对象数组

  - 对于用eth_newBlockFilter创建的过滤器，返回是块hahs（DATA，32字节），例如，[“0x3454645634534......”]。

  - 对于使用eth_newPendingTransactionFilter创建的过滤器，返回是事务hash（DATA，32字节），例如，[“0x6345343454645......”。

  - 对于使用eth_newFilter创建的过滤器，日志是具有以下参数：

    - type: TAG - 等待日志处于待处理状态。如果日志已被开采，则开采。

    - logIndex: QUANTITY - 块中日志索引位置。当状态为pending的日志时为null。

    - transactionIndex: QUANTITY - 日志从交易index位置创建的整数。当其panding的日志时为null。

    - transactionHash: DATA, 32 Bytes - 这个日志创建的交易的hash。 当其处于pending的日志时为null。

    - blockHash: DATA, 32 Bytes - 该日志所在块的散列，当其处于pending，则为空。当其pending日志时也为null。

    - blockNumber: QUANTITY - 此日志中的区块号，当它处于pending，则为null，当其日志处于pending，也为null。

    - address: DATA, 20 Bytes - 该日志源的地址。

    - data: DATA - 包含日志的一个或多个32字节未index的参数。

    - topics: DATA的数组 - 索引日志参数的0到4 32字节数组数据。（在solidity中：第一个topic是事件签名的hash（例如Deposit(address，bytes32，uint256))，除非你使用匿名说明符声明该事件。

    ```go
    type Log struct {
    	Removed          bool
    	LogIndex         uint64
    	TransactionIndex uint64
    	TransactionHash  Hash
    	BlockHash        Hash
    	BlockNumber      uint64
    	Address          Address
    	Topics           []Hash
    	Data             []byte
    }
    ```

### 2.3.23 指定过滤器中的所有日志

```go
log, err := tie.Eth().GetLogs(filter)
```

- 输入

  topics: 过滤器对象, 等同于NewFilter()输入

- 输出

  array: 日志对象数组, 等同于GetFilterChanges()输出


### 2.3.24 生成签名
```go
sign, err := tie.Eth().Sign(hexprv, txn, 97)
```
- 输入 
    私钥、交易结构、链ID

- 输出
    []byte 类的签名


### 2.3.25 发送交易

步骤：1. 构造交易 2. 生成签名 3. 发送

- 构造交易

```go
// 发送交易的源地址
from := ethgo.HexToAddress("0xb587AeDE058783506F98402AA933Fc1EB4c6f317")

// 交易目标
to := ethgo.HexToAddress("0xf1c85E122Ca79F70dD7615b9038e06F4f5913612")

// 获取 nonce
nonce, _ := tie.Eth().GetNonce(from, ethgo.Latest)

txn := &ethgo.Transaction{
  From:     from,
  To:       &to,
  Gas:      234723,
  GasPrice: 10000000000,
  Value:    big.NewInt(1000000000),
  Nonce:    nonce,
}
```

- 生成签名

```go
// 传入私钥、交易结构、链ID
sign, err := tie.Eth().Sign(hexprv, txn, 97)
```

- 发送交易

```go
// 发送成功会返回 交易hash 失败 0x0
result, err := tie.Eth().SendRawTransaction(sign)
```

- 验证公钥

```go
// 验证
from2, _ := signer2.RecoverSender(txn)
fmt.Println(from2.String())
```