(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{492:function(e,t,a){"use strict";a.r(t);var s=a(17),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"导入已存在的扇区数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入已存在的扇区数据"}},[e._v("#")]),e._v(" 导入已存在的扇区数据")]),e._v(" "),a("p",[e._v("当我们希望将已经通过其他算力组件方案完成的扇区存储目录迁移到 "),a("code",[e._v("venus-cluster")]),e._v(" 中时，只需要使用 "),a("code",[e._v("venus-sector-manager")]),e._v(" 导入，并更新相应的配置文件即可。")]),e._v(" "),a("h2",{attrs:{id:"导入及校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入及校验"}},[e._v("#")]),e._v(" 导入及校验")]),e._v(" "),a("p",[a("strong",[e._v("注意")]),e._v(":导入和校验都需要在未启动 "),a("code",[e._v("venus-sector-manager daemon")]),e._v(" 的情况下进行。")]),e._v(" "),a("h3",{attrs:{id:"导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[e._v("#")]),e._v(" 导入")]),e._v(" "),a("p",[a("code",[e._v("venus-sector-manager")]),e._v(" 提供了名为 "),a("code",[e._v("storage attach")]),e._v(" 的导入工具，其使用方式如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("venus-sector-manager util storage attach --verbose --name={storage name} <path>\n")])])]),a("p",[e._v("其中：")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("name")]),e._v(" 是一个选填参数;")]),e._v(" "),a("li",[a("code",[e._v("<path>")]),e._v(" 是存储路径，在导入过程中会被转换成绝对路径。")])]),e._v(" "),a("p",[a("code",[e._v("name")]),e._v(" 和 "),a("code",[e._v("<path>")]),e._v(" 的含义可以参考 "),a("a",{attrs:{href:"https://github.com/ipfs-force-community/venus-cluster/blob/main/docs/zh/04.venus-sector-manager%E7%9A%84%E9%85%8D%E7%BD%AE%E8%A7%A3%E6%9E%90.md#commonpersiststores",target:"_blank",rel:"noopener noreferrer"}},[e._v("Common.PersistStores"),a("OutboundLink")],1),e._v("。")]),e._v(" "),a("p",[e._v("举例来说，我们使用")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("venus-sector-manager util storage attach --verbose --name=a -v ./mock-tmp/remote\n")])])]),a("p",[e._v("通常会产生类似下面的日志：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('2022-03-11T16:03:52.492+0800    DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "mainnet"}\n2022-03-11T16:03:52.493+0800    INFO    cmd     internal/util_storage.go:104    use match pattern "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/remote/sealed/*"     {"name": "a", "strict": false, "read-only": false}\n2022-03-11T16:03:52.493+0800    INFO    cmd     internal/util_storage.go:121    path "s-t010000-16" matched=true        {"name": "a", "strict": false, "read-only": false}\n2022-03-11T16:03:52.494+0800    INFO    cmd     internal/util_storage.go:121    path "s-t010000-17" matched=true        {"name": "a", "strict": false, "read-only": false}\n2022-03-11T16:03:52.494+0800    INFO    cmd     internal/util_storage.go:121    path "s-t010000-18" matched=true        {"name": "a", "strict": false, "read-only": false}\n2022-03-11T16:03:52.508+0800    INFO    cmd     internal/util_storage.go:148    sector indexer updated for s-t010000-16 {"name": "a", "strict": false, "read-only": false}\n2022-03-11T16:03:52.509+0800    INFO    cmd     internal/util_storage.go:148    sector indexer updated for s-t010000-17 {"name": "a", "strict": false, "read-only": false}\n2022-03-11T16:03:52.509+0800    INFO    cmd     internal/util_storage.go:148    sector indexer updated for s-t010000-18 {"name": "a", "strict": false, "read-only": false}\n2022-03-11T16:03:52.509+0800    INFO    cmd     internal/util_storage.go:152    3 sectors out of 3 files have been updated      {"name": "a", "strict": false, "read-only": false}\n2022-03-11T16:03:52.509+0800    WARN    cmd     internal/util_storage.go:153    add the section below into the config file:     {"name": "a", "strict": false, "read-only": false}\n\n[[Common.PersistStores]]\nName = "a"\nPath = "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/remote"\nStrict = false\nReadOnly = false\n')])])]),a("p",[e._v("这时目录导入就已经完成了，所有扇区的位置信息也被记录了下来。\n我们将最后输出的范例配置复制并填写到 "),a("code",[e._v("venus-sector-manager")]),e._v(" 的配置文件中即可完成导入工作。")]),e._v(" "),a("h4",{attrs:{id:"重新导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重新导入"}},[e._v("#")]),e._v(" 重新导入")]),e._v(" "),a("p",[e._v("如果我们发现导入时填写的信息有误，例如 "),a("code",[e._v("--name")]),e._v(" 出现了拼写错误，那么我们只需要重新使用正确的信息完成一次导入流程即可。\n扇区的位置信息会被覆盖更新。")]),e._v(" "),a("h4",{attrs:{id:"sealed-file-与-cache-dir-分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sealed-file-与-cache-dir-分离"}},[e._v("#")]),e._v(" sealed_file 与 cache_dir 分离")]),e._v(" "),a("p",[e._v("一些算力组件允许 "),a("code",[e._v("sealed_file")]),e._v(" 与 "),a("code",[e._v("cache_dir")]),e._v(" 位于不同的存储实例上，这种情况下，常规导入可能会无法正常定位扇区文件。\n这种情况下，可以通过增加命令行参数 "),a("code",[e._v("--allow-splitted")]),e._v(" 来启用分隔扫描模式，在这种模式下，会单独扫描 "),a("code",[e._v("sealed")]),e._v(" 文件夹和 "),a("code",[e._v("cache")]),e._v(" 文件夹中符合扇区命名规则的路径，并分别记录定位信息。")]),e._v(" "),a("p",[e._v("此时，日志会类似：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('2022-04-19T19:11:55.137+0800    DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "mainnet"}\n2022-04-19T19:11:55.154+0800    INFO    cmd     internal/util_storage.go:120    scan for sectors(upgrade=false) {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n2022-04-19T19:11:55.154+0800    INFO    cmd     internal/util_storage.go:211    0 sectors out of 0 files have been found        {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n2022-04-19T19:11:55.154+0800    INFO    cmd     internal/util_storage.go:145    scan for splitted cache dirs(upgrade=false)     {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n2022-04-19T19:11:55.155+0800    INFO    cmd     internal/util_storage.go:211    3 sectors out of 3 files have been found        {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n2022-04-19T19:11:55.156+0800    INFO    cmd     internal/util_storage.go:120    scan for sectors(upgrade=true)  {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n2022-04-19T19:11:55.156+0800    INFO    cmd     internal/util_storage.go:211    0 sectors out of 0 files have been found        {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n2022-04-19T19:11:55.156+0800    INFO    cmd     internal/util_storage.go:145    scan for splitted cache dirs(upgrade=true)      {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n2022-04-19T19:11:55.156+0800    INFO    cmd     internal/util_storage.go:211    0 sectors out of 0 files have been found        {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n2022-04-19T19:11:55.156+0800    WARN    cmd     internal/util_storage.go:166    add the section below into the config file:     {"name": "p3", "strict": false, "read-only": false, "splitted": true}\n\n[[Common.PersistStores]]\nName = "p3"\nPath = "/home/dtynn/proj/github.com/ipfs-force-community/venus-cluster/mock-tmp/pstore3"\nStrict = false\nReadOnly = false\n')])])]),a("p",[e._v("注意，使用这种模式需要确认：")]),e._v(" "),a("ul",[a("li",[e._v("目标目录中不存在由于存储异常导致的重复存储的文件")]),e._v(" "),a("li",[e._v("仅有 "),a("code",[e._v("cache_dir")]),e._v(" 而无与之对应的 "),a("code",[e._v("sealed_file")]),e._v(" 的扇区仍然无法正常定位")])]),e._v(" "),a("h3",{attrs:{id:"校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验"}},[e._v("#")]),e._v(" 校验")]),e._v(" "),a("p",[a("code",[e._v("venus-sector-manager")]),e._v(" 提供的 "),a("code",[e._v("storage find")]),e._v(" 工具可以用来检查扇区导入的结果是否正确，其使用方式如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("venus-sector-manager util storage find <miner actor id> <sector number>\n")])])]),a("p",[e._v("继续以上面示范的导入工作为例，我们希望检验扇区 "),a("code",[e._v("s-t010000-17")]),e._v(" 是否已被正确记录，可以使用：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("venus-sector-manager util storage find 10000 17\n")])])]),a("p",[e._v("通常会产生类似下面的日志：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('2022-04-19T19:13:15.235+0800    DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "mainnet"}\n2022-04-19T19:13:15.249+0800    INFO    cmd     internal/util_storage.go:279    sector s-t010000-17 located, sealed file in "a", cache dir in "a"\n2022-04-19T19:13:15.249+0800    INFO    cmd     internal/util_storage.go:285    store instance exists   {"instance": "a"}\n2022-04-19T19:13:15.249+0800    INFO    cmd     internal/util_storage.go:285    store instance exists   {"instance": "a"}\n')])])]),a("p",[e._v("这就表示我们的导入和配置工作都已经完成了。")]),e._v(" "),a("h4",{attrs:{id:"校验异常-扇区信息未记录成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验异常-扇区信息未记录成功"}},[e._v("#")]),e._v(" 校验异常：扇区信息未记录成功")]),e._v(" "),a("p",[e._v("如果校验过程中出现类似")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("2022-03-11T16:45:59.120+0800    WARN    cmd     internal/util_storage.go:214    s-t010000-17 not found\n")])])]),a("p",[e._v("这样的日志，说明指定的扇区未导入成功，我们需要重新检查导入过程。")]),e._v(" "),a("h4",{attrs:{id:"校验异常-存储配置未更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验异常-存储配置未更新"}},[e._v("#")]),e._v(" 校验异常：存储配置未更新")]),e._v(" "),a("p",[e._v("如果校验过程中出现类似")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('2022-03-11T16:22:34.044+0800    DEBUG   policy  policy/const.go:18      NETWORK SETUP   {"name": "mainnet"}\n2022-03-11T16:22:34.059+0800    INFO    cmd     internal/util_storage.go:218    found s-t010000-17 in "a"\n2022-03-11T16:22:34.059+0800    WARN    cmd     internal/util_storage.go:227    store instance not found, check your config file\n')])])]),a("p",[e._v("这样的日志，说明 "),a("code",[e._v("venus-sector-manager")]),e._v(" 的配置文件没有更新成功，我们需要按之前所说的方法去更新配置。")])])}),[],!1,null,null,null);t.default=r.exports}}]);