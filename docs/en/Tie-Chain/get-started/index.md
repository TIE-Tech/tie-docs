---
title: Get started
description: 
lang: en
sidebar: true
---


## 1. Installation

### 1.1 Install Go

#### 1.1.1 Download
```
wget https://go.dev/dl/go1.17.10.linux-amd64.tar.gz
rm -rf /usr/local/go
tar zxvf go1.17.10.linux-amd64.tar.gz -C /usr/local/go
```

#### 1.1.2 Environment variable
```
vim /etc/profile
```
```
export GOROOT=/usr/local/go
export GOPATH=/home/golang
export GOBIN=/home/golang/bin
export PATH=$PATH:$GOROOT/bin:$GOBIN
```
```
source /etc/profile
```

### 1.2 Generate

#### 1.2.1 Building `tie` from source

```
git clone git@github.com:TIE-Tech/tie-core.git
cd main-chain/
go build -o tie
mv tie /usr/local/bin
```

#### 1.2.2 Initialize data folders and generate validator keys

```
tie secrets init --data-dir chain-data-1
tie secrets init --data-dir chain-data-2
tie secrets init --data-dir chain-data-3
tie secrets init --data-dir chain-data-4
```

#### 1.2.3 Generate genesis.json

```
tie genesis --consensus ibft --pos --chainid 99 \
--ibft-validator 0xEC5e0Eb4eceDbB59022db98632b91243EeA742f9 \
--ibft-validator 0xaECf74F9Aa6d1d79a2fa540af968Db788Ecb19e0 \
--ibft-validator 0x9EbEdCe6eb4B6fC7f18521E135324883ba093b17 \
--ibft-validator 0x104Af911E6CBb54533C78954aea505b2Db4d4b82 \
--bootnode /ip4/192.168.10.1/tcp/5525/p2p/16Uiu2HAmLGnKBqBSh8ZabRRJuyXHcQ195T827MmhzxPFnjyBipJg \
--bootnode /ip4/192.168.10.2/tcp/5525/p2p/16Uiu2HAmVh13FGoGyYb5csECTEqCEwvdtqQrPeskqAPnfcmoT2s6 \
--bootnode /ip4/192.168.10.3/tcp/5525/p2p/16Uiu2HAmHexGQUcFspid6bkEAdFvxcj4DCc5xG9XsX2R58fXx132 \
--bootnode /ip4/192.168.10.4/tcp/5525/p2p/16Uiu2HAkvaa9wAU1Xz76TkWe7x8QH53UmnVMiVfsabKHfoKJXnGh \
--premine 0x5573143eBA235545BE5548E1107dD7B92713EF18:100000000000000000000000
```

### 1.3 Deploy with docker

#### 1.3.1 Building `tie` images 
```
git clone git@github.com:TIE-Tech/tie-core.git
cd main-chain/
docker build . -t tie:v1.0
```

#### 1.3.2 Building `node` images

- start.sh
```
mkdir images && cd images
vim bin/start.sh
```
```
  #!/bin/bash
  tie server --data-dir ./chain-data --chain genesis.json --network=host --seal
```

- Dockerfile

 
```
FROM tie:v1.0

RUN apk update && apk add bash curl

ADD bin /root/bin

RUN chmod a+x /root/bin/*

ENTRYPOINT /root/bin/start.sh
```

- building
```
docker build . -t node:v1.0
```

- mount directory
```
mkdir -p project/test-chain project/logs
```

#### Run Server
```
docker run --name chain -v project/:/data --netword=host -d node1:v1.0
docker logs -f chain
```