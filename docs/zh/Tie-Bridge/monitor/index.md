---
title: 跨链监听部署
description:
lang: zh
sidebar: true
---

## 1. 安装

### 1.1 构建

`make build`：在 `./build` 中构建 `chainbridge`。

**or**

`make install`：使用`go install` 将 `chainbridge`添加到您的GOBIN。

### 1.2 Docker 

可以在这里找到官方的 ChainBridge Docker 镜像。

要在本地构建 Docker 映像，请运行：
```
docker build -t chainsafe/chainbridge .
```

启动链桥：
* `docker run -v` 使用绝对路径而不是相对路径。

``` 
docker run -v $(pwd)/config.json:/config.json chainsafe/chainbridge
```

## 2. 配置

> 注意：TOML 配置已被弃用，取而代之的是 JSON

链配置采用以下形式：

```
{
     "name": "eth",                 // 名称
     "type": "ethereum",            // 链类型（例如 "ethereum" 或 "substrate"）
     "id": "0",                     // 链 ID
     "endpoint": "ws://<host>:<port>", // 节点端点
     "from": "0xff93...",   // 中继器的链上地址
     "opts": {},            // 链特定的配置选项（见下文）
}
```

有关示例配置，请参阅 `config.json.example`。

### 2.1 Ethereum 选项

以太坊链支持以下附加选项：

```
{
    "bridge": "0x12345...", // 桥接合约地址（必填）
    "erc20Handler": "0x1234...", // erc20 处理程序的地址（必填）
    "erc721Handler": "0x1234...", // erc721 处理器地址（必填）
    "genericHandler": "0x1234...", // 通用处理程序的地址（必填）
    "maxGasPrice": "0x1234", // 交易的 Gas 价格（默认值：20000000000）
    "minGasPrice": "0x1234", // 交易的最低 gas 价格（默认值：0）
    "gasLimit": "0x1234", // 交易的 Gas 限制（默认值：6721975）
    "gasMultiplier": "1.25", // 将 gas 价格乘以提供的值（默认值：1）
    "http": "true", // 链式连接是ws还是http（默认：false）
    "startBlock": "1234", // 开始处理事件的块（默认值：0）
    "blockConfirmations": "10" // 在处理一个块之前要等待的块数
    "useExtendedCall": "true" // 使用 ResourceID 扩展对基板的外部调用。用于向后兼容示例托盘。 *默认值：假*
    "egsApiKey": "xxx..." // Eth Gas Station 的 API 密钥 (https://www.ethgasstation.info/)
    "egsSpeed": "fast" // gas price 选择所需的速度，选项有："average"、"fast"、"fastest"
}
```

### 2.2 Substrate 选项

Substrate 支持以下附加选项：

```
{
    "startBlock": "1234" // 开始处理事件的块（默认值：0）
}
```

### 2.3 块存储

块存储用于记录中继器处理的最后一个块，因此它可以从中断的地方继续。

如果提供了 `startBlock` 选项，则在启动时使用 `startBlock` 和块存储中的最新块中的较大者。

要禁用从块存储加载，请指定 `--fresh` 标志。 可以使用 `--blockstore <path>` 提供块存储的自定义路径。 对于开发，`--latest` 标志可用于从当前块开始并覆盖任何其他配置。

### 2.4 Keystore

ChainBridge 需要密钥来签署和提交交易，并识别链上的每个桥接节点。

要使用安全密钥，请参阅`chainbridge accounts --help`。 密钥库密码可以通过 `KEYSTORE_PASSWORD` 环境变量提供。

要导入外部以太坊密钥，例如使用 geth 生成的密钥，请使用“chainbridge accounts import --ethereum /path/to/key”。

要将私钥作为密钥库导入，请使用“chainbridge account import --privateKey key”。

出于测试目的，chainbridge 提供了 5 个测试密钥。 可以与 `--testkey <name>` 一起使用，其中 `name` 是 `Alice`、`Bob`、`Charlie`、`Dave` 或 `Eve` 之一。

## 3. 链的实现

- Ethereum (Solidity): 

链桥所需的 Solidity 合约。 包括部署和交互 CLI。合约的绑定存在于`bindings/`中。 要更新绑定修改`scripts/setup-contracts.sh`，然后运行`make clean && make setup-contracts`
    
## 4. 文档

MKdocs 将为位于 `Chainbridge/docs/` 中的 Chainsafe 降价文件生成静态 HTML 文件

`make install-mkdocs`: 拉取 docker 镜像 MkDocs

`make mkdocs`: 运行 MkDoc 的 docker 镜像，在 `localhost:8000` 上构建和托管 html 文件.

## 5. 测试

单元测试需要一个运行在“localhost:8545”上的以太坊节点和一个运行在“localhost:9944”上的底层节点。 E2E 测试需要在 `localhost:8546` 上增加一个以太坊节点。

提供了一个 docker-compose 文件来在隔离环境中运行两个 Geth 节点和一个 chainbridge-substrate-chain 节点：

```
$ docker-compose -f ./docker-compose-e2e.yml up
```

所有 Go 测试都可以运行：

```
$ make test
```
可以运行专门针对以太坊、底层和 E2E 的 Go 测试
```
$ make test-eth
$ make test-sub
$ make test-e2e
```

