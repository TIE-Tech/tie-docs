---
title: CLI Commands
description: 
lang: en
sidebar: true
---

## 1. tie command

- secrets
 Top level SecretsManager command for interacting with secrets functionality. 

- genesis
 Generates the genesis.json file, with passed in parameters. 

- server
 The default command that starts the Tie client, by bootstrapping all modules together. 

- status
 Returns the status of the Tie client. 

- txpool
 Top level command for interacting with the transaction pool. 

- peers
 Top level command for interacting with the network peers. 

- monitor
 Starts logging block add / remove events on the blockchain. 

- version
 Returns the current version. 

## 2. genesis command

- --consensus
 Sets consensus protocol. Default: pvbft. 

- --bootnode
 Multiaddr URL for p2p discovery bootstrap. This flag can be used multiple times. 

- --ibft-validator
 Sets passed in addresses as IBFT validators. Needs to be present if ibft-validators-prefix-path is omitted. 

- --epoch-size
 Sets the epoch size for the chain. Default 129600 

- --pos
 Sets the flag indicating that the client should use Proof of Stake IBFT. 

- --dir
 Sets the directory for the Polygon Edge genesis data. Default: ./genesis.json. 

- --name
 Sets the name for the chain. Default: tie.

- --ibft-validators-prefix-path
 Prefix path for validator folder directory. Needs to be present if ibft-validator is omitted. 

- --block-gas-limit
 Set block gas limit

- --premine
 Sets the premined accounts and balances. Default premined balance: 0x4546c07635c1fc494600000

- --chainid
 Sets the ID of the chain. Default: 100

## 3. server command

- --log-path LOG_PATH
 Sets the log path for console output. Default: logs/tiechain.log.

- ---grpc GRPC_ADDRESS
 Sets the address and port for the gRPC service (address:port). Default: :7749.

- --libp2p LIBP2P_ADDRESS
 Sets the address and port for the libp2p service (address:port). Default: 6636.

- --jsonrpc JSONRPC_ADDRESS
 Sets the address and port for the JSON-RPC service (address:port). Default: 8545.

- --no-discover NO_DISCOVER
 Prevents the client from discovering other peers. Default: false.

- --price-limit PRICE_LIMIT
 Sets minimum gas price limit to enforce for acceptance into the pool. Default: 0.

- --prometheus PROMETHEUS_ADDRESS
 Sets the address and port for the prometheus instrumentation service (address:port).

- --data-dir DATA_DIRECTORY
 Specifies the data directory used for storing TIE client data. Default: ./test-chain.

- --log-level LOG_LEVEL
 Sets the log level for console output. Default: INFO.

- --seal SHOULD_SEAL
 Sets the flag indicating that the client should seal blocks. Default: false.

- --config CLI_CONFIG_PATH
 Specifies the path to the CLI config. Supports .json and .hcl.

- --chain GENESIS_FILE
 Specifies the genesis file used for starting the chain. Default: test.

- --secrets-config SECRETS_CONFIG
 Sets the path to the SecretsManager config file. Used for Hashicorp Vault. If omitted, the local FS secrets manager is used.

- --block-time BLOCK_TIME
 Sets block time in seconds. Default: 2s.

- --block-gas-target BLOCK_GAS_TARGET
 Sets the target block gas limit for the chain. If omitted, the value of the parent block is used.

- --max-peers PEER_COUNT
 Sets the client's max no.of peers allowded. Default: 21.

- --max-slots MAX_SLOTS
 Sets maximum slots in the pool. Default: 4096.