

bitcore = require("bitcore-lib");
privateKey = new bitcore.PrivateKey // Generate a random private key
privateKey.toString()
// >> "23bc740f87bd68729e794eb48b5137150f17109f855a34512c3c5f93d7498291"

privateKey.toAddress().toString()
// >> "1LY75mCpuD3xPfLLFwbWccBNoQQY4VBeQj"
privateKey.toPublicKey().toString()
// >> "0379d42509499082436c89a4e1637ed14a27e56174843bddb980ab6f155f82431c"