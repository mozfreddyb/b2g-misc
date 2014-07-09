/* This only works for the simulator add-on, as certdb.importCertsFromFile pops up a dialog. */

var nsIX509Cert = Components.interfaces.nsIX509Cert;
var nsIX509CertDB = Components.interfaces.nsIX509CertDB;
var nsX509CertDB = "@mozilla.org/security/x509certdb;1";
var certdb = Components.classes[nsX509CertDB].getService(nsIX509CertDB);
Components.utils.import("resource://gre/modules/FileUtils.jsm");

var path = "/home/freddy/owasp_zap_root_ca.cer";
var file = new FileUtils.File(path);
certdb.importCertsFromFile(null, file, nsIX509Cert.CA_CERT); // spawns dialog :( that asks about CA trustworthiness
console.log("import successful")

