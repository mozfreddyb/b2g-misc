// not all webAPIs are OK with proxying, though
// see https://bugzilla.mozilla.org/show_bug.cgi?id=902346

var proxyPrefs = Components.classes["@mozilla.org/preferences-service;1"]
         .getService(Components.interfaces.nsIPrefService)
         .getBranch("network.proxy.");

var host='127.0.0.1'; //XXX change
var port=8080;

proxyPrefs.setIntPref("type", 1);
proxyPrefs.setCharPref("http", host)
proxyPrefs.setIntPref("http_port", port);
proxyPrefs.setBoolPref("share_proxy_settings", true);

console.log("Please restart b2g (or reboot) for the proxy changes to take effect");
