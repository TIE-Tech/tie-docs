---
title: JSON RPC 命令
description: 
lang: zh
sidebar: true
---

## 1. Hash List

| 类型 | 长度 | 描述 | |
|-------|:------------:|:-----------:|:-----------:|
| blockHash | String | 0x+64位 | 区块的哈希 |
| blockNumber | Number |  | 区块的块号 |
| transactionHash | String | 0x+64位 | 交易的哈希值 |
| transactionIndex | Number |  | 交易在区块里面的序号，整数 |
| client addresses | String | 0x+40位 | 账户地址 |
| gas | Number |  | 工作量单位 |
| contractAddress | String | 0x+40位 | 合约地址 |

## 2. 十六进制值编码

目前有两种通过 JSON 传递数据类型：未格式化的字节数组和数量。 两者都以十六进制编码传递，但对格式有不同的要求：

编码**QUANTITIES**（整数，数字）时：编码为十六进制，前缀为“0x”，最紧凑的表示（轻微例外：零应该表示为“0x0”）。 例子：

- 0x41 (65 十进制)
- 0x400 (1024 十进制)
- WRONG: 0x （应该总是有至少一位数字 - 零是“0x0”)
- WRONG: 0x0400 （不允许有前导零）
- WRONG: ff （必须以 0x 为前缀）

编码**未格式化的数据**（字节数组、帐户地址、哈希、字节码数组）时：编码为十六进制，前缀为“0x”，每个字节两个十六进制数字。 例子：
- 0x41 (size 1, "A")
- 0x004200 (size 3, "\0B\0")
- 0x (size 0, "")
- WRONG: 0xf0f0f （必须是偶数位数）
- WRONG: 004200 （必须以 0x 为前缀）

## 3. 默认块参数

