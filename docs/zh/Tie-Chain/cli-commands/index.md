---
title: CLI 命令
description: 
lang: zh
sidebar: true
---

## 1. TIE 命令

- secrets
用于与机密功能交互的顶级机密管理器命令。

- genesis
使用传入的参数生成 genesis.json 文件。

- server
通过将所有模块一起引导来启动 Tie 客户端的默认命令。

- status
返回 Tie 客户端的状态。

- txpool
用于与事务池交互的顶级命令。

- peers
用于与网络对等方交互的顶级命令。

- monitor
开始记录区块链上的块添加/删除事件。

- version
返回当前版本。

## 2. 创世命令

- --consensus
设置共识协议。 默认值：pvbft。

- --bootnode
用于 p2p 发现引导的多地址 URL。 该标志可以多次使用。

- --ibft-validator
设置作为 IBFT 验证器传入的地址。 如果省略 ibft-validators-prefix-path 则需要存在。

- --epoch-size
设置链的纪元大小。 默认 129600

- --pos
设置指示客户端应使用权益证明 IBFT 的标志。

- --dir
设置 Polygon Edge 创世数据的目录。 默认值：./genesis.json。

- --name
设置链的名称。 默认值：领带。

- --ibft-validators-prefix-path
验证器文件夹目录的前缀路径。 如果省略 ibft-validator，则需要存在。

- --block-gas-limit
设置区块气体限制

- --premine
设置预挖账户和余额。 默认预挖余额：0x4546c07635c1fc494600000

- --chainid
设置链的 ID。 默认值：100

## 3. 服务器命令

- --log-path LOG_PATH
设置控制台输出的日志路径。默认值：logs/tiechain.log。

- ---grpc GRPC_ADDRESS
设置 gRPC 服务的地址和端口（地址：端口）。默认值：:7749。

- --libp2p LIBP2P_ADDRESS
设置 libp2p 服务的地址和端口（地址：端口）。默认值：6636。

- --jsonrpc JSONRPC_ADDRESS
设置 JSON-RPC 服务的地址和端口（地址：端口）。默认值：8545。

- --no-discover NO_DISCOVER
防止客户端发现其他对等方。默认值：假。

- --price-limit PRICE_LIMIT
设置最低gas价格限制以强制接受进入池。默认值：0。

- --prometheus PROMETHEUS_ADDRESS
设置 prometheus 检测服务的地址和端口（地址：端口）。

- --data-dir DATA_DIRECTORY
指定用于存储 TIE 客户端数据的数据目录。默认值：./test-chain。

- --log-level LOG_LEVEL
设置控制台输出的日志级别。默认值：信息。

- --seal SHOULD_SEAL
设置指示客户端应该密封块的标志。默认值：假。

- --config CLI_CONFIG_PATH
指定 CLI 配置的路径。支持 .json 和 .hcl。

- --chain GENESIS_FILE
指定用于启动链的创世文件。默认值：测试。

- --secrets-config SECRETS_CONFIG
设置 SecretsManager 配置文件的路径。用于 Hashicorp Vault。如果省略，则使用本地 FS 机密管理器。

- --block-time BLOCK_TIME
以秒为单位设置阻塞时间。默认值：2 秒。

- --block-gas-target BLOCK_GAS_TARGET
设置链的目标块气体限制。如果省略，则使用父块的值。

- --max-peers PEER_COUNT
设置客户端允许的最大对等点数。默认值：21。

- --max-slots MAX_SLOTS
设置池中的最大插槽。默认值：4096。