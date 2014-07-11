#!/bin/bash

CMD="adb shell iptables -t nat -A OUTPUT -p tcp --dport $PORTS -j DNAT --to-destination $PROXY_IP:$PROXY_PORT"

echo $CMD

$CMD