以下方法有一个额外的默认块参数：
- [eth_getBalance](#eth-getbalance)
- [eth_getCode](#eth-getcode)
- [eth_getTransactionCount](#eth-gettransactioncount)
- [eth_getStorageAt](#eth-getstorageat)
- [eth_call](#eth-call)

当发出请求时，最后一个默认块参数决定了块的高度。

defaultBlock 参数可以使用以下选项：

- `HEX String` - 一个整数块号
- `String "earliest"` 用于最早/创世区块
- `String "latest"` - 最新开采的区块
- `String "pending"` - 用于挂起的状态/交易

## 4. Curl 示例解释

下面的 curl 选项可能会返回节点抱怨内容类型的响应，这是因为 --data 选项将内容类型设置为 application/x-www-form-urlencoded 。 如果您的节点确实抱怨，请通过在调用开始时放置 -H "Content-Type: application/json" 来手动设置标头。

这些示例也不包括 URL/IP 和端口组合，该组合必须是 curl e.x 的最后一个参数。 127.0.0.1:8545

## 5. JSON-RPC methods

* [web3_clientVersion 当前客户端版本](#web3-clientversion)
* [web3_sha3 给定字符串的sha3结果](#web3-sha3)
* [net_version 当前的网络ID](#net-version)
* [net_peerCount 客户端数量](#net-peercount)
* [net_listening 客户端连接状态](#net-listening)
* [eth_syncing 当前同步情况](#eth-syncing)
* [eth_gasPrice 当前gas价格](#eth-gasprice)
* [eth_blockNumber 客户端当前区块号](#eth-blocknumber)
* [eth_getBalance 当前余额](#eth-getbalance)
* [eth_getStorageAt 存储位置的值](#eth-getstorageat)
* [eth_getTransactionCount 账户地址的交易数量](#eth-gettransactioncount)
* [eth_getBlockTransactionCountByHash 区块哈希值的交易数量](#eth-getblocktransactioncountbyhash)
* [eth_getBlockTransactionCountByNumber 区块号的交易数量](#eth-getblocktransactioncountbynumber)
* [eth_getUncleCountByBlockHash 通过区块哈希值获取叔块](#eth-getunclecountbyblockhash)
* [eth_getUncleCountByBlockNumber 通过区块号获取叔块](#eth-getunclecountbyblocknumber)
* [eth_getCode 获取链上指定地址的代码](#eth-getcode)
* [eth_sign 账户数据加签](#eth-sign)
* [eth_sendTransaction 发送一个交易到合约](#eth-sendtransaction)
* [eth_sendRawTransaction 发送加签的交易](#eth-sendrawtransaction)
* [eth_call](#eth-call)
* [eth_estimateGas 合约部署所花费的gas](#eth-estimategas)
* [eth_getBlockByHash 区块哈希值所对应的区块](#eth-getblockbyhash)
* [eth_getBlockByNumber 区块号所对应的区块](#eth-getblockbynumber)
* [eth_getTransactionByHash 交易哈希值查交易信息](#eth-gettransactionbyhash)
* [eth_getTransactionByBlockHashAndIndex 区块哈希值的指定序号的交易](#eth-gettransactionbyblockhashandindex)
* [eth_getTransactionByBlockNumberAndIndex 区块号的指定序号的交易](#eth-gettransactionbyblocknumberandindex)
* [eth_getTransactionReceipt 智能合约记录查询](#eth-gettransactionreceipt)
* [eth_getUncleByBlockHashAndIndex 区块哈希值返回叔块](#eth-getunclebyblockhashandindex)
* [eth_getUncleByBlockNumberAndIndex 区块号返回叔块](#eth-getunclebyblocknumberandindex)
* [eth_getCompilers 可用合约编译器](#eth-getcompilers)
* [eth_compileSolidity 编译智能合约](#eth-compilesolidity)
* [eth_newFilter 创建一个filter对象监听区块或交易的变化](#eth-newfilter)
* [eth_newBlockFilter 创建一个filter监听新区块的创建](#eth-newblockfilter)
* [eth_newPendingTransactionFilter 创建一个filter监听发起一个交易](#eth-newpendingtransactionfilter)
* [eth_uninstallFilter 取消指定filter](#eth-uninstallfilter)
* [eth_getFilterChanges 获取filter的变化日志](#eth-getfilterchanges)
* [eth_getFilterLogs 获取指定filter日志](#eth-getfilterlogs)
* [eth_getLogs 返回所有日志](#eth-getlogs)

## 6. JSON RPC API 参考

***

### web3_clientVersion

返回当前客户端版本。

#### 参数
none

### 返回

`String` - 当前客户端版本

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}'

// Result
{
  "id":67,
  "jsonrpc":"2.0",
  "result": "tie [v1.0.0]"
}
```

### web3_sha3

返回给定数据的 Keccak-256（*不是*标准化的 SHA3-256）。

#### 参数

1. `DATA` - 要转换为 SHA3 哈希的数据

```js
params: [
  "0xbF7EB735d14d241Bd82133074Bbcc983Ef838792"
]
```

### 返回

`DATA` - 给定字符串的 SHA3 结果。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"web3_sha3","params":["0xbF7EB735d14d241Bd82133074Bbcc983Ef838792"],"id":64}'

// Result
{
  "id":64,
  "jsonrpc": "2.0",
  "result": "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad"
}
```

***

### net_version

返回当前网络 ID。

#### 参数

none

### 返回

`String` - 当前网络 ID。

- `"1"`：以太坊主网
- `"2"`：现代测试网（已弃用）
- `"3"`：Ropsten 测试网
- `"4"`：Rinkeby 测试网
- `"42"`：Kovan 测试网

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_version","params":[],"id":67}'

// Result
{
  "id":67,
  "jsonrpc": "2.0",
  "result": "200"
}
```

***

### net_listening

如果客户端正在主动侦听网络连接，则返回 `true`。

#### 参数

none

### 返回

`Boolean` - 监听时为 `true`，否则为 `false`。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_listening","params":[],"id":67}'

// Result
{
  "id":67,
  "jsonrpc":"2.0",
  "result":true
}
```

***

### net_peerCount

返回当前连接到客户端的对等点数。

#### 参数

none

### 返回

`QUANTITY` - 已连接对等点数的整数。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":74}'

// Result
{
  "id":74,
  "jsonrpc": "2.0",
  "result": "2"
}
```

***

### eth_syncing

返回一个对象，其中包含有关同步状态或 `false` 的数据。

#### 参数

none

### 返回

`Object|Boolean`，具有同步状态数据的对象或 `FALSE`，当不同步时：
- `startingBlock`: `QUANTITY` - 导入开始的块（只会在同步到达他的头部后重置）
- `currentBlock`: `QUANTITY` - 当前区块，与 eth_blockNumber 相同
- `highestBlock`: `QUANTITY` - 估计的最高区块

#### 示例

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": {
    startingBlock: '0x384',
    currentBlock: '0x386',
    highestBlock: '0x454'
  }
}
// Or when not syncing
{
  "id":1,
  "jsonrpc": "2.0",
  "result": false
}
```

***

### eth_gasPrice

返回以 wei 为单位的每 gas 的当前价格。

#### 参数

none

### 返回

`QUANTITY` - 当前gas价格的整数，单位为wei。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_gasPrice","params":[],"id":73}'

// Result
{
  "id":73,
  "jsonrpc": "2.0",
  "result": "0x09184e72a000" // 10000000000000
}
```

***

### eth_blockNumber

返回最近块的数量。

#### 参数
none

### 返回

`QUANTITY` - 客户端所在的当前块号的整数。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":83}'

// Result
{
  "id":83,
  "jsonrpc": "2.0",
  "result": "0x4b7" // 1207
}
```

***

### eth_getBalance

返回给定地址的账户余额。

#### 参数

1. `DATA`, 20 Bytes - 检查余额的地址。
2. `QUANTITY|TAG` - 整数区块号，或字符串`"latest"`、`"earliest"` 或 `"pending"`，见[默认区块参数](#_3-默认块参数)

```js
params: [
   '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
   'latest'
]
```

### 返回

`QUANTITY` - 当前余额的整数，单位为 wei。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1", "latest"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x0234c8a3397aab58" // 158972490234375000
}
```

***

### eth_getStorageAt

从给定地址的存储位置返回值。

#### 参数

1. `DATA`, 20 Bytes - 存储地址。
2. `QUANTITY` - 存储位置的整数。
3. `QUANTITY|TAG` - 整数区块号，或字符串`"latest"`、`"earliest"`或`"pending"`，见[默认区块参数](#_3-默认块参数)

### 返回

`DATA` - 此存储位置的值。

#### 示例

计算正确位置取决于要检索的存储。 考虑以下通过地址 `0x391694e7e0b0cce554cb130d723a9d27458f9298` 部署在 `0x295a70b2de5e3953354a6a8344e616ed314d7251` 的合约。

```
contract Storage {
    uint pos0;
    mapping(address => uint) pos1;
    
    function Storage() {
        pos0 = 1234;
        pos1[msg.sender] = 5678;
    }
}
```

检索 pos0 的值很简单：

```js
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x0", "latest"], "id": 1}' localhost:8545

{"jsonrpc":"2.0","id":1,"result":"0x00000000000000000000000000000000000000000000000000000000000004d2"}
```

检索 map 的元素更难。 map中元素的位置通过以下方式计算：
```js
keccack(LeftPad32(key, 0), LeftPad32(map position, 0))
```

这意味着要检索 pos1["0x391694e7e0b0cce554cb130d723a9d27458f9298"] 上的存储，我们需要计算位置：

```js
keccak(decodeHex("000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"))
```

可以使用 web3 库自带的 geth 控制台进行计算：

```js
> var key = "000000000000000000000000391694e7e0b0cce554cb130d723a9d27458f9298" + "0000000000000000000000000000000000000000000000000000000000000001"
undefined
> web3.sha3(key, {"encoding": "hex"})
"0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9"
```
现在获取存储：
```js
curl -X POST --data '{"jsonrpc":"2.0", "method": "eth_getStorageAt", "params": ["0x295a70b2de5e3953354a6a8344e616ed314d7251", "0x6661e9d6d8b923d5bbaab1b96e1dd51ff6ea2a93520fdc9eb75d059238b8c5e9", "latest"], "id": 1}' localhost:8545

{"jsonrpc":"2.0","id":1,"result":"0x000000000000000000000000000000000000000000000000000000000000162e"}

```

***

### eth_getTransactionCount

返回从地址*发送*的交易数量。

#### 参数

1. `DATA`，20 字节 - 地址。
2. `QUANTITY|TAG` - 整数区块号，或字符串`"latest"`、`"earliest"`或`"pending"`，见[默认区块参数](#_3-默认块参数)

```js
params: [
   '0x407d73d8a49eeb85d32cf465507dd71d507100c1',
   'latest' // 最新区块的状态
]
```

### 返回

`QUANTITY` -从该地址发送的交易数量的整数。


#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionCount","params":["0x407d73d8a49eeb85d32cf465507dd71d507100c1","latest"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

***

### eth_getBlockTransactionCountByHash

从与给定块哈希匹配的块中返回块中的事务数。

#### 参数

1. `DATA`, 32 字节 - 块的哈希

```js
params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238'
]
```

### 返回

`QUANTITY` - 此块中事务数的整数。


#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByHash","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xb" // 11
}
```

***

### eth_getBlockTransactionCountByNumber
> > 
返回与给定块号匹配的块中的事务数。

#### 参数

1. `QUANTITY|TAG` - 区块编号的整数，或字符串 `"earliest"`、`"latest"` 或 `"pending"`，如 [default block parameter](#_3-默认块参数).

```js
params: [
   '0xe8', // 232
]
```

### 返回

`QUANTITY` - 此块中事务数的整数。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockTransactionCountByNumber","params":["0xe8"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xa" // 10
}
```

***

### eth_getUncleCountByBlockHash

从匹配给定块哈希的块中返回块中的叔块数。


#### 参数

1. `DATA`, 32 字节 - 块的哈希

```js
params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238'
]
```

### 返回

`QUANTITY` - 此块中叔块数的整数。


#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockHash","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

***

### eth_getUncleCountByBlockNumber

从与给定块号匹配的块中返回块中的叔块数。

#### 参数

1. `QUANTITY|TAG` - 区块编号的整数，或字符串“latest”、“earliest”或“pending”，参见[默认区块参数](#_3-默认块参数)

```js
params: [
   '0xe8', // 232
]
```

### 返回

`QUANTITY` - 此块中叔块数的整数。


#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getUncleCountByBlockNumber","params":["0xe8"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

***

### eth_getCode

返回给定地址的代码。

#### 参数

1. `DATA`，20 字节 - 地址
2. `QUANTITY|TAG` - 整数区块号，或字符串`"latest"`、`"earliest"`或`"pending"`，见[默认区块参数](#_3-默认块参数)

```js
params: [
   '0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b',
   '0x2'  // 2
]
```

### 返回

`DATA` - 来自给定地址的代码。


#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getCode","params":["0xa94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x2"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x600160008035811a818181146012578301005b601b6001356025565b8060005260206000f25b600060078202905091905056"
}
```

***

### eth_sign

sign 方法计算以太坊特定的签名： `sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))`.

通过在消息中添加前缀，可以将计算出的签名识别为以太坊特定的签名。 这可以防止恶意 DApp 可以签署任意数据（例如交易）并使用签名来冒充受害者的滥用行为。

**注意** 用于签名的地址必须解锁。

#### 参数
帐号，留言

1. `DATA`，20 字节 - 地址
2. `DATA`, N Bytes - 要签名的消息

### 返回

`DATA`: 签名

#### 示例

```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sign","params":["0x9b2055d370f73ec7d8a03e965129118dc8f5bf83", "0xdeadbeaf"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xa3f20717a250c2b0b729b7e5becbff67fdaef7e0699da4de7ca5895b02a170a12d887fd3b17bfdce3481f10bea41f45ba9f709d39ce8325427b57afcfc994cee1b"
}
```

可以在 [here](https://gist.github.com/bas-vk/d46d83da2b2b4721efb0907aecdb7ebd) 找到如何使用 solidity ecrecover 验证使用 `eth_sign` 计算的签名的示例。 该合约部署在测试网 Ropsten 和 Rinkeby 上。

***

### eth_sendTransaction

如果数据字段包含代码，则创建新的消息调用交易或合同创建。

#### 参数

1. `Object` - 交易对象
   - `from`: `DATA`, 20 Bytes - 发送交易的地址。
   - `to`: `DATA`, 20 Bytes - （创建新合约时可选）交易指向的地址。
   - `gas`: `QUANTITY` - （可选，默认值：90000）为交易执行提供的气体的整数。 它将返回未使用的气体。
   - `gasPrice`: `QUANTITY` - （可选，默认值：待确定）用于每个付费气体的 gasPrice 的整数
   - `value`: `QUANTITY` - （可选）与此交易一起发送的值的整数
   - `data`: `DATA` - 合约的编译代码或调用的方法签名和编码参数的哈希值。 详情见[Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)
   - `nonce`: `QUANTITY` - （可选）nonce 的整数。 这允许覆盖您自己的使用相同 nonce 的待处理事务。

```js
params: [{
  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
  "gas": "0x76c0", // 30400
  "gasPrice": "0x9184e72a000", // 10000000000000
  "value": "0x9184e72a", // 2441406250
  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]
```

### 返回

`DATA`, 32 字节 - 交易哈希，如果交易尚不可用，则为零哈希。

使用 [eth_getTransactionReceipt](#eth-gettransactionreceipt) 获取合约地址，在交易被挖掘后，当您创建合约时。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendTransaction","params":[{see above}],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

***

### eth_sendRawTransaction

为已签名的交易创建新的消息调用交易或合同创建。

#### 参数

1. `DATA`, 签名的交易数据。

```js
params: ["0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"]
```

### 返回

`DATA`, 32 字节 - 交易哈希，如果交易尚不可用，则为零哈希。

使用 [eth_getTransactionReceipt](#eth-gettransactionreceipt) 获取合约地址，在交易被挖掘后，当您创建合约时。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_sendRawTransaction","params":[{see above}],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331"
}
```

***

### eth_call

立即执行新的消息调用，而不在区块链上创建交易。

#### 参数

  1. `Object` - 交易调用对象
   - `from`: `DATA`, 20 Bytes - （可选）发送交易的地址。
   - `to`: `DATA`, 20 Bytes - 交易指向的地址。
   - `gas`: `QUANTITY` - （可选）为交易执行提供的气体的整数。 eth_call 消耗零气体，但某些执行可能需要此参数。
   - `gasPrice`: `QUANTITY` - （可选）用于每个付费气体的 gasPrice 的整数
   - `value`: `QUANTITY` - （可选）与此交易一起发送的值的整数
   - `data`: `DATA` - （可选）方法签名和编码参数的哈希。 [Ethereum Contract ABI](https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI)
  
2. `QUANTITY|TAG` - integer block number, or the string `"latest"`, `"earliest"` or `"pending"`, see the [default block parameter](#_3-默认块参数)

### 返回

`DATA` - 已执行合约的返回值。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_call","params":[{see above}],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x"
}
```

***

### eth_estimateGas

生成并返回允许交易完成所需的气体估计值。 交易不会被添加到区块链中。 请注意，出于各种原因，包括 EVM 机制和节点性能，估计值可能远远超过交易实际使用的 gas 量。

#### 参数

请参阅 [eth_call](#eth-call) 参数，期望所有属性都是可选的。 如果没有指定气体限制，geth 使用来自待处理块的块气体限制作为上限。 因此，当 gas 量高于挂起的块 gas 限制时，返回的估计可能不足以执行调用/交易。

### 返回

`QUANTITY` - 使用的气体量。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_estimateGas","params":[{see above}],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x5208" // 21000
}
```

***

### eth_getBlockByHash

通过哈希返回有关块的信息。

#### 参数

1. `DATA`, 32 字节 - 块的哈希。
2. `Boolean` - 如果 `true` 则返回完整的交易对象，如果 `false` 仅返回交易的哈希值。

```js
params: [
   '0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331',
   true
]
```

### 返回

`Object` - 一个块对象，如果没有找到块，则为 `null`：

  - `number`: `QUANTITY` - 块号。 `null` 当它的待处理块。
  - `hash`: `DATA`, 32 Bytes - 区块的哈希值。 `null` 当它的待处理块。
  - `parentHash`: `DATA`, 32 Bytes - 父块的哈希。
  - `nonce`: `DATA`, 8 Bytes - 生成的工作量证明的哈希值。 `null` 当它的待处理块。
  - `sha3Uncles`: `DATA`, 32 Bytes - 块中叔块数据的 SHA3。
  - `logsBloom`: `DATA`, 256 Bytes - 块日志的布隆过滤器。 `null` 当它的待处理块。
  - `transactionsRoot`: `DATA`, 32 Bytes - 区块交易树的根。
  - `stateRoot`: `DATA`, 32 Bytes - 块的最终状态树的根。
  - `receiptsRoot`: `DATA`, 32 Bytes - 区块收据树的根。
  - `miner`: `DATA`, 20 Bytes - 获得挖矿奖励的受益人的地址。
  - `difficulty`: `QUANTITY` - 这个区块的难度整数。
  - `totalDifficulty`：`QUANTITY` - 直到这个区块的链的总难度的整数。
  - `extraData`：`DATA` - 此块的“额外数据”字段。
  - `size`: `QUANTITY` - 整数这个块的大小，以字节为单位。
  - `gasLimit`: `QUANTITY` - 此块中允许的最大气体。
  - `gasUsed`: `QUANTITY` - 该区块中所有交易的总gas使用量。
  - `timestamp`: `QUANTITY` - 当块被整理时的 unix 时间戳。
  - `transactions`: `Array` - 交易对象数组，或 32 字节交易哈希，取决于最后给定的参数。
  - `uncles`: `Array` - 叔叔哈希数组。


#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331", true],"id":1}'

// Result
{
"id":1,
"jsonrpc":"2.0",
"result": {
    "number": "0x1b4", // 436
    "hash": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "parentHash": "0x9646252be9520f6e71339a8df9c55e4d7619deeb018d2a3f2d21fc165dde5eb5",
    "nonce": "0xe04d296d2460cfb8472af2c5fd05b5a214109c25688d3704aed5484f9a7792f2",
    "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
    "logsBloom": "0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331",
    "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
    "stateRoot": "0xd5855eb08b3387c0af375e9cdb6acfc05eb8f519e419b874b6ff2ffda7ed1dff",
    "miner": "0x4e65fda2159562a496f9f3522f89122a3088497a",
    "difficulty": "0x027f07", // 163591
    "totalDifficulty":  "0x027f07", // 163591
    "extraData": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "size":  "0x027f07", // 163591
    "gasLimit": "0x9f759", // 653145
    "gasUsed": "0x9f759", // 653145
    "timestamp": "0x54e34e8e" // 1424182926
    "transactions": [{...},{ ... }] 
    "uncles": ["0x1606e5...", "0xd5145a9..."]
  }
}
```

***

### eth_getBlockByNumber

按块号返回有关块的信息。

#### 参数

1. `QUANTITY|TAG` - 区块编号的整数，或字符串 `"earliest"`、`"latest"` 或 `"pending"`，如 [default block parameter](#_3-默认块参数)。
2. `Boolean` - 如果 `true` 则返回完整的交易对象，如果 `false` 仅返回交易的哈希值。

```js
params: [
   '0x1b4', // 436
   true
]
```

### 返回

结果见 [eth_getBlockByHash](#eth-getblockbyhash)

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x1b4", true],"id":1}'
```

结果见 [eth_getBlockByHash](#eth-getblockbyhash)

***

### eth_getTransactionByHash

返回有关事务哈希请求的事务的信息。

#### 参数

1. `DATA`, 32 字节 - 交易的哈希

```js
params: [
   "0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"
]
```

### 返回

`Object` - 一个交易对象，如果没有找到交易，则为 `null`：

   - `hash`: `DATA`, 32 Bytes - 交易的哈希值。
   - `nonce`：`QUANTITY` - 发件人在此之前进行的交易数量。
   - `blockHash`: `DATA`, 32 Bytes - 该交易所在区块的哈希值。当它挂起时为`null`。
   - `blockNumber`: `QUANTITY` - 该交易所在的区块号。待处理时为`null`。
   - `transactionIndex`: `QUANTITY` - 区块中交易索引位置的整数。 待处理时为“null”。
   - `from`: `DATA`, 20 Bytes - 发送者的地址。
   - `to`: `DATA`, 20 Bytes - 接收者的地址。 `null` 当它是一个合约创建交易。
   - `value`: `QUANTITY` - 在 Wei 中转移的值。
   - `gasPrice`: `QUANTITY` - 发件人在 Wei 中提供的 gas 价格。
   - `gas`: `QUANTITY` - 发件人提供的气体。
   - `input`: `DATA` - 与交易一起发送的数据。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'

// Result
{
"id":1,
"jsonrpc":"2.0",
"result": {
    "hash":"0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b",
    "nonce":"0x",
    "blockHash": "0xbeab0aa2411b7ab17f30a99d3cb9c6ef2fc5426d6ad6fd9e2a26a6aed1d1055b",
    "blockNumber": "0x15df", // 5599
    "transactionIndex":  "0x1", // 1
    "from":"0x407d73d8a49eeb85d32cf465507dd71d507100c1",
    "to":"0x85h43d8a49eeb85d32cf465507dd71d507100c1",
    "value":"0x7f110", // 520464
    "gas": "0x7f110", // 520464
    "gasPrice":"0x09184e72a000",
    "input":"0x603880600c6000396000f300603880600c6000396000f3603880600c6000396000f360",
  }
}
```

***

### eth_getTransactionByBlockHashAndIndex

通过块哈希和交易索引位置返回有关交易的信息。

#### 参数

1. `DATA`, 32 字节 - 块的哈希.
2. `QUANTITY` - 交易索引位置的整数。

```js
params: [
   '0xe670ec64341771606e55d6b4ca35a1a6b75ee3d5145a99d05921026d1527331',
   '0x0' // 0
]
```

### 返回

结果见 [eth_getTransactionByHash](#eth-gettransactionbyhash)

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockHashAndIndex","params":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"],"id":1}'
```

结果见 [eth_getTransactionByHash](#eth-gettransactionbyhash)

***

### eth_getTransactionByBlockNumberAndIndex

按块号和交易索引位置返回有关交易的信息。

#### 参数

1. `QUANTITY|TAG` - 区块编号，或字符串 `"earliest"`、`"latest"` 或 `"pending"`，[default block parameter](#_3-默认块参数).
2. `QUANTITY` - 交易索引位置。

```js
params: [
   '0x29c', // 668
   '0x0' // 0
]
```

### 返回

结果见 [eth_getTransactionByHash](#eth-gettransactionbyhash)

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionByBlockNumberAndIndex","params":["0x29c", "0x0"],"id":1}'
```

结果见 [eth_getTransactionByHash](#eth-gettransactionbyhash)

***

### eth_getTransactionReceipt

通过交易哈希返回交易的收据。

**注意**收据不可用于待处理的交易。

#### 参数

1. `DATA`, 32 字节 - 交易的哈希

```js
params: [
   '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238'
]
```

### 返回

`Object` - 交易收据对象，如果没有找到收据，则为 `null`：

  - `transactionHash`: `DATA`, 32 Bytes - 交易的哈希值。
  - `transactionIndex`: `QUANTITY` - 区块中交易索引位置的整数。
  - `blockHash`: `DATA`, 32 Bytes - 该交易所在区块的哈希值。
  - `blockNumber`: `QUANTITY` - 该交易所在的区块号。
  - `from`: `DATA`, 20 Bytes - 发送者的地址。
  - `to`: `DATA`, 20 Bytes - 接收者的地址。合约创建交易时为空。
  - `cumulativeGasUsed `: `QUANTITY ` - 此交易在区块中执行时使用的总气体量。
  - `gasUsed`: `QUANTITY` - 仅此特定交易使用的气体量。
  - `contractAddress `: `DATA`, 20 Bytes - 创建的合约地址，如果交易是合约创建，否则为 `null`。
  - `logs`: `Array` - 此事务生成的日志对象数组。
  - `logsBloom`: `DATA`, 256 Bytes - 用于轻客户端快速检索相关日志的布隆过滤器。

它还返回 _either_ ：

   - `root` : `DATA` 32 字节的交易后 stateroot（拜占庭之前）
   - `status`：`QUANTITY` `1`（成功）或 `0`（失败）

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getTransactionReceipt","params":["0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238"],"id":1}'

// Result
{
"id":1,
"jsonrpc":"2.0",
"result": {
     transactionHash: '0xb903239f8543d04b5dc1ba6579132b143087c68db1b2168786408fcbce568238',
     transactionIndex:  '0x1', // 1
     blockNumber: '0xb', // 11
     blockHash: '0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b',
     cumulativeGasUsed: '0x33bc', // 13244
     gasUsed: '0x4dc', // 1244
     contractAddress: '0xb60e8dd61c5d32be8058bb8eb970870f07233155', // 或 null，如果没有创建
     logs: [{
         // getFilterLogs 等返回的日志。
     }, ...],
     logsBloom: "0x00...0", // 256 字节布隆过滤器
     status: '0x1'
  }
}
```

***

### eth_getUncleByBlockHashAndIndex

通过哈希和叔块索引位置返回有关块的叔块的信息。

#### 参数


1. `DATA`, 32 字节 - HASH 一个块。
2. `QUANTITY` - 大叔的索引位置.

```js
params: [
   '0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b',
   '0x0' // 0
]
```

### 返回

See [eth_getBlockByHash](#eth-getblockbyhash)

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getUncleByBlockHashAndIndex","params":["0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b", "0x0"],"id":1}'
```

结果见 [eth_getBlockByHash](#eth-getblockbyhash)

**注意**：叔块不包含个人交易。

***

### eth_getUncleByBlockNumberAndIndex

通过编号和叔叔索引位置返回有关叔块的信息。

#### 参数

1. `QUANTITY|TAG` - 区块编号，或字符串 `"earliest"`、`"latest"` 或 `"pending"`，如[default block parameter](#_3-默认块参数).
2. `QUANTITY` - 大叔的索引位置.

```js
params: [
   '0x29c', // 668
   '0x0' // 0
]
```

### 返回

结果见 [eth_getBlockByHash](#eth-getblockbyhash)

**注意**：叔块不包含个人交易。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getUncleByBlockNumberAndIndex","params":["0x29c", "0x0"],"id":1}'
```

结果见 [eth_getBlockByHash](#eth-getblockbyhash)

***

### eth_getCompilers

返回客户端中可用编译器的列表。

#### 参数

none

### 返回

`Array` - 可用编译器的数组。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getCompilers","params":[],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": ["solidity", "lll", "serpent"]
}
```

***

### eth_compileSolidity

返回编译的solidity代码。

#### 参数

1. `String` - 源代码。

```js
params: [
   "contract test { function multiply(uint a) returns(uint d) {   return a * 7;   } }",
]
```

### 返回

`DATA` - 编译后的源代码.

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_compileSolidity","params":["contract test { function multiply(uint a) returns(uint d) {   return a * 7;   } }"],"id":1}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": {
      "code": "0x605880600c6000396000f3006000357c010000000000000000000000000000000000000000000000000000000090048063c6888fa114602e57005b603d6004803590602001506047565b8060005260206000f35b60006007820290506053565b91905056",
      "info": {
        "source": "contract test {\n   function multiply(uint a) constant returns(uint d) {\n       return a * 7;\n   }\n}\n",
        "language": "Solidity",
        "languageVersion": "0",
        "compilerVersion": "0.9.19",
        "abiDefinition": [
          {
            "constant": true,
            "inputs": [
              {
                "name": "a",
                "type": "uint256"
              }
            ],
            "name": "multiply",
            "outputs": [
              {
                "name": "d",
                "type": "uint256"
              }
            ],
            "type": "function"
          }
        ],
        "userDoc": {
          "methods": {}
        },
        "developerDoc": {
          "methods": {}
        }
      }

}
```

***

### eth_newFilter

根据过滤器选项创建一个过滤器对象，以在状态更改（日志）时发出通知。
要检查状态是否已更改，请调用 [eth_getFilterChanges](#eth-getfilterchanges)。

#### 关于指定主题过滤器的说明：
主题是顺序相关的。 带有主题 [A, B] 的日志的事务将被以下主题过滤器匹配：
* `[]` "任何东西"
* `[A]` "A 在第一个位置（以及之后的任何位置）"
* `[null，B]`"第一个位置的任何东西和第二个位置的B（以及之后的任何东西）"
* `[A, B]` "A 在第一个位置，B 在第二个位置（以及之后的任何内容）"
* `[[A, B], [A, B]]` "（A OR B）在第一个位置和（A OR B）在第二个位置（以及之后的任何东西）"

#### 参数

1. `Object` - 过滤器选项：
   - `fromBlock`: `QUANTITY|TAG` - （可选，默认值：`"latest"`）整数块编号，或 `"latest"` 表示最后一个开采的块或 `"pending"`，`"earliest"` 表示 尚未开采的交易。
   - `toBlock`: `QUANTITY|TAG` - （可选，默认值：`"latest"`）整数块编号，或 `"latest"` 表示最后开采的块或 `"pending"`，`"earliest"` 表示 尚未开采的交易。
   - `address`: `DATA|Array`, 20 Bytes - （可选）合约地址或日志应源自的地址列表。
   - `topics`：`Array of DATA`，-（可选）32 Bytes `DATA` 主题数组。 主题是顺序相关的。 每个主题也可以是带有“或”选项的 DATA 数组。

```js
params: [{
  "fromBlock": "0x1",
  "toBlock": "0x2",
  "address": "0x8888f1f195afa192cfee860698584c030f4c9db1",
  "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", null, ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b", "0x0000000000000000000000000aff3454fce5edbc8cca8697c15331677e6ebccc"]]
}]
```

### 返回

`QUANTITY` -过滤器 ID.

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newFilter","params":[{"topics":["0x12341234"]}],"id":73}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": "0x1" // 1
}
```

***

### eth_newBlockFilter

在节点中创建一个过滤器，以在新块到达时通知。
要检查状态是否已更改，请调用 [eth_getFilterChanges](#eth-getfilterchanges)。

#### 参数

None

### 返回

`QUANTITY` -过滤器 ID.

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newBlockFilter","params":[],"id":73}'

// Result
{
  "id":1,
  "jsonrpc":  "2.0",
  "result": "0x1" // 1
}
```

***

### eth_newPendingTransactionFilter

在节点中创建一个过滤器，以在新的待处理事务到达时发出通知。
要检查状态是否已更改，请调用 [eth_getFilterChanges](#eth-getfilterchanges)。

#### 参数
None

### 返回

`QUANTITY` -过滤器 ID.

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_newPendingTransactionFilter","params":[],"id":73}'

// Result
{
  "id":1,
  "jsonrpc":  "2.0",
  "result": "0x1" // 1
}
```

***

### eth_uninstallFilter

卸载具有给定 ID 的过滤器。 不再需要手表时应始终调用。
当一段时间内没有使用 [eth_getFilterChanges](#eth-getfilterchanges) 请求过滤器时，过滤器会超时。

#### 参数

1. `QUANTITY` - 过滤器标识。

```js
params: [
  "0xb" // 11
]
```

### 返回

`Boolean` - 如果成功卸载过滤器，则为 `true`，否则为 `false`。

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_uninstallFilter","params":["0xb"],"id":73}'

// Result
{
  "id":1,
  "jsonrpc": "2.0",
  "result": true
}
```

***

### eth_getFilterChanges

过滤器的轮询方法，它返回自上次轮询以来发生的日志数组。

#### 参数

1. `QUANTITY` - 过滤器 ID。

```js
params: [
  "0x16" // 22
]
```

### 返回

`Array` - 日志对象数组，如果自上次轮询以来没有任何变化，则为空数组。

- 对于使用 `eth_newBlockFilter` 创建的过滤器，返回的是块哈希（`DATA`，32 字节），例如 `["0x3454645634534..."]`。
- 对于使用 `eth_newPendingTransactionFilter` 创建的过滤器，返回的是交易哈希（`DATA`，32 字节），例如 `["0x6345343454645..."]`。
- 对于使用 `eth_newFilter` 创建的过滤器，日志是具有以下参数的对象：

- `removed`: `TAG` - `true` 当日志被删除时，由于链重组。 `false` 如果它是一个有效的日志。
  - `logIndex`: `QUANTITY` - 块中日志索引位置的整数。 `null` 当它的挂起日志时。
  - `transactionIndex`: `QUANTITY` - 创建交易索引位置日志的整数。 `null` 当它的挂起日志时。
  - `transactionHash`: `DATA`, 32 Bytes - 创建此日志的事务的哈希值。 `null` 当它的挂起日志时。
  - `blockHash`: `DATA`, 32 Bytes - 此日志所在块的哈希值。当它挂起时为`null`。 `null` 当它的挂起日志时。
  - `blockNumber`: `QUANTITY` - 此日志所在的块号。当它挂起时为 `null`。 `null` 当它的挂起日志时。
  - `address`: `DATA`, 20 Bytes - 此日志的来源地址。
  - `data`: `DATA` - 包含日志的一个或多个 32 字节非索引参数。
  - `topics`: `Array of DATA` - 索引日志参数的 0 到 4 32 字节 `DATA` 数组。 （在 *solidity* 中：第一个主题是事件签名的 *hash*（例如 `Deposit(address,bytes32,uint256)`），除非您使用 `anonymous` 说明符声明事件。）

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getFilterChanges","params":["0x16"],"id":73}'

// Result
{
  "id":1,
  "jsonrpc":"2.0",
  "result": [{
    "logIndex": "0x1", // 1
    "blockNumber":"0x1b4", // 436
    "blockHash": "0x8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcfdf829c5a142f1fccd7d",
    "transactionHash":  "0xdf829c5a142f1fccd7d8216c5785ac562ff41e2dcfdf5785ac562ff41e2dcf",
    "transactionIndex": "0x0", // 0
    "address": "0x16c5785ac562ff41e2dcfdf829c5a142f1fccd7d",
    "data":"0x0000000000000000000000000000000000000000000000000000000000000000",
    "topics": ["0x59ebeb90bc63057b6515673c3ecf9438e5058bca0f92585014eced636878c9a5"]
    },{
      ...
    }]
}
```

***

### eth_getFilterLogs

返回具有给定 id 的所有与过滤器匹配的日志的数组。


#### 参数

1. `QUANTITY` - 过滤器 ID。.

```js
params: [
  "0x16" // 22
]
```

### 返回

结果见 [eth_getFilterChanges](#eth-getfilterchanges)

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getFilterLogs","params":["0x16"],"id":74}'
```

结果见 [eth_getFilterChanges](#eth-getfilterchanges)

***

### eth_getLogs

返回与给定过滤器对象匹配的所有日志的数组。

#### 参数

1. `Object` - 过滤器选项：
- `fromBlock`: `QUANTITY|TAG` - （可选，默认值：`"latest"`）整数块编号，或 `"latest"` 表示最后一个开采的块或 `"pending"`，`"earliest"` 表示尚未开采的交易。
  - `toBlock`: `QUANTITY|TAG` - （可选，默认值：`"latest"`）整数块编号，或 `"latest"` 表示最后开采的块或 `"pending"`，`"earliest"` 表示尚未开采的交易。
  - `address`: `DATA|Array`, 20 Bytes - （可选）合约地址或日志应源自的地址列表。
  - `topics`：`Array of DATA`，-（可选）32 Bytes `DATA` 主题数组。主题是顺序相关的。每个主题也可以是带有“或”选项的 DATA 数组。
  - `blockhash`: `DATA`, 32 Bytes - (optional, **future**) 随着 EIP-234 的加入，将会有一个额外的 `params` 可选字段，名为 `blockHash`。这将日志返回到具有 32 字节哈希 `blockHash` 的单个块。使用 `blockHash` 等价于 `fromBlock` = `toBlock` = 哈希值为 `blockHash` 的区块号。如果 `params` 中存在 `blockHash`，则不允许使用 `fromBlock` 和 `toBlock`。

```js
params: [{
  "topics": ["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]
}]
```

### 返回

结果见 [eth_getFilterChanges](#eth-getfilterchanges)

#### 示例
```js
// Request
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getLogs","params":[{"topics":["0x000000000000000000000000a94f5374fce5edbc8e2a8697c15331677e6ebf0b"]}],"id":74}'
```

结果见 [eth_getFilterChanges](#eth-getfilterchanges)
