//ecdsa with compressed keys

var bitcore = require('bitcore-lib');

privateKey = new bitcore.PrivateKey('L23PpjkBQqpAF4vbMHNfTZAb3KFPBSawQ7KinFTzz7dxq6TZX8UA');

publicKey = privateKey.publicKey;

// >0283f56c554d525392a231cbc35f2c5efa51985b114bff69abb26f9743207281ed (compressed!)

msg = new Buffer("hello world");

hashedMsg = bitcore.crypto.Hash.sha256(msg);

signature = bitcore.crypto.ECDSA.sign(hashedMsg, privateKey).toString(); //already der?

// >'3045022100cc6cb354616a01a01a5c903d8e3e5fed667e81f5cdc8c64e42fd9e87f2941c2e02201a15f2cbe8d4f03ca60c29e50c3ebb0c84269c128cf3e1c5dabcb5cb5f258f54'

bitcore.crypto.ECDSA.verify(hashedMsg, sig, publicKey);

// >true;