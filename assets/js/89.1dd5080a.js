(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{472:function(s,t,a){"use strict";a.r(t);var r=a(17),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"算力增加与维持部署参考方案2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算力增加与维持部署参考方案2"}},[s._v("#")]),s._v(" 算力增加与维持部署参考方案2")]),s._v(" "),a("h2",{attrs:{id:"机器配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#机器配置"}},[s._v("#")]),s._v(" 机器配置")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("资源")]),s._v(" "),a("th",[s._v("配置")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("CPU")]),s._v(" "),a("td",[s._v("AMD EPYC 7282 *1 (32c) 单路")])]),s._v(" "),a("tr",[a("td",[s._v("内存")]),s._v(" "),a("td",[s._v("32GB ECC/Reg, DDR4-3200 *8")])]),s._v(" "),a("tr",[a("td",[s._v("硬盘")]),s._v(" "),a("td",[s._v("M.2 NVME PCIe Gen3 x4 2TB SSD *2")])]),s._v(" "),a("tr",[a("td",[s._v("网卡")]),s._v(" "),a("td",[s._v("10G")])]),s._v(" "),a("tr",[a("td",[s._v("系统盘")]),s._v(" "),a("td",[s._v("500G")])]),s._v(" "),a("tr",[a("td",[s._v("显卡")]),s._v(" "),a("td",[s._v("3090 * 1")])]),s._v(" "),a("tr",[a("td",[s._v("存储")]),s._v(" "),a("td",[s._v("4TB SSD *25 RAID 5")])])])]),s._v(" "),a("p",[s._v("台数:1台")]),s._v(" "),a("h2",{attrs:{id:"任务配比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务配比"}},[s._v("#")]),s._v(" 任务配比")]),s._v(" "),a("p",[s._v("任务分为 AP,P1,P2,Commit阶段")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("运行方式")]),s._v(" "),a("th",[s._v("核数限制")]),s._v(" "),a("th",[s._v("耗时(分钟)")]),s._v(" "),a("th",[s._v("内存消耗(G)")]),s._v(" "),a("th",[s._v("效率(个/小时)")]),s._v(" "),a("th",[s._v("日产量(T)")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("P1 * 5")]),s._v(" "),a("td",[s._v("20")]),s._v(" "),a("td",[s._v("220")]),s._v(" "),a("td",[s._v("376")]),s._v(" "),a("td",[s._v("1.3636")]),s._v(" "),a("td",[s._v("1.0227")])]),s._v(" "),a("tr",[a("td",[s._v("P2,AP,Commit")]),s._v(" "),a("td",[s._v("12")]),s._v(" "),a("td",[s._v("10")]),s._v(" "),a("td",[s._v("120")]),s._v(" "),a("td",[s._v("3")]),s._v(" "),a("td",[s._v("1.125")])])])]),s._v(" "),a("p",[s._v("资源说明：")]),s._v(" "),a("ul",[a("li",[s._v("内存加到512G;")])]),s._v(" "),a("h2",{attrs:{id:"部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署"}},[s._v("#")]),s._v(" 部署")]),s._v(" "),a("ul",[a("li",[s._v("关闭超线程")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 绝大多数的主板都可以设置关闭超线程，但需要重新启动。我们通过一种方式关闭一半CPU的映射关系来做到相同的效果，这种方式不需要重启，但是每次重启都会失效。")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("cpunum")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /sys/devices/system/cpu/cpu*/topology/thread_siblings_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -s -d, -f2- "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -un"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/devices/system/cpu/cpu"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$cpunum")]),s._v("/online\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])])]),a("ul",[a("li",[a("p",[s._v("确保证明参数文件已下载,参数文件默认目录: /var/tmp/filecoin-proof-parameters")])]),s._v(" "),a("li",[a("p",[s._v("启动venus-sealer: sealer只做windowPoSt.")])])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("./venus-sealer --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mainnet init --actor"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("MINER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --node-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP_ADDRESS_OF_VENUS/tcp/3453 --messager-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP_ADDRESS_OF_VENUS_MESSAGER"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/tcp/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PORT_OF_VENUS_MESSAGER"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("IP_ADDRESS_OF_VENUS_GATEWAY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/tcp/"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PORT_OF_VENUS_GATEWAY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --auth-token "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("AUTH_TOKEN_FOR_ACCOUNT_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --no-local-storage\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件只允许sealer做wdpost")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Storage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    ParallelFetchLimit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n    AllowAddPiece "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    AllowPreCommit1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    AllowPreCommit2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    AllowCommit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    AllowUnseal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n    \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动venus-sealer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BELLMAN_CPU_UTILIZATION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FIL_PROOFS_USE_MULTICORE_SDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-sealer run "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" sealer.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置store目录，因为sealer我们不做任务，故只需设置store目录")]),s._v("\n./venus-sealer storage attach --init --store "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ABSOLUTE_PATH_OF_YOUR_PERMANENT_STORAGE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("init时加"),a("code",[s._v("--no-local-storage")]),s._v("不回创建默认的store/seal目录;")])]),s._v(" "),a("ul",[a("li",[s._v("启动venus-worker-01: 只做P1")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FIL_PROOFS_MAXIMIZE_CACHING")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BELLMAN_CPU_UTILIZATION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FIL_PROOFS_USE_MULTICORE_SDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-worker --repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ABSOLUTE_PATH_OF_WORKER_0"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" run --miner-addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/2345 --miner-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sealer token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--addpiece"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false --unseal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false --precommit2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false --commit"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false --no-local-storage  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" worker-01.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定seal路径")]),s._v("\n./venus-worker --repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ABSOLUTE_PATH_OF_WORKER_0"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v(" storage attach --init --seal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ABSOLUTE_LOCAL_PATH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("FIL_PROOFS_MAXIMIZE_CACHING=1 表示做P1的时候把部分临时文件缓存到内存")])]),s._v(" "),a("ul",[a("li",[s._v("启动venus-worker-02: 做AP,P2,Commit等任务")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BELLMAN_CPU_UTILIZATION")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FIL_PROOFS_USE_MULTICORE_SDR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TMP_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("OTHER_PATH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nohup")]),s._v(" ./venus-worker --repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ABSOLUTE_PATH_OF_WORKER_0"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" run --miner-addr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/ip4/127.0.0.1/tcp/2345 --miner-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sealer token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--precommit1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false --no-local-storage  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" worker-02.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定seal路径")]),s._v("\n./venus-worker --repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ABSOLUTE_PATH_OF_WORKER_0"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),s._v(" storage attach --init --seal "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ABSOLUTE_LOCAL_PATH"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("设置worker01和worker02的seal路径相同，可以避免不必要的拷贝;")])]),s._v(" "),a("blockquote",[a("p",[s._v("P2没有设置用GPU;")])]),s._v(" "),a("blockquote",[a("p",[s._v("TMP_DIR目的是为了避免和venus-sealer竞争bellman.gpu.lock,C2阶段会自动搜索用GPU,如果和wdPost竞争gpu锁会报错")])]),s._v(" "),a("ul",[a("li",[s._v("设置发送消息的wallet")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Addresses"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  PreCommitControl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# P2")]),s._v("\n  CommitControl "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# C2")]),s._v("\n  DisableOwnerFallback "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁用owner发消息")]),s._v("\n  DisableWorkerFallback "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("根据上面字段的含义自己配置想要的结果")])]),s._v(" "),a("ul",[a("li",[s._v("限核: Cgrep限核")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置进程管理目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /sys/fs/cgroup/cpuset/worker\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置能够使用的核数范围")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("-20 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/fs/cgroup/cpuset/worker/cpuset.cpus\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置使用内存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" cpuset.mems\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入进程的PID")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /sys/fs/cgroup/cpuset/worker/cgroup.procs\n\n")])])]),a("blockquote",[a("p",[s._v("PID: 进程ID号;")])]),s._v(" "),a("blockquote",[a("p",[s._v("每次worker重启后PID会变化,需要更新文件.")])]),s._v(" "),a("blockquote",[a("p",[s._v("/sys/fs/cgroup/cpuset是系统目录,worker是自己创建的.")])])])}),[],!1,null,null,null);t.default=e.exports}}]);