bitcore = bitcore = require("bitcore-lib");

privKey = bitcore.PrivateKey.fromString("8c5e5b37ebf1e7a274b9dff4910f9a2004868897f7d845802b77a1b245c26bc7");

pubKey = "04" +	// results in uncompressed key
        privKey.publicKey.point.x.toBuffer().toString("hex") +
        privKey.publicKey.point.y.toBuffer().toString("hex");

pubKey = new Buffer(pubKey, "hex");

hashedPublicKey = "00" + bitcore.crypto.Hash.sha256ripemd160(pubKey).toString("hex");

hashedPublicKey = new Buffer(hashedPublicKey, "hex");

checkSum = bitcore.crypto.Hash.sha256sha256(hashedPublicKey).toString("hex").slice(0,8);

checkSum = new Buffer(checkSum, "hex");

binAddress = hashedPublicKey.toString("hex") + checkSum.toString("hex");

binAddress = new Buffer(binAddress, "hex");

address = bitcore.encoding.Base58.encode(binAddress)