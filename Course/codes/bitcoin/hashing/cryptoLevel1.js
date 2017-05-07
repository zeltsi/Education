// hashing using javascript node and bitcore

const crypto = require('crypto');


// Using nodeJS.Crypto.Hash we can insert strings
crypto.Hash("sha256").update("hey").digest("hex")
// >"fa690b82061edfd2852629aeba8a8977b57e40fcb77d1a7a28b26cba62591204"



//bitcore adds more hashing methods for easy use (sha256sha256, ripmed160sha256 etc)
//but requires us to use buffers
buf = new Buffer.from("abc")
bitcore.crypto.Hash.sha256sha256(buf).toString("hex")
// >"4f8b42c22dd3729b519ba6f68d2da7cc5b2d606d05daed5ad5128cc03e6c6358"