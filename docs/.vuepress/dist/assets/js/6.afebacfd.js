(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{423:function(e,t,a){e.exports=a.p+"assets/img/1.3964406c.png"},424:function(e,t,a){e.exports=a.p+"assets/img/2.60de2a3b.png"},425:function(e,t,a){e.exports=a.p+"assets/img/3.2bbd12a9.png"},471:function(e,t,a){"use strict";a.r(t);var n=a(65),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"_1-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-overview"}},[e._v("#")]),e._v(" 1. Overview")]),e._v(" "),n("p",[e._v("This guide describes the implementation of cross-chain transactions between polygon TEST (Mumbai Test Chain) and TIE Chain")]),e._v(" "),n("h2",{attrs:{id:"_2-tool-and-environmental-requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-tool-and-environmental-requirements"}},[e._v("#")]),e._v(" 2. Tool and Environmental Requirements")]),e._v(" "),n("p",[e._v("​ environment:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Go: >= 1.16")])]),e._v(" "),n("li",[n("p",[e._v("Node.js >= 16.13.0")])]),e._v(" "),n("li",[n("p",[e._v("Git")]),e._v(" "),n("p",[e._v("tool:")]),e._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://github.com/ChainSafe/ChainBridge",target:"_blank",rel:"noopener noreferrer"}},[e._v("ChainBridge"),n("OutboundLink")],1),e._v(": v1.1.5")])]),e._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/ChainSafe/chainbridge-deploy",target:"_blank",rel:"noopener noreferrer"}},[e._v("ChainBridge Deploy Tools"),n("OutboundLink")],1),e._v(": "),n("code",[e._v("f2aa093")]),e._v(" on "),n("code",[e._v("main")]),e._v(" branch")])])])])]),e._v(" "),n("h2",{attrs:{id:"_3-cross-chain-contract-deployment"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-cross-chain-contract-deployment"}},[e._v("#")]),e._v(" 3. Cross-chain contract deployment")]),e._v(" "),n("h3",{attrs:{id:"_3-1-deployment-script-download"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-deployment-script-download"}},[e._v("#")]),e._v(" 3.1 Deployment script download:")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("\n$ git clone https"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("github"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("com"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("ChainSafe"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("chainbridge"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("deploy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("git\n$ cd chainbridge"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("deploy"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("cb"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("sol"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("cli\n$ make install\n\n")])])]),n("h3",{attrs:{id:"_3-2-deploy-cross-chain-contracts-to-polygon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-deploy-cross-chain-contracts-to-polygon"}},[e._v("#")]),e._v(" 3.2 Deploy cross-chain contracts to polygon")]),e._v(" "),n("p",[e._v("We will deploy the contract to the polygon TEST chain by command. This command deploys all contracts, including Bridge, ERC20 Handler, ERC721 Handler, Generic Handler, ERC20 and ERC721 contracts. Additionally, it sets default relay account addresses and thresholds.")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ cb-sol-cli deploy --all --chainId 99 \n  --url https://rpc-mumbai.matic.today \n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \n  --relayers [RELAYER_ACCOUNT_ADDRESS] \n  --relayerThreshold 1 \n")])])]),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" cb-sol-cli deploy --all --chainId 97 \n --url  https://data-seed-prebsc-2-s1.binance.org:8545\n --privateKey 64a69c87b3d15dc1xxxxxxxxxxxxxxxxxxxxxx\n --relayers 0xAFC312512B8787848D75490377b093B1F7CF3033\n --relayerThreshold 1 \n --gasPrice 10000000000\n \nUrl:        https://data-seed-prebsc-2-s1.binance.org:8545\nDeployer:   0xAFC312512B8787848D75490377b093B1F7CF3033\nGas Limit:   8000000\nGas Price:   10000000000\nDeploy Cost: 0.14532642\n\nOptions\n=======\nChain Id:    97\nThreshold:   1\nRelayers:    0xAFC312512B8787848D75490377b093B1F7CF3033\nBridge Fee:  0\nExpiry:      100\n\nContract Addresses\n================================================================\nBridge:             0xa5B27BdCb8af3d062e63C02b31Ee9E8763e9636B\n----------------------------------------------------------------\nErc20 Handler:      0xE52482077205e0205a9B25b6f043B812A5c81f0e\n----------------------------------------------------------------\nErc721 Handler:     0xFa4Ee64074b799a9Ee7951c0fDfb2F7b0dDcB6F6\n----------------------------------------------------------------\nGeneric Handler:    0x48422E521f9063291c2f140a7Cec274C3c008Db4\n----------------------------------------------------------------\nErc20:              0x52Ad3084a9Ad4152E52FdEAb8644a05E9Eb1E006\n----------------------------------------------------------------\nErc721:             0xed94f9e20416531cBcb5A68F81D746D0F8Da6eec\n----------------------------------------------------------------\nCentrifuge Asset:   Not Deployed\n----------------------------------------------------------------\nWETC:               Not Deployed\n================================================================\n")])])]),n("h3",{attrs:{id:"_3-3-deploy-cross-chain-contracts-to-tie"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-deploy-cross-chain-contracts-to-tie"}},[e._v("#")]),e._v(" 3.3 Deploy cross-chain contracts to TIE")]),e._v(" "),n("p",[e._v("Then deploy the contract to the TIE chain through the command, the steps are the same as above")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ cb-sol-cli deploy --all --chainId 100 \n  --url http://localhost:10002 \n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \n  --relayers [RELAYER_ACCOUNT_ADDRESS] \n  --relayerThreshold 1\n")])])]),n("h2",{attrs:{id:"_4-relay-configuration-and-start-listening"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-relay-configuration-and-start-listening"}},[e._v("#")]),e._v(" 4. Relay configuration and start listening")]),e._v(" "),n("h3",{attrs:{id:"_4-1-repeater-download"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-repeater-download"}},[e._v("#")]),e._v(" 4.1 Repeater download")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ git clone https://github.com/ChainSafe/ChainBridge.git\n$ cd chainBridge && make install\n")])])]),n("h3",{attrs:{id:"_4-2-monitor-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-monitor-configuration"}},[e._v("#")]),e._v(" 4.2 Monitor configuration")]),e._v(" "),n("p",[e._v("Next, you need "),n("code",[e._v("config.json")]),e._v(" to create and set the JSON-RPC URL, repeater address and contract address for each chain.")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('\n  "chains": [\n    {\n      "name": "polygon TEST",\n      "type": "ethereum",\n      "id": "97",\n      "endpoint": "https://data-seed-prebsc-2-s1.binance.org:8545",\n      "from": "<RELAYER_ACCOUNT_ADDRESS>",\n      "opts": {\n        "bridge": "<BRIDGE_CONTRACT_ADDRESS>",\n        "erc20Handler": "<ERC20_HANDLER_CONTRACT_ADDRESS>",\n        "erc721Handler": "<ERC721_HANDLER_CONTRACT_ADDRESS>",\n        "genericHandler": "<GENERIC_HANDLER_CONTRACT_ADDRESS>",\n        "minGasPrice": "1",\n        "http": "true"\n      }\n    },\n    {\n      "name": "tie",\n      "type": "ethereum",\n      "id": "166",\n      "endpoint": "http://localhost:10002",\n      "from": "<RELAYER_ACCOUNT_ADDRESS>",\n      "opts": {\n        "bridge": "<BRIDGE_CONTRACT_ADDRESS>",\n        "erc20Handler": "<ERC20_HANDLER_CONTRACT_ADDRESS>",\n        "erc721Handler": "<ERC721_HANDLER_CONTRACT_ADDRESS>",\n        "genericHandler": "<GENERIC_HANDLER_CONTRACT_ADDRESS>",\n        "minGasPrice": "1",\n        "http": "true"\n      }\n    }\n  ]\n}\n')])])]),n("h3",{attrs:{id:"_4-3-import-private-key"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-import-private-key"}},[e._v("#")]),e._v(" 4.3 import private key")]),e._v(" "),n("p",[e._v("To start the relayer, you need to import the private key corresponding to the relayer account address. A password is required when importing the private key. After a successful import, the key will be stored in "),n("code",[e._v("keys/<ADDRESS>.key")]),e._v(".")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ chainbridge accounts import --privateKey [RELAYER_ACCOUNT_PRIVATE_KEY]\n\nINFO[11-19|07:09:01] Importing key... \nEnter password to encrypt keystore file:\n> [PASSWORD_TO_ENCRYPT_KEY]\nINFO[11-19|07:09:05] private key imported    \n")])])]),n("h3",{attrs:{id:"_4-4-start-listener"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-start-listener"}},[e._v("#")]),e._v(" 4.4 start listener")]),e._v(" "),n("p",[e._v("Once the listener starts, it will start watching each chain for new blocks.")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("chainbridge --config config.json --latest\n\nINFO[11-19|07:15:19] Starting ChainBridge... \nEnter password for key ./keys/<RELAYER_ACCOUNT_ADDRESS>.key:\n> [PASSWORD_TO_DECRYPT_KEY]\nINFO[11-19|07:15:25] Connecting to ethereum chain...          chain=mumbai url=<JSON_RPC_URL>\nEnter password for key ./keys/<RELAYER_ACCOUNT_ADDRESS>.key:\n> [PASSWORD_TO_DECRYPT_KEY]\nINFO[11-19|07:15:31] Connecting to ethereum chain...          chain=tie url=<JSON_RPC_URL>\n")])])]),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cuiyang@bogon ChainBridge % ./build/chainbridge --config config.json --latest\nINFO[04-08|10:51:26] Starting ChainBridge... \nEnter password for key ./keys/0xAFC312512B8787848D75490377b093B1F7CF3033.key:\n> \nINFO[04-08|10:51:28] Connecting to ethereum chain...          chain=bsc url=https://data-seed-prebsc-2-s1.binance.org:8545\nEnter password for key ./keys/0xAFC312512B8787848D75490377b093B1F7CF3033.key:\n> \nINFO[04-08|10:51:33] Connecting to ethereum chain...          chain=tie url=http://192.168.1.132:8545\nINFO[04-08|10:51:33] Started bsc chain                        system=core\nINFO[04-08|10:51:33] Polling Blocks...                        chain=bsc block=18259742\nINFO[04-08|10:51:33] Polling Blocks...                        chain=tie block=14947\nINFO[04-08|10:51:33] Started ptie chain               system=core\nINFO[04-08|13:19:22] Handling fungible deposit event          chain=tie dest=100 nonce=1\nINFO[04-08|13:19:22] Attempting to resolve message            chain=tie type=FungibleTransfer src=100 dst=100 nonce=1 rId=000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00\nINFO[04-08|13:19:22] Creating erc20 proposal                  chain=tie src=100 nonce=1\nINFO[04-08|13:19:22] Watching for finalization event          chain=tie src=100 nonce=1\nINFO[04-08|13:19:22] Submitted proposal vote                  chain=tie tx=0x43bfdaa2a313ee6f420a5f91ca1d4b0030a6046aa0bc27729965e67036e5c62e src=100 depositNonce=1 gasPrice=1391\nINFO[04-08|13:19:47] Submitted proposal execution             chain=tie tx=0xed53d30ca3d2240aa7ac95e2141791209621ff48fbf34ef992224743856a28e6 src=100 dst=100 nonce=1 gasPrice=1417\nINFO[04-08|13:46:52] Handling fungible deposit event          chain=tie dest=97 nonce=1\nINFO[04-08|13:46:52] Attempting to resolve message            chain=bsc type=FungibleTransfer src=100 dst=97 nonce=1 rId=000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00\nINFO[04-08|13:46:52] Creating erc20 proposal                  chain=bsc src=100 nonce=1\nINFO[04-08|13:46:52] Watching for finalization event          chain=bsc src=100 nonce=1\nINFO[04-08|13:46:52] Submitted proposal vote                  chain=bsc tx=0x205f61f6b1051ac84399acb211def61d2db76468a39139e8bb958bc4e2b72d3d src=100 depositNonce=1 gasPrice=10000000000\n")])])]),n("h3",{attrs:{id:"_4-5-overall-contract-and-listener-architecture-diagram"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-overall-contract-and-listener-architecture-diagram"}},[e._v("#")]),e._v(" 4.5 Overall contract and listener architecture diagram")]),e._v(" "),n("p",[n("img",{attrs:{src:a(423),alt:"image-20220516123553346"}})]),e._v(" "),n("h2",{attrs:{id:"_5-erc20-cross-chain-transfer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-erc20-cross-chain-transfer"}},[e._v("#")]),e._v(" 5. ERC20 Cross-chain transfer")]),e._v(" "),n("h3",{attrs:{id:"_5-1-register-resource-id"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-register-resource-id"}},[e._v("#")]),e._v(" 5.1 Register resource ID")]),e._v(" "),n("p",[e._v("You will register a resource ID of an associated resource in a cross-chain environment. The resource ID is a 32-byte value that must be unique for the resource we transfer between these blockchains. Resource IDs are arbitrary, but they may have the chain ID of the main chain in the last byte, as a convention (the main chain refers to the network from which these resources originate).")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ cb-sol-cli bridge register-resource \\\n  --url https://rpc-mumbai.matic.today \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  # Set Resource ID for ERC20\n  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00" \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --handler "[ERC20_HANDLER_CONTRACT_ADDRESS]" \\\n  --targetContract "[ERC20_CONTRACT_ADDRESS]"\n\n# For tie chain\n$ cb-sol-cli bridge register-resource \\\n  --url http://localhost:10002 \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  # Set Resource ID for ERC20\n  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00" \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --handler "[ERC20_HANDLER_CONTRACT_ADDRESS]" \\\n  --targetContract "[ERC20_CONTRACT_ADDRESS]"\n')])])]),n("p",[e._v("Execution example：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('cb-sol-cli bridge register-resource   \n--url  https://data-seed-prebsc-2-s1.binance.org:8545 --privateKey 64a69c87b3d15dc1XXXXXXXXXXXXXXXXXXXX\n--resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00" \n--bridge  0xa5B27BdCb8af3d062e63C02b31Ee9E8763e9636B  \n--handler  0xE52482077205e0205a9B25b6f043B812A5c81f0e \n--targetContract 0x52Ad3084a9Ad4152E52FdEAb8644a05E9Eb1E006 \n--gasPrice 10000000000\n\n[bridge/register-resource] Registering contract 0x52Ad3084a9Ad4152E52FdEAb8644a05E9Eb1E006 with resource ID 0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00 on handler 0xE52482077205e0205a9B25b6f043B812A5c81f0e\nWaiting for tx: 0xddb98e63e35b2b0da5abd8c1d9a0ca3b93cb0ec436402e859e2f072d559323a1...\n\n')])])]),n("h3",{attrs:{id:"_5-2-add-token-usage-model-optional"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-add-token-usage-model-optional"}},[e._v("#")]),e._v(" 5.2 Add token usage model (optional)")]),e._v(" "),n("p",[e._v("When transferring ERC20 tokens between chains, tokens can be handled in two different ways:\n(1)  Lock/Release mode")]),e._v(" "),n("p",[n("strong",[e._v("Source Chain")]),e._v(": The tokens you send will be locked in the ERC20 handler contract\nIn "),n("strong",[e._v("Destination Chain")]),e._v(": The same amount of tokens that you sent in the source chain will be unlocked and transferred from the ERC20 handler contract to the receiving account in the target chain.")]),e._v(" "),n("p",[e._v("(2) Burn/Mint mode")]),e._v(" "),n("p",[n("strong",[e._v("Source Chain")]),e._v(": Tokens you send will be burned\n"),n("strong",[e._v("Destination Chain")]),e._v(": The same amount of tokens that you send and burn on the source chain will be minted on the target chain and sent to the recipient account.")]),e._v(" "),n("p",[e._v("You can use different patterns in each chain. This means that you can lock an ERC20 token in the main chain while minting an ERC20 token in the child chain for transfer. For example, it might make sense to lock/release tokens if the total supply or minting schedule is controlled. Tokens will be minted/burned if the contracts in the subchain have to follow the supply in the main chain.")]),e._v(" "),n("p",[e._v("The default mode is "),n("strong",[e._v("lock/release")]),e._v(" mode. If you want to make the token mintable/burnable, you need to call the "),n("code",[e._v("adminSetBurnable")]),e._v(" method. If you want to mint tokens on execution, you need to grant the "),n("code",[e._v("minter")]),e._v(" role to the ERC20 handler contract")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# Let ERC20 contract burn on source chain and mint on destination chain\n$ cb-sol-cli bridge set-burn \n  --url http://localhost:10002 \n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \n  --handler "[ERC20_HANDLER_CONTRACT_ADDRESS]" \n  --tokenContract "[ERC20_CONTRACT_ADDRESS]"\n\n# Grant minter role to ERC20 Handler contract\n$ cb-sol-cli erc20 add-minter \n  --url http://localhost:10002 \n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \n  --erc20Address "[ERC20_CONTRACT_ADDRESS]" \n  --minter "[ERC20_HANDLER_CONTRACT_ADDRESS]"\n')])])]),n("h3",{attrs:{id:"_5-3-cross-chain-transfer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-cross-chain-transfer"}},[e._v("#")]),e._v(" 5.3 Cross-chain transfer")]),e._v(" "),n("p",[e._v("We will send ERC20 tokens from TIE chain to polygon chain.")]),e._v(" "),n("p",[e._v("First, you will get tokens by minting. Accounts with the miner role can mint new tokens. The account "),n("code",[e._v("minter")]),e._v(" that has deployed ERC20 contracts has this role by default. To designate another account as a member of the "),n("code",[e._v("minter")]),e._v(" role, you need to run the "),n("code",[e._v("cb-sol-cli erc20 add-minter")]),e._v(" command")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('# Mint ERC20 tokens\n$ cb-sol-cli erc20 mint \n  --url https://rpc-mumbai.matic.today \n  --privateKey [MINTER_ACCOUNT_PRIVATE_KEY] \n  --erc20Address "[ERC20_CONTRACT_ADDRESS]" \n  --amount 1000\n  \n  # Approve transfer from the account by ERC20 Handler\n  # Next, you need to approve the transfer of ERC20 tokens from the account via the ERC20 Handler\n$ cb-sol-cli erc20 approve \n  --url https://rpc-mumbai.matic.today \n  --privateKey [USER_ACCOUNT_ADDRESS] \n  --erc20Address "[ERC20_CONTRACT_ADDRESS]" \n  --recipient "[ERC20_HANDLER_CONTRACT_ADDRESS]" \n  --amount 500\n  \n  \n  # Start transfer from tie  to polygon chain\n  # To transfer tokens to the polygon chain, you will call deposit\n$ cb-sol-cli erc20 deposit \\\n  --url https://rpc-mumbai.matic.today \\\n  --privateKey [PRIVATE_KEY] \\\n  --amount 10 \\\n  # ChainID of tie chain\n  --dest 100 \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --recipient "[RECIPIENT_ADDRESS_IN_TIE_CHAIN]" \\\n  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00"\n')])])]),n("p",[e._v("Execution example：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('cb-sol-cli erc20 mint \n--url http://192.168.1.132:8545 \n--privateKey 64a69c87b3d15dc1f03XXXXXXXXXXXXXXXXXXXXXXXX \n--erc20Address 0x10D95320F84e96eDd3C69347Ebcf83a6B7fae0cb \n--amount 1000\n\n[erc20/mint] Minting 1000 tokens to 0xAFC312512B8787848D75490377b093B1F7CF3033 on contract 0x10D95320F84e96eDd3C69347Ebcf83a6B7fae0cb\nWaiting for tx: 0x676ca8505f93a7266e266212783cd643161101f682f939ef43d3a4dc21e7bf3b...\n\n\ncb-sol-cli erc20 approve  \n--url http://192.168.1.132:8545  \n--privateKey 64a69c87b3d15dc1XXXXXXXXXXXXXXXXXXXXXXXX\n--erc20Address 0x10D95320F84e96eDd3C69347Ebcf83a6B7fae0cb\n--recipient 0x18ace2Bc228ffF3459e06646a10bb40c3420E07A \n--amount 500\n\n[erc20/approve] Approving 0x18ace2Bc228ffF3459e06646a10bb40c3420E07A to spend 500 tokens from 0xAFC312512B8787848D75490377b093B1F7CF3033!\nWaiting for tx: 0xe78841a61ceca9714ef830e2e4f05296b92370884045155e2b3e21f7ef556be3...\n\n\ncb-sol-cli erc20 deposit \n--url  http://192.168.1.132:8545 \n--privateKey 64a69c87b3d15dc1fXXXXXXXXXXXXXXXXXXXXXXX\n--amount 10  \n--dest 97\n--bridge 0x75332FD24A14EB201f7c635f885b30D3F8B118F8 \n--recipient 0xAFC312512B8787848D75490377b093B1F7CF3033  \n--resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00"\n\n\n[erc20/deposit] Constructed deposit:\n[erc20/deposit]   Resource Id: 0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00\n[erc20/deposit]   Amount: 0x8ac7230489e80000\n[erc20/deposit]   len(recipient): 20\n[erc20/deposit]   Recipient: 0xAFC312512B8787848D75490377b093B1F7CF3033\n[erc20/deposit]   Raw: 0x0000000000000000000000000000000000000000000000008ac7230489e800000000000000000000000000000000000000000000000000000000000000000014AFC312512B8787848D75490377b093B1F7CF3033\n[erc20/deposit] Creating deposit to initiate transfer!\nWaiting for tx: 0x418bfc456dc14161425ec30cb37b56575a254191dd88f4a61bcacdc149a6681c...\n')])])]),n("h3",{attrs:{id:"_5-3-the-repeater-listens-for-transactions-and-sends-them"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-the-repeater-listens-for-transactions-and-sends-them"}},[e._v("#")]),e._v(" 5.3 The repeater listens for transactions and sends them")]),e._v(" "),n("p",[e._v("After the deposit transaction is successful, the relayer will get the event and vote on the proposal. After submitting the required number of votes, it executes a transaction to send tokens to recipient accounts in the TIE chain.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("INFO[11-19|08:15:58] Handling fungible deposit event          chain=mumbai dest=100 nonce=1\nINFO[11-19|08:15:59] Attempting to resolve message            chain=tie type=FungibleTransfer src=99 dst=100 nonce=1 rId=000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00\nINFO[11-19|08:15:59] Creating erc20 proposal                  chain=tie src=99 nonce=1\nINFO[11-19|08:15:59] Watching for finalization event          chain=tie src=99 nonce=1\nINFO[11-19|08:15:59] Submitted proposal vote                  chain=tie tx=0x67a97849951cdf0480e24a95f59adc65ae75da23d00b4ab22e917a2ad2fa940d src=99 depositNonce=1 gasPrice=1\nINFO[11-19|08:16:24] Submitted proposal execution             chain=tie tx=0x63615a775a55fcb00676a40e3c9025eeefec94d0c32ee14548891b71f8d1aad1 src=99 dst=100 nonce=1 gasPrice=5\n\n")])])]),n("h3",{attrs:{id:"_5-4-view-cross-chain-transaction-results"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-4-view-cross-chain-transaction-results"}},[e._v("#")]),e._v(" 5.4 View cross-chain transaction results")]),e._v(" "),n("p",[e._v("Once the transaction is executed successfully, you will get tokens in the polygon chain.")]),e._v(" "),n("p",[e._v("Execution example:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ cb-sol-cli erc20 balance \n  --url https://localhost:10002 \n  --privateKey [PRIVATE_KEY] \n  --erc20Address "[ERC20_CONTRACT_ADDRESS]" \n  --address "[ACCOUNT_ADDRESS]"\n\n')])])]),n("p",[e._v("Execution example：")]),e._v(" "),n("p",[e._v("TIE sends cross-chain transactions reduced by 10, polygon TEST chain receives 10")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cb-sol-cli erc20 balance \n--url http://192.168.1.132:8545 \n--privateKey 64a69c87b3d15dc1f03715493XXXXXXXXXXXXXXXXXX \n--erc20Address 0x10D95320F84e96eDd3C69347Ebcf83a6B7fae0cb  \n--address 0xAFC312512B8787848D75490377b093B1F7CF3033\n[erc20/balance] Account 0xAFC312512B8787848D75490377b093B1F7CF3033 has a balance of 990.0\n\ncb-sol-cli erc20 balance \n--url https://data-seed-prebsc-2-s1.binance.org:8545 \n--privateKey 64a69c87b3d15dc1f03715493XXXXXXXXXXXXXXXXXX \n--erc20Address 0x52Ad3084a9Ad4152E52FdEAb8644a05E9Eb1E006 \n--address 0xAFC312512B8787848D75490377b093B1F7CF3033\n[erc20/balance] Account 0xAFC312512B8787848D75490377b093B1F7CF3033 has a balance of 10.0\n\n\n\n")])])]),n("h3",{attrs:{id:"_5-5-cross-chain-transfer-and-accept-contract-function-call-graph"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-5-cross-chain-transfer-and-accept-contract-function-call-graph"}},[e._v("#")]),e._v(" 5.5 Cross-chain transfer and accept contract function call graph")]),e._v(" "),n("p",[n("img",{attrs:{src:a(424),alt:"bridge Transaction function call process"}})]),e._v(" "),n("p",[e._v("The function process of the A chain sending the cross-chain contract to the listener")]),e._v(" "),n("p",[n("img",{attrs:{src:a(425),alt:"image-20220516124304639"}})]),e._v(" "),n("p",[e._v("The function call process sent by the listener to the B chain")]),e._v(" "),n("h2",{attrs:{id:"_6-erc721-cross-chain-transfer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-erc721-cross-chain-transfer"}},[e._v("#")]),e._v(" 6. ERC721 Cross-chain transfer")]),e._v(" "),n("h3",{attrs:{id:"_6-1-generate-erc721-non-fungible-tokens"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-generate-erc721-non-fungible-tokens"}},[e._v("#")]),e._v(" 6.1 Generate erc721 non-fungible tokens")]),e._v(" "),n("p",[e._v("First generate a non-fungible token through the erc721 contract, and now there is a token with an id of 0x50 that belongs to you.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" cb-sol-cli erc721 mint \n --url https://data-seed-prebsc-2-s1.binance.org:8545 \n --privateKey 64a69c87b3d15dc1f03715493b7XXXXXXXXXXXXXXXX\n --erc721Address 0xed94f9e20416531cBcb5A68F81D746D0F8Da6eec --id 0x50 \n --gasPrice 10000000000\nWARNING: Multiple definitions for safeTransferFrom\n[erc721/mint] Minting token with id 0x50 to 0xAFC312512B8787848D75490377b093B1F7CF3033 on contract 0xed94f9e20416531cBcb5A68F81D746D0F8Da6eec!\n\n\ncb-sol-cli erc721 owner \n--url  https://data-seed-prebsc-2-s1.binance.org:8545 \n--privateKey 64a69c87b3d15dc1f0371549XXXXXXXXXXXXXXXX\n--erc721Address 0xed94f9e20416531cBcb5A68F81D746D0F8Da6eec \n--id 0x50 \n--gasPrice 10000000000\n\n\n[erc721/owner] Owner of token 0x50 is 0xAFC312512B8787848D75490377b093B1F7CF3033\n")])])]),n("h3",{attrs:{id:"_6-2-non-fungible-tokens-can-be-called-and-transferred-by-contracts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-non-fungible-tokens-can-be-called-and-transferred-by-contracts"}},[e._v("#")]),e._v(" 6.2 Non-fungible tokens can be called and transferred by contracts")]),e._v(" "),n("p",[e._v("First of all, we have to agree that the contract can call our token (because it is a non-fungible token, the approve must be accurate to the id)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cb-sol-cli erc721 approve\n--url https://data-seed-prebsc-2-s1.binance.org:8545\n--privateKey 64a69c87b3d15dc1f037XXXXXXXXXXXXXXXXXXXXX \n--erc721Address 0xed94f9e20416531cBcb5A68F81D746D0F8Da6eec \n--recipient 0xFa4Ee64074b799a9Ee7951c0fDfb2F7b0dDcB6F6 \n--id 0x50 --gasPrice 10000000000\n\n\n[erc721/approve] Approving 0xFa4Ee64074b799a9Ee7951c0fDfb2F7b0dDcB6F6 to spend token 0x50 from 0xAFC312512B8787848D75490377b093B1F7CF3033 on contract 0xed94f9e20416531cBcb5A68F81D746D0F8Da6eec!\n")])])]),n("h3",{attrs:{id:"_6-3-cross-chain-transfer-of-non-fungible-tokens"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-cross-chain-transfer-of-non-fungible-tokens"}},[e._v("#")]),e._v(" 6.3 Cross-chain transfer of non-fungible tokens")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('cb-sol-cli erc721 deposit \n--url https://data-seed-prebsc-2-s1.binance.org:8545\n--privateKey 64a69c87b3d15dc1f0XXXXXXXXXXXXXXXXXXXXXXXXXXXX \n--bridge 0x92cf2A9a8e7F8a2FF2889D33D98992ef3bc1226f\n--resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501" \n--id 0x50 \n--dest 200 \n--recipient 0xAFC312512B8787848D75490377b093B1F7CF3033 \n--gasPrice 10000000000 \n\n[erc721/deposit] Constructed deposit:\n[erc721/deposit]   Resource Id: 0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501\n[erc721/deposit]   Token Id: 0x50\n[erc721/deposit]   len(recipient): 20\n[erc721/deposit]   Recipient: 0xAFC312512B8787848D75490377b093B1F7CF3033\n[erc721/deposit]   Raw: 0x00000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000014AFC312512B8787848D75490377b093B1F7CF3033\n\n')])])]),n("h3",{attrs:{id:"_6-4-view-non-fungible-token-cross-chain-transfer-results"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-4-view-non-fungible-token-cross-chain-transfer-results"}},[e._v("#")]),e._v(" 6.4 View non-fungible token cross-chain transfer results")]),e._v(" "),n("p",[e._v("The non-fungible token with the id of ox51 has been received on the local test chain")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cb-sol-cli erc721 owner \n\n--url  http://119.28.23.120:8545 \n--privateKey 64a69c87b3d15dc1f03715493XXXXXXXXXXXXXXXXXXXXXXX\n--erc721Address 0x6c55cBf613d47f57Aef71605B005Bf098680cf02  \n--id 0x50\n\n\n[erc721/owner] Owner of token 0x50 is 0xAFC312512B8787848D75490377b093B1F7CF3033\n")])])]),n("h2",{attrs:{id:"_7-native-cross-chain-transfer-non-burning"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-native-cross-chain-transfer-non-burning"}},[e._v("#")]),e._v(" 7. Native cross-chain transfer (non-burning)")]),e._v(" "),n("h3",{attrs:{id:"_7-1-conduct-wtie-erc20-cross-chain-transfers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-conduct-wtie-erc20-cross-chain-transfers"}},[e._v("#")]),e._v(" 7.1 Conduct wtie (erc20) cross-chain transfers")]),e._v(" "),n("p",[e._v("First, send 1 coin to the local chain and cross-chain")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('cb-sol-cli erc20 deposit \n--url https://data-seed-prebsc-2-s1.binance.org:8545  \n--privateKey 64a69c87b3d15dc1f037154XXXXXXXXXXXXXXXXXXXX  \n--amount 1  \n--dest 200   \n--bridge  0xa5B27BdCb8af3d062e63C02b31Ee9E8763e9636B  \n--recipient 0xAFC312512B8787848D75490377b093B1F7CF3033  \n--resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce02" \n--gasPrice 10000000000\n\n[erc20/deposit] Constructed deposit:\n[erc20/deposit]   Resource Id: 0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce02\n[erc20/deposit]   Amount: 0x0de0b6b3a7640000\n[erc20/deposit]   len(recipient): 20\n[erc20/deposit]   Recipient: 0xAFC312512B8787848D75490377b093B1F7CF3033\n[erc20/deposit]   Raw: 0x0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000014AFC312512B8787848D75490377b093B1F7CF3033\n[erc20/deposit] Creating deposit to initiate transfer!\n')])])]),n("h3",{attrs:{id:"_7-2-check-whether-to-save-to-the-contract-pool"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-check-whether-to-save-to-the-contract-pool"}},[e._v("#")]),e._v(" 7.2 Check whether to save to the contract pool")]),e._v(" "),n("p",[e._v("Check that the tokens have been saved in the pool of the ERC20Hander contract")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cb-sol-cli erc20 balance \n--url  https://data-seed-prebsc-2-s1.binance.org:8545 \n--privateKey 64a69c87b3d15dc1f03715XXXXXXXXXXXXXXXXXXXXXXXXXX\n--erc20Address  0x10D95320F84e96eDd3C69347Ebcf83a6B7fae0cb  \n--address 0xE52482077205e0205a9B25b6f043B812A5c81f0e \n--gasPrice 10000000000    \n[erc20/balance] Account 0xE52482077205e0205a9B25b6f043B812A5c81f0e has a balance of 1.0\n")])])]),n("h3",{attrs:{id:"_7-3-view-the-result-of-wtie-spanning-to-the-local-chain"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-view-the-result-of-wtie-spanning-to-the-local-chain"}},[e._v("#")]),e._v(" 7.3 View the result of wtie spanning to the local chain")]),e._v(" "),n("p",[e._v("The local chain has received 1 weth")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("cb-sol-cli erc20 balance \n--url  http://119.28.23.120:8545\n--privateKey 64a69c87b3d15dc1f0371549XXXXXXXXXXXXXXXXXXXXXX \n--erc20Address  0x10D95320F84e96eDd3C69347Ebcf83a6B7fae0cb \n--address 0xAFC312512B8787848D75490377b093B1F7CF3033 \n\n[erc20/balance] Account 0xAFC312512B8787848D75490377b093B1F7CF3033 has a balance of 1.0\n")])])]),n("h3",{attrs:{id:"_7-4-convert-wtie-to-native-tie"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-convert-wtie-to-native-tie"}},[e._v("#")]),e._v(" 7.4 Convert wtie to native tie")]),e._v(" "),n("p",[e._v("The call conversion contract is converted from wtie to tie.")])])}),[],!1,null,null,null);t.default=r.exports}}]);