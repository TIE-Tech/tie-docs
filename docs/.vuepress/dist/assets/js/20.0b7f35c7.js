(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{474:function(t,e,a){"use strict";a.r(e);var s=a(65),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-pvbft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-pvbft"}},[t._v("#")]),t._v(" 1. PVBFT")]),t._v(" "),a("h3",{attrs:{id:"_1-1-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-overview"}},[t._v("#")]),t._v(" 1.1 Overview")]),t._v(" "),a("p",[t._v("PVBFT (POS+VRF+BFT) hybrid consensus algorithm, namely Byzantine POS (BFT style Proof of Stake).")]),t._v(" "),a("h3",{attrs:{id:"_1-2-pos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-pos"}},[t._v("#")]),t._v(" 1.2 POS")]),t._v(" "),a("p",[t._v("POS (Proof of Stake), Proof of Stake, becomes a validator through the Staking mechanism.")]),t._v(" "),a("h3",{attrs:{id:"_1-3-vrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-vrf"}},[t._v("#")]),t._v(" 1.3 VRF")]),t._v(" "),a("p",[t._v("VRF is a verifiable random function, which is pseudo-random on the one hand and verifiable on the other (the output includes a non-interactive zero-knowledge proof).")]),t._v(" "),a("p",[t._v("The selection of TIE nodes is based on the VRF verifiable random function, which makes the block-producing nodes have unpredictable randomness and adds security protection measures. The TIE board of directors proposes to provide fixed block rewards to verifiers. Based on VRF factors, block producers are randomly generated, so Fixed rewards are distributed randomly, and the distribution is based on the average on a periodic settlement rate.")]),t._v(" "),a("h3",{attrs:{id:"_1-4-bft"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-bft"}},[t._v("#")]),t._v(" 1.4 BFT")]),t._v(" "),a("p",[t._v("The BFT algorithm is an improvement on the PBFT algorithm. In addition to executing consensus, it also has a high fault tolerance mechanism. The State Transfer service is set up to repair the node that has an error, put it back into the system, and allow the repair to be completed. A node accesses the state of other nodes to get the latest replication state.")]),t._v(" "),a("p",[t._v("At the same time, in order to avoid errors of f nodes at the same time, the state transition service stores the operation logs performed by each node in other disks to ensure that the system can recover stably when such a situation occurs, effectively improving the performance efficiency of the system.")]),t._v(" "),a("p",[t._v("The BFT consensus algorithm divides nodes into two types: leader node (Leader) and replica node (Backup). Its Regency mechanism is the same as the View mechanism of the PBFT algorithm. The consensus process of the BFTGSmart algorithm is divided into:")]),t._v(" "),a("ul",[a("li",[t._v("Propose")]),t._v(" "),a("li",[t._v("Write")]),t._v(" "),a("li",[t._v("Accept")])]),t._v(" "),a("h3",{attrs:{id:"_1-5-epochs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-epochs"}},[t._v("#")]),t._v(" 1.5 Epochs")]),t._v(" "),a("p",[t._v("Epochs is a special time period that plays an important role in POS consensus. Taking blocks as the unit, TIE decides to replace the validator list every EOCH. The reward amount is issued according to the staking ratio. TIE sets the default EPOCH cycle to be 72 hours, that is, a cycle every 129,600 block heights.")]),t._v(" "),a("p",[t._v("The EPOCH value can be set in the Genesis configuration.")]),t._v(" "),a("h3",{attrs:{id:"_1-6-staking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-staking"}},[t._v("#")]),t._v(" 1.6 Staking")]),t._v(" "),a("p",[t._v("The user can pledge the specified amount by calling the stake method of the pledge contract, and participate in the validator list, and participate in the block production process in the next EPOCH. The calling method is as follows:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('const StakingContractFactory = await ethers.getContractFactory("Staking");\nlet stakingContract = await StakingContractFactory.attach(STAKING_CONTRACT_ADDRESS) as Staking;\nstakingContract = stakingContract.connect(account);\nconst tx = await stakingContract.stake({value: STAKE_AMOUNT});\n')])])]),a("h3",{attrs:{id:"_1-7-unstaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-unstaking"}},[t._v("#")]),t._v(" 1.7 Unstaking")]),t._v(" "),a("p",[t._v("Users can freely release the Staking amount at any time, and will not participate in the block production process from the next EPOCH after the release. The calling method is as follows:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('const StakingContractFactory = await ethers.getContractFactory("Staking");\nlet stakingContract = await StakingContractFactory.attach(STAKING_CONTRACT_ADDRESS) as Staking;\nstakingContract = stakingContract.connect(account);\n\nconst tx = await stakingContract.unstake();\n')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);