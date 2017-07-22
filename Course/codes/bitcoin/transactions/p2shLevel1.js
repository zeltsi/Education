var bitcore = require('bitcore-lib');

var redeemScript = new bitcore.Script();

redeemScript.add("OP_3")
			.add("OP_ADD")
			.add("OP_EQUAL");

var pubScript = redeemScript.toScriptHashOut().toAddress("testnet");

console.log(pubScript);