---
title: Cross-chain monitoring deployment
description:
lang: en
sidebar: true
---


## 1. Installation


### 1.1 Building

`make build`: Builds `chainbridge` in `./build`.

**or**

`make install`: Uses `go install` to add `chainbridge` to your GOBIN.

### 1.2 Docker 
The official ChainBridge Docker image can be found here.

To build the Docker image locally run:

```
docker build -t chainsafe/chainbridge .
```

To start ChainBridge:
* `docker run -v` uses an absolute path rather than a relative one.

``` 
docker run -v $(pwd)/config.json:/config.json chainsafe/chainbridge
```

## 2. Configuration

> Note: TOML configs have been deprecated in favour of JSON

A chain configurations take this form:

```
{
    "name": "eth",                      // Human-readable name
    "type": "ethereum",                 // Chain type (eg. "ethereum" or "substrate")
    "id": "0",                          // Chain ID
    "endpoint": "ws://<host>:<port>",   // Node endpoint
    "from": "0xff93...",                // On-chain address of relayer
    "opts": {},                         // Chain-specific configuration options (see below)
}
```

See `config.json.example` for an example configuration. 

### 2.1 Ethereum Options

Ethereum chains support the following additional options:

```
{
    "bridge": "0x12345...",          // Address of the bridge contract (required)
    "erc20Handler": "0x1234...",     // Address of erc20 handler (required)
    "erc721Handler": "0x1234...",    // Address of erc721 handler (required)
    "genericHandler": "0x1234...",   // Address of generic handler (required)
    "maxGasPrice": "0x1234",         // Gas price for transactions (default: 20000000000)
    "minGasPrice": "0x1234",         // Minimum gas price for transactions (default: 0)
    "gasLimit": "0x1234",            // Gas limit for transactions (default: 6721975)
    "gasMultiplier": "1.25",         // Multiplies the gas price by the supplied value (default: 1)
    "http": "true",                  // Whether the chain connection is ws or http (default: false)
    "startBlock": "1234",            // The block to start processing events from (default: 0)
    "blockConfirmations": "10"       // Number of blocks to wait before processing a block
    "useExtendedCall": "true"        // Extend extrinsic calls to substrate with ResourceID. Used for backward compatibility with example pallet. *Default: false*
    "egsApiKey": "xxx..."            // API key for Eth Gas Station (https://www.ethgasstation.info/)
    "egsSpeed": "fast"               // Desired speed for gas price selection, the options are: "average", "fast", "fastest"
}
```

### 2.2 Substrate Options

Substrate supports the following additonal options:

```
{
    "startBlock": "1234" // The block to start processing events from (default: 0)
}
```

### 2.3 Blockstore

The blockstore is used to record the last block the relayer processed, so it can pick up where it left off. 

If a `startBlock` option is provided , then the greater of `startBlock` and the latest block in the blockstore is used at startup.

To disable loading from the blockstore specify the `--fresh` flag. A custom path for the blockstore can be provided with `--blockstore <path>`. For development, the `--latest` flag can be used to start from the current block and override any other configuration.

### 2.4 Keystore

ChainBridge requires keys to sign and submit transactions, and to identify each bridge node on chain.

To use secure keys, see `chainbridge accounts --help`. The keystore password can be supplied with the `KEYSTORE_PASSWORD` environment variable.

To import external ethereum keys, such as those generated with geth, use `chainbridge accounts import --ethereum /path/to/key`.

To import private keys as keystores, use `chainbridge account import --privateKey key`.

For testing purposes, chainbridge provides 5 test keys. The can be used with `--testkey <name>`, where `name` is one of `Alice`, `Bob`, `Charlie`, `Dave`, or `Eve`. 



## 3. Chain-Implementations

- Ethereum (Solidity): 

    The Solidity contracts required for chainbridge. Includes deployment and interaction CLI.

    The bindings for the contracts live in `bindings/`. To update the bindings modify `scripts/setup-contracts.sh` and then run `make clean && make setup-contracts`

    

## 4. Docs

MKdocs will generate static HTML files for Chainsafe markdown files located in `Chainbridge/docs/`

`make install-mkdocs`: Pull the docker image MkDocs

`make mkdocs`: Run MkDoc's docker image, building and hosting the html files on `localhost:8000`  

## 5. Testing

Unit tests require an ethereum node running on `localhost:8545` and a substrate node running on `localhost:9944`. E2E tests require an additional ethereum node on `localhost:8546`. 

A docker-compose file is provided to run two Geth nodes and a chainbridge-substrate-chain node in isolated environments:
```
$ docker-compose -f ./docker-compose-e2e.yml up
```

All Go tests can be run with:
```
$ make test
```
Go tests specifically for ethereum, substrate and E2E can be run with
```
$ make test-eth
$ make test-sub
$ make test-e2e
```