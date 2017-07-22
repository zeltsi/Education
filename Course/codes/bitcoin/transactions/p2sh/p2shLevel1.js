
var bitcore = require('bitcore-lib');

script = new bitcore.Script()

var redeemScript = new bitcore.script();
redeemScript.add("OP_3")
			.add("OP_ADD")
			.add("OP_EQUAL");


var pubScript = redeemScript.toScriptHashOut().toAddress("testnet");

console.log(pubScript);