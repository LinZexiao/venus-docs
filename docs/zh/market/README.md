## venus-market 是什么?

`venus-market` 是 `Venus` 系统的存储市场及检索市场解决方案，包括用于服务端的 `venus-market` 组件和用于客户端的 `market-client` 组件。目前迭代到 `V2` 版本。 

## 功能特性

### 部署方式

`venus-market v2`最大的特点是它即可作为链服务的组件进行部署，也可以单独部署。作为链服务部署时，可以为多个`SP cluster` 提供市场服务，如：接单、跟踪 `deals` 状态及管理 `pieces`等。这样 `SP` 本地无需部署 `market` 节点，有效降低了集群的运维成本。 

### 多传输协议支持

订单`piece`数据的传输将不仅支持默认的`graphsync`，还支持OSS，HTTP等其他更有韧性，可断点续传的数据传输协议。保证接单过程中数据传输的稳定性。

### 轻量级客户端

`venus-market v2`带有一个轻量级客户端。存储客户无需本地维护一个与主网保持同步的节点，只需接入一个链服务，便可轻松发出存储订单。

### 兼容其他实现

`venus-market v2`实现的所有订单流程都将与`Filecoin`其他实现的订单市场进行兼容。保证`Venus`存储提供者能够接收来自任何符合协议要求客户端的订单。

### 开发者友好

更多`venus-market v2`的API以及SDK将陆续开放给开发者。`venus-market v2`将成为一个开放平台，让开发者在上面实现他们需要的定制化需求。