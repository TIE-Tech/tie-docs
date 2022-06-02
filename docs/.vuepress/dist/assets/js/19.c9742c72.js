(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{475:function(a,t,e){"use strict";e.r(t);var s=e(65),i=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-installation"}},[a._v("#")]),a._v(" 1. Installation")]),a._v(" "),e("h3",{attrs:{id:"_1-1-install-go"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-install-go"}},[a._v("#")]),a._v(" 1.1 Install Go")]),a._v(" "),e("h4",{attrs:{id:"_1-1-1-download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-download"}},[a._v("#")]),a._v(" 1.1.1 Download")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("wget https://go.dev/dl/go1.17.10.linux-amd64.tar.gz\nrm -rf /usr/local/go\ntar zxvf go1.17.10.linux-amd64.tar.gz -C /usr/local/go\n")])])]),e("h4",{attrs:{id:"_1-1-2-environment-variable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-environment-variable"}},[a._v("#")]),a._v(" 1.1.2 Environment variable")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vim /etc/profile\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("export GOROOT=/usr/local/go\nexport GOPATH=/home/golang\nexport GOBIN=/home/golang/bin\nexport PATH=$PATH:$GOROOT/bin:$GOBIN\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("source /etc/profile\n")])])]),e("h3",{attrs:{id:"_1-2-generate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-generate"}},[a._v("#")]),a._v(" 1.2 Generate")]),a._v(" "),e("h4",{attrs:{id:"_1-2-1-building-tie-from-source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-building-tie-from-source"}},[a._v("#")]),a._v(" 1.2.1 Building "),e("code",[a._v("tie")]),a._v(" from source")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git clone git@github.com:TIE-Tech/tie-core.git\ncd main-chain/\ngo build -o tie\nmv tie /usr/local/bin\n")])])]),e("h4",{attrs:{id:"_1-2-2-initialize-data-folders-and-generate-validator-keys"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-initialize-data-folders-and-generate-validator-keys"}},[a._v("#")]),a._v(" 1.2.2 Initialize data folders and generate validator keys")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tie secrets init --data-dir chain-data-1\ntie secrets init --data-dir chain-data-2\ntie secrets init --data-dir chain-data-3\ntie secrets init --data-dir chain-data-4\n")])])]),e("h4",{attrs:{id:"_1-2-3-generate-genesis-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-generate-genesis-json"}},[a._v("#")]),a._v(" 1.2.3 Generate genesis.json")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("tie genesis --consensus ibft --pos --chainid 99 \\\n--ibft-validator 0xEC5e0Eb4eceDbB59022db98632b91243EeA742f9 \\\n--ibft-validator 0xaECf74F9Aa6d1d79a2fa540af968Db788Ecb19e0 \\\n--ibft-validator 0x9EbEdCe6eb4B6fC7f18521E135324883ba093b17 \\\n--ibft-validator 0x104Af911E6CBb54533C78954aea505b2Db4d4b82 \\\n--bootnode /ip4/192.168.10.1/tcp/5525/p2p/16Uiu2HAmLGnKBqBSh8ZabRRJuyXHcQ195T827MmhzxPFnjyBipJg \\\n--bootnode /ip4/192.168.10.2/tcp/5525/p2p/16Uiu2HAmVh13FGoGyYb5csECTEqCEwvdtqQrPeskqAPnfcmoT2s6 \\\n--bootnode /ip4/192.168.10.3/tcp/5525/p2p/16Uiu2HAmHexGQUcFspid6bkEAdFvxcj4DCc5xG9XsX2R58fXx132 \\\n--bootnode /ip4/192.168.10.4/tcp/5525/p2p/16Uiu2HAkvaa9wAU1Xz76TkWe7x8QH53UmnVMiVfsabKHfoKJXnGh \\\n--premine 0x5573143eBA235545BE5548E1107dD7B92713EF18:100000000000000000000000\n")])])]),e("h3",{attrs:{id:"_1-3-deploy-with-docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-deploy-with-docker"}},[a._v("#")]),a._v(" 1.3 Deploy with docker")]),a._v(" "),e("h4",{attrs:{id:"_1-3-1-building-tie-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-building-tie-images"}},[a._v("#")]),a._v(" 1.3.1 Building "),e("code",[a._v("tie")]),a._v(" images")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git clone git@github.com:TIE-Tech/tie-core.git\ncd main-chain/\ndocker build . -t tie:v1.0\n")])])]),e("h4",{attrs:{id:"_1-3-2-building-node-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-building-node-images"}},[a._v("#")]),a._v(" 1.3.2 Building "),e("code",[a._v("node")]),a._v(" images")]),a._v(" "),e("ul",[e("li",[a._v("start.sh")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir images && cd images\nvim bin/start.sh\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  #!/bin/bash\n  tie server --data-dir ./chain-data --chain genesis.json --network=host --seal\n")])])]),e("ul",[e("li",[a._v("Dockerfile")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("FROM tie:v1.0\n\nRUN apk update && apk add bash curl\n\nADD bin /root/bin\n\nRUN chmod a+x /root/bin/*\n\nENTRYPOINT /root/bin/start.sh\n")])])]),e("ul",[e("li",[a._v("building")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker build . -t node:v1.0\n")])])]),e("ul",[e("li",[a._v("mount directory")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkdir -p project/test-chain project/logs\n")])])]),e("h4",{attrs:{id:"run-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#run-server"}},[a._v("#")]),a._v(" Run Server")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run --name chain -v project/:/data --netword=host -d node1:v1.0\ndocker logs -f chain\n")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);