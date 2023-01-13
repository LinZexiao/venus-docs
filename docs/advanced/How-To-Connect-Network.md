# Connect to different network

In venus, it is easy to decide whether to connect to different networks by setting the startup parameters.


## Mainnet

```sh
./venus daemon #connect to mainnet by default
```

## Calibration Network

parameters must be configured to connect to the calibration network.

```sh
./venus daemon --network calibrationnet
```

## 2k Local Network

in addition to the corresponding network parameters, a network boot file (.car) is required to connect the 2k network.

```sh
./venus daemon --network 2k --genesisfile  *.car
```
