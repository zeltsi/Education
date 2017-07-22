// p2pkh tx testnet with bitcore - no script

var bitcore = require('bitcore-lib');

// Bob private key
privateKey = new bitcore.PrivateKey('041a619641118365698705db25ec1a9b581bfb102697f57956bc412b1aad3f95');

// Bob address
bobAddress 		= privateKey.toAddress("testnet"); //mf

charlieAddress	= new bitcore.Address.fromString("mi4kMd3HcLUGJSouNdJZ87eUBbi7cNE6C3");

var utxo = new bitcore.Transaction.UnspentOutput({
  "txid" : "7136a8045994b5ee3c9af4803277cb16ffa2ecff3327f0a6528f662e41c1501b",
  "vout" : 1,
  "address" : bobAddress,
  "scriptPubKey" : "76a914025bafbac8a8a1fcbae04f9a6aa8b6f968c9d14588ac",
  "satoshis" : 2789780000
});

var transaction = new bitcore.Transaction()
    .from(utxo)         	 		// Feed information about what unspent outputs one can use
    .to(charlieAddress, 89000000)  	// Add an output with the given amount of satoshis
    .change(bobAddress)     	 	// Sets up a change address where the rest of the funds will go
    .sign(privateKey)   	  		// Signs all the inputs it can

console.log(transaction.toString("hex"));