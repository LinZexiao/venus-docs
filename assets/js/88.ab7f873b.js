(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{463:function(e,t,a){"use strict";a.r(t);var n=a(17),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"nv17-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nv17-upgrade"}},[e._v("#")]),e._v(" nv17 upgrade")]),e._v(" "),a("p",[e._v("If you are upgrading "),a("code",[e._v("venus-wallet")]),e._v(" or "),a("code",[e._v("venus-gateway")]),e._v(" from "),a("code",[e._v("v1.6.x")]),e._v(" to "),a("code",[e._v("v1.8.0")]),e._v(", please read "),a("a",{attrs:{href:"https://github.com/filecoin-project/venus/discussions/5265",target:"_blank",rel:"noopener noreferrer"}},[e._v("Venus component v1.7.0 usage notes"),a("OutboundLink")],1),e._v(" first and pay attention to the upgrade order of "),a("code",[e._v("venus-gateway")]),e._v(" and "),a("code",[e._v("venus-wallet")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"timeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeline"}},[e._v("#")]),e._v(" timeline")]),e._v(" "),a("p",[e._v("Upgrade time (UTC): 2022-11-30T14:00:00Z\nUpgrade time (Beijing): 2022-11-30 22:00:00")]),e._v(" "),a("h3",{attrs:{id:"versions-of-each-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versions-of-each-component"}},[e._v("#")]),e._v(" Versions of each component")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/filecoin-project/venus/discussions/5386#discussioncomment-3893446",target:"_blank",rel:"noopener noreferrer"}},[e._v("calibrationnet"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/filecoin-project/venus/discussions/5386#discussioncomment-3893449",target:"_blank",rel:"noopener noreferrer"}},[e._v("mainnet"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"venus-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-auth"}},[e._v("#")]),e._v(" venus-auth")]),e._v(" "),a("p",[e._v("Affected function:")]),e._v(" "),a("p",[e._v("Dependency: none")]),e._v(" "),a("p",[e._v("Precautions:")]),e._v(" "),a("ol",[a("li",[e._v("Add field "),a("code",[e._v("open_mining")]),e._v(" to "),a("code",[e._v("miners")]),e._v(" table, 0 means no block, 1 means block, default is 1")])]),e._v(" "),a("h3",{attrs:{id:"venus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus"}},[e._v("#")]),e._v(" venus")]),e._v(" "),a("p",[e._v("Affected function: nv17 network support")]),e._v(" "),a("p",[e._v("Dependency: None")]),e._v(" "),a("p",[e._v("Precautions:")]),e._v(" "),a("p",[e._v("Compilation: first "),a("code",[e._v("make dist-clean")]),e._v(" and then "),a("code",[e._v("make")]),e._v(", this can prevent problems caused by failing to upgrade "),a("code",[e._v("filecoin-ffi")]),e._v(".")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Check whether the vk file is complete after upgrading")])]),e._v(" "),a("li",[a("p",[e._v("Check the configuration file after the upgrade, whether the upgrade height is set correctly, the configuration file is in "),a("code",[e._v("~/.venus/config.json")]),e._v(" by default:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('#cali\n"upgradeSkyrHeight": 16800\n#mainnet\n"upgradeSkyrHeight": 2383680\n')])])])]),e._v(" "),a("li",[a("p",[e._v("After the upgrade, you need to check whether height is synchronized correctly")])]),e._v(" "),a("li",[a("p",[e._v("Check the mainnet "),a("code",[e._v("v9 actors code")]),e._v(" to make sure it is the same as the output below")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("./venus state actor-cids --network-version 17\n\n# order may vary\nNetwork Version: 17\nActor Version: 9\nActor CIDs\nreward bafk2bzacebezgbbmcm2gbcqwisus5fjvpj7hhmu5ubd37phuku3hmkfulxm2o\nsystem bafk2bzaceagvlo2jtahj7dloshrmwfulrd6e2izqev32qm46eumf754weec6c\n_manifest bafy2bzaceb6j6666h36xnhksu3ww4kxb6e25niayfgkdnifaqi6m6ooc66i6i\nstoragemarket bafk2bzacec3j7p6gklk64stax5px3xxd7hdtejaepnd4nw7s2adihde6emkcu\nmultisig bafk2bzacec4va3nmugyqjqrs3lqyr2ij67jhjia5frvx7omnh2isha6abxzya\npaymentchannel bafk2bzacebhdvjbjcgupklddfavzef4e4gnkt3xk3rbmgfmk7xhecszhfxeds\nstoragepower bafk2bzacedsetphfajgne4qy3vdrpyd6ekcmtfs2zkjut4r34cvnuoqemdrtw\nverifiedregistry bafk2bzacecf3yodlyudzukumehbuabgqljyhjt5ifiv4vetcfohnvsxzynwga\ndatacap bafk2bzacebb6uy2ys7tapekmtj7apnjg7oyj4ia5t7tlkvbmwtxwv74lb2pug\naccount bafk2bzacect2p7urje3pylrrrjy3tngn6yaih4gtzauuatf2jllk3ksgfiw2y\ncron bafk2bzacebcec3lffmos3nawm5cvwehssxeqwxixoyyfvejy7viszzsxzyu26\ninit bafk2bzacebtdq4zyuxk2fzbdkva6kc4mx75mkbfmldplfntayhbl5wkqou33i\nstorageminer bafk2bzacedyux5hlrildwutvvjdcsvjtwsoc5xnqdjl73ouiukgklekeuyfl4\n")])])])]),e._v(" "),a("li",[a("p",[e._v("If you are not troubleshooting anything, it is "),a("strong",[e._v("NOT")]),e._v(" recommended to set rust log level to "),a("code",[e._v("trace")]),e._v(" as more irrelavant logs will be printed")])]),e._v(" "),a("li",[a("p",[e._v("After the upgrade, you can use the command "),a("code",[e._v("./venus state get-actor t01000")]),e._v(" to confirm whether the upgrade is successful")])])]),e._v(" "),a("h3",{attrs:{id:"venus-messager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-messager"}},[e._v("#")]),e._v(" venus-messager")]),e._v(" "),a("p",[e._v("Affected function:")]),e._v(" "),a("ol",[a("li",[e._v("Increase the control of basefee, you can set the basefee separately for an address, when the basefee on the chain is higher than the basefee limit, the message will not be pushed out")])]),e._v(" "),a("p",[e._v("Dependency upgrade components:")]),e._v(" "),a("p",[e._v("Precautions:")]),e._v(" "),a("ol",[a("li",[e._v("After the upgrade, observe whether the message can be on-chained normally")])]),e._v(" "),a("h3",{attrs:{id:"venus-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner"}},[e._v("#")]),e._v(" venus-miner")]),e._v(" "),a("p",[e._v("Affected function:")]),e._v(" "),a("p",[e._v("Dependency upgrade components:")]),e._v(" "),a("p",[e._v("Precautions:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("If you are upgrading from "),a("code",[e._v("1.7.*")]),e._v(" to "),a("code",[e._v("v1.8.0")]),e._v(", it will automatically migrate configuration files. Whereas if you are upgrading from "),a("code",[e._v("1.6.*")]),e._v(" to "),a("code",[e._v("v1.8.0")]),e._v(", it is required to have a reinitialization of "),a("code",[e._v("repo")]),e._v(" (init). Please checkout this "),a("a",{attrs:{href:"https://github.com/filecoin-project/venus-miner/blob/master/docs/zh/CHANGELOG.md#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9-2",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide"),a("OutboundLink")],1),e._v(" to learn more.")])]),e._v(" "),a("li",[a("p",[e._v("Check if blocks can be produced normally after the upgrade.")])])]),e._v(" "),a("h3",{attrs:{id:"venus-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway"}},[e._v("#")]),e._v(" venus-gateway")]),e._v(" "),a("p",[e._v("Affected function:")]),e._v(" "),a("p",[e._v("Precautions:")]),e._v(" "),a("p",[e._v("Compile: first "),a("code",[e._v("make dist-clean")]),e._v(" and then "),a("code",[e._v("make")])]),e._v(" "),a("ol",[a("li",[e._v("Check wallet after upgrade: "),a("code",[e._v("./venus-gateway wallet list")])]),e._v(" "),a("li",[e._v("Check miners after upgrade: "),a("code",[e._v("./venus-gateway miner list")])])]),e._v(" "),a("h3",{attrs:{id:"venus-market"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-market"}},[e._v("#")]),e._v(" venus-market")]),e._v(" "),a("p",[e._v("Affected function:")]),e._v(" "),a("p",[e._v("Precautions:")]),e._v(" "),a("p",[e._v("Compile: first "),a("code",[e._v("make dist-clean")]),e._v(" and then "),a("code",[e._v("make")])]),e._v(" "),a("h3",{attrs:{id:"venus-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet"}},[e._v("#")]),e._v(" venus-wallet")]),e._v(" "),a("p",[e._v("Affect function:")]),e._v(" "),a("p",[e._v("Precautions:")]),e._v(" "),a("ol",[a("li",[e._v("Make sure to unlock the wallet after startup")]),e._v(" "),a("li",[e._v("Check whether the wallet is registered on the gateway")])])])}),[],!1,null,null,null);t.default=r.exports}}]);