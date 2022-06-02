(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{497:function(_,i,v){"use strict";v.r(i);var n=v(65),l=Object(n.a)({},(function(){var _=this,i=_.$createElement,v=_._self._c||i;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"_1-tie-命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-tie-命令"}},[_._v("#")]),_._v(" 1. TIE 命令")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("secrets\n用于与机密功能交互的顶级机密管理器命令。")])]),_._v(" "),v("li",[v("p",[_._v("genesis\n使用传入的参数生成 genesis.json 文件。")])]),_._v(" "),v("li",[v("p",[_._v("server\n通过将所有模块一起引导来启动 Tie 客户端的默认命令。")])]),_._v(" "),v("li",[v("p",[_._v("status\n返回 Tie 客户端的状态。")])]),_._v(" "),v("li",[v("p",[_._v("txpool\n用于与事务池交互的顶级命令。")])]),_._v(" "),v("li",[v("p",[_._v("peers\n用于与网络对等方交互的顶级命令。")])]),_._v(" "),v("li",[v("p",[_._v("monitor\n开始记录区块链上的块添加/删除事件。")])]),_._v(" "),v("li",[v("p",[_._v("version\n返回当前版本。")])])]),_._v(" "),v("h2",{attrs:{id:"_2-创世命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-创世命令"}},[_._v("#")]),_._v(" 2. 创世命令")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("--consensus\n设置共识协议。 默认值：pvbft。")])]),_._v(" "),v("li",[v("p",[_._v("--bootnode\n用于 p2p 发现引导的多地址 URL。 该标志可以多次使用。")])]),_._v(" "),v("li",[v("p",[_._v("--ibft-validator\n设置作为 IBFT 验证器传入的地址。 如果省略 ibft-validators-prefix-path 则需要存在。")])]),_._v(" "),v("li",[v("p",[_._v("--epoch-size\n设置链的纪元大小。 默认 129600")])]),_._v(" "),v("li",[v("p",[_._v("--pos\n设置指示客户端应使用权益证明 IBFT 的标志。")])]),_._v(" "),v("li",[v("p",[_._v("--dir\n设置 Polygon Edge 创世数据的目录。 默认值：./genesis.json。")])]),_._v(" "),v("li",[v("p",[_._v("--name\n设置链的名称。 默认值：领带。")])]),_._v(" "),v("li",[v("p",[_._v("--ibft-validators-prefix-path\n验证器文件夹目录的前缀路径。 如果省略 ibft-validator，则需要存在。")])]),_._v(" "),v("li",[v("p",[_._v("--block-gas-limit\n设置区块气体限制")])]),_._v(" "),v("li",[v("p",[_._v("--premine\n设置预挖账户和余额。 默认预挖余额：0x4546c07635c1fc494600000")])]),_._v(" "),v("li",[v("p",[_._v("--chainid\n设置链的 ID。 默认值：100")])])]),_._v(" "),v("h2",{attrs:{id:"_3-服务器命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-服务器命令"}},[_._v("#")]),_._v(" 3. 服务器命令")]),_._v(" "),v("ul",[v("li",[v("p",[_._v("--log-path LOG_PATH\n设置控制台输出的日志路径。默认值：logs/tiechain.log。")])]),_._v(" "),v("li",[v("p",[_._v("---grpc GRPC_ADDRESS\n设置 gRPC 服务的地址和端口（地址：端口）。默认值：:7749。")])]),_._v(" "),v("li",[v("p",[_._v("--libp2p LIBP2P_ADDRESS\n设置 libp2p 服务的地址和端口（地址：端口）。默认值：6636。")])]),_._v(" "),v("li",[v("p",[_._v("--jsonrpc JSONRPC_ADDRESS\n设置 JSON-RPC 服务的地址和端口（地址：端口）。默认值：8545。")])]),_._v(" "),v("li",[v("p",[_._v("--no-discover NO_DISCOVER\n防止客户端发现其他对等方。默认值：假。")])]),_._v(" "),v("li",[v("p",[_._v("--price-limit PRICE_LIMIT\n设置最低gas价格限制以强制接受进入池。默认值：0。")])]),_._v(" "),v("li",[v("p",[_._v("--prometheus PROMETHEUS_ADDRESS\n设置 prometheus 检测服务的地址和端口（地址：端口）。")])]),_._v(" "),v("li",[v("p",[_._v("--data-dir DATA_DIRECTORY\n指定用于存储 TIE 客户端数据的数据目录。默认值：./test-chain。")])]),_._v(" "),v("li",[v("p",[_._v("--log-level LOG_LEVEL\n设置控制台输出的日志级别。默认值：信息。")])]),_._v(" "),v("li",[v("p",[_._v("--seal SHOULD_SEAL\n设置指示客户端应该密封块的标志。默认值：假。")])]),_._v(" "),v("li",[v("p",[_._v("--config CLI_CONFIG_PATH\n指定 CLI 配置的路径。支持 .json 和 .hcl。")])]),_._v(" "),v("li",[v("p",[_._v("--chain GENESIS_FILE\n指定用于启动链的创世文件。默认值：测试。")])]),_._v(" "),v("li",[v("p",[_._v("--secrets-config SECRETS_CONFIG\n设置 SecretsManager 配置文件的路径。用于 Hashicorp Vault。如果省略，则使用本地 FS 机密管理器。")])]),_._v(" "),v("li",[v("p",[_._v("--block-time BLOCK_TIME\n以秒为单位设置阻塞时间。默认值：2 秒。")])]),_._v(" "),v("li",[v("p",[_._v("--block-gas-target BLOCK_GAS_TARGET\n设置链的目标块气体限制。如果省略，则使用父块的值。")])]),_._v(" "),v("li",[v("p",[_._v("--max-peers PEER_COUNT\n设置客户端允许的最大对等点数。默认值：21。")])]),_._v(" "),v("li",[v("p",[_._v("--max-slots MAX_SLOTS\n设置池中的最大插槽。默认值：4096。")])])])])}),[],!1,null,null,null);i.default=l.exports}}]);