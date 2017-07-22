// Creating p2pkh pubScript


var bitcore = require('bitcore-lib');


// This is the basic pubScript for a p2pkh transaction
script = new bitcore.Script()

script.add("OP_DUP") 		//p2pkh
	.add("OP_HASH160")
	.add(new Buffer ("e3bb46f1fd8e49f43db954191d177ffb4eae9f47"))
	.add("OP_EQUALVERIFY")
	.add("OP_CHECKSIG");





// Just some fun with pubScript
pubScript = new bitcore.Script();

pubScript.add("OP_1")
	.add("OP_ADD")
	.add("OP_4")
	.add("OP_EQUAL");	// We need to have some verifying OP_CODE


sigScript = new bitcore.Script();

sigScript.add("OP_3");

bitcore.Script.Interpreter().verify(sigScript, pubScript);  // Verifying the script. 


