Shell scripts
=============

This are to be run on the host:

`tproxy.sh` - set up device to use a transparent proxy.

E.g:
``` bash
PROXY_IP=192.168.0.18 HTTP_PROXY_PORT=8088 HTTPS_PROXY_PORT=8443 ./tproxy.sh on
```

Sets up an iptables rule which forwards http traffic to a transparent
proxy on 192.168.0.14:8088 and https traffic to a transparent proxy on
192.168.0.14:8443.

``` bash
./tproxy.sh off
```

will disable the above.

`cert_apps.sh` - configure a profile to enable the debugging of certified
apps. Taken from the documentation [here](https://developer.mozilla.org/en-US/Firefox_OS/Using_the_App_Manager#Debugging_Certified_Apps).
