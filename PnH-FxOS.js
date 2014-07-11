/*
 * This is a tool to install a CA cert from a PnH compliant mitm proxy.
 * Replace pnh_manifest with the URL of your Plug-n-Hack manifest.
 */

var pnh_manifest = 'http://192.168.0.14:8080/manifest';

var mf_request = new XMLHttpRequest();
mf_request.open('GET', pnh_manifest, true);

let Ci = Components.interfaces;

let nsX509CertDB = "@mozilla.org/security/x509certdb;1";
let nsIX509Cert = Ci.nsIX509Cert;
let nsIX509CertDB = Ci.nsIX509CertDB;
let certdb = Cc[nsX509CertDB].getService(nsIX509CertDB);

mf_request.onload = function() {
  var config = null;
  if(mf_request.status === 200) {
    config = JSON.parse(mf_request.responseText);
    cert_req = new XMLHttpRequest();
    console.log(config.features.proxy.CACert);
    cert_req.open('GET', config.features.proxy.CACert, true);
    cert_req.onload = function() {
      if(cert_req.status === 200) {
        var data = cert_req.responseText;
        let b64 = data.split('-----')[2].replace(/\s/g, '');
        let der = atob(b64);

        let cert = certdb.constructX509FromBase64(b64);

        // import the cert with appropriate trust bits.
        cert_data = {"der":der,"base64":b64};
        console.log(cert_data);
        certdb.addCert(cert_data.der,'Cu,,','NSS ignores nicknames');
        console.log('cert added!');
      }
    };
    cert_req.onerror = function(e) {
      console.log('oops!');
      console.log(e.status);
    }
    cert_req.send(null)
  }
};

mf_request.send(null)
