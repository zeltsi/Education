//ecdsa with uncompressed keys - suggested to take this part after you finished with keys

var bitcore = require('bitcore-lib');

privKey = bitcore.PrivateKey.fromString("8c5e5b37ebf1e7a274b9dff4910f9a2004868897f7d845802b77a1b245c26bc7");

pubKey = "04" +	// results in uncompressed key
        privKey.publicKey.point.x.toBuffer().toString("hex") +
        privKey.publicKey.point.y.toBuffer().toString("hex");

pubKey = new Buffer(pubKey, "hex");

pubKey = bitcore.PublicKey.fromBuffer(pubKey);

msg = new Buffer("hello world");

hashedMsg = bitcore.crypto.Hash.sha256(msg);

signature = bitcore.crypto.ECDSA.sign(hashedMsg, privKey); //already der?

signature.toString();

// >'3045022100cc6cb354616a01a01a5c903d8e3e5fed667e81f5cdc8c64e42fd9e87f2941c2e02201a15f2cbe8d4f03ca60c29e50c3ebb0c84269c128cf3e1c5dabcb5cb5f258f54'

bitcore.crypto.ECDSA.verify(hashedMsg, signature, pubKey);

// >true;