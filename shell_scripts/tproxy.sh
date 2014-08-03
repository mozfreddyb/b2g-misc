#!/bin/bash

#PROXY_IP=192.168.0.14
#HTTP_PROXY_PORT=8088
#HTTPS_PROXY_PORT=8443

case "$1" in
  on)
    if [[ -z "$PROXY_IP" ]]||[[ -z "$PROXY_IP" ]]||[[ -z "$PROXY_IP" ]]; then
      echo "Please set the required variables; e.g:"
      echo "PROXY_IP=192.168.0.18 HTTP_PROXY_PORT=8088 HTTPS_PROXY_PORT=8443 ./tproxy.sh on"
      echo "(or edit the script to include them)"
      exit 1
    fi
    CMD="adb shell iptables -t nat -A OUTPUT -p tcp --dport 80 -j DNAT --to-destination $PROXY_IP:$HTTP_PROXY_PORT"
    CMD="adb shell iptables -t nat -A OUTPUT -p tcp --dport 443 -j DNAT --to-destination $PROXY_IP:$HTTPS_PROXY_PORT"
    ;;
  off)
    CMD="adb shell iptables -t nat -F"
    ;;
  *)
    exit 1
    ;;
esac

echo $CMD
$CMD
