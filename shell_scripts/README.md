Shell scripts
=============

This are to be run on the host:

`tproxy.sh` - set up device to use a transparent proxy.

E.g:
``` bash
PORTS=80 PROXY_IP=192.168.0.14 PROXY_PORT=8080 ./tproxy.sh
```

Sets up an iptables rule which forwards http traffic to a transparent
proxy on 192.168.0.14:8080. Setting `PORTS` to `80,443` would do the same
thing for http and https
