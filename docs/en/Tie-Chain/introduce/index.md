---
title: Consensus
description: 
lang: en
sidebar: true
---

## 1. PVBFT

### 1.1 Overview
PVBFT (POS+VRF+BFT) hybrid consensus algorithm, namely Byzantine POS (BFT style Proof of Stake).

### 1.2 POS
POS (Proof of Stake), Proof of Stake, becomes a validator through the Staking mechanism.

### 1.3 VRF
VRF is a verifiable random function, which is pseudo-random on the one hand and verifiable on the other (the output includes a non-interactive zero-knowledge proof).

The selection of TIE nodes is based on the VRF verifiable random function, which makes the block-producing nodes have unpredictable randomness and adds security protection measures. The TIE board of directors proposes to provide fixed block rewards to verifiers. Based on VRF factors, block producers are randomly generated, so Fixed rewards are distributed randomly, and the distribution is based on the average on a periodic settlement rate.

### 1.4 BFT
The BFT algorithm is an improvement on the PBFT algorithm. In addition to executing consensus, it also has a high fault tolerance mechanism. The State Transfer service is set up to repair the node that has an error, put it back into the system, and allow the repair to be completed. A node accesses the state of other nodes to get the latest replication state.

At the same time, in order to avoid errors of f nodes at the same time, the state transition service stores the operation logs performed by each node in other disks to ensure that the system can recover stably when such a situation occurs, effectively improving the performance efficiency of the system.

The BFT consensus algorithm divides nodes into two types: leader node (Leader) and replica node (Backup). Its Regency mechanism is the same as the View mechanism of the PBFT algorithm. The consensus process of the BFTGSmart algorithm is divided into:

  - Propose
  - Write
  - Accept

### 1.5 Epochs
Epochs is a special time period that plays an important role in POS consensus. Taking blocks as the unit, TIE decides to replace the validator list every EOCH. The reward amount is issued according to the staking ratio. TIE sets the default EPOCH cycle to be 72 hours, that is, a cycle every 129,600 block heights.

The EPOCH value can be set in the Genesis configuration.

### 1.6 Staking
The user can pledge the specified amount by calling the stake method of the pledge contract, and participate in the validator list, and participate in the block production process in the next EPOCH. The calling method is as follows:
```
const StakingContractFactory = await ethers.getContractFactory("Staking");
let stakingContract = await StakingContractFactory.attach(STAKING_CONTRACT_ADDRESS) as Staking;
stakingContract = stakingContract.connect(account);
const tx = await stakingContract.stake({value: STAKE_AMOUNT});
```

### 1.7 Unstaking
Users can freely release the Staking amount at any time, and will not participate in the block production process from the next EPOCH after the release. The calling method is as follows:
```
const StakingContractFactory = await ethers.getContractFactory("Staking");
let stakingContract = await StakingContractFactory.attach(STAKING_CONTRACT_ADDRESS) as Staking;
stakingContract = stakingContract.connect(account);

const tx = await stakingContract.unstake();
```