# Python 3+ code
# ecdsa basics

import ecdsa


# 32 bytes random number can be obtained from: bitaddress.org
random_number = bytes.fromhex("D9EB2D0AEF02246253F6B14765458B9BED04557B6880C4A14DA8B8A615ADBF24")


# SECP256k1 curve as define by the SEC
signing_key = ecdsa.SigningKey.from_string(random_number, curve = ecdsa.SECP256k1)

verifying_key = signing_key.get_verifying_key()

signature = signing_key.sign("messege".encode("utf-8"))

#assert verifying_key.verify(signature, "messege".encode("utf-8"))

new_random_number = bytes.fromhex("0B0EA2AD391BFB217D472CC7BE70BB3E125DD4F79424C66996A2F1A92787A12D")

new_signing_key = ecdsa.SigningKey.from_string(new_random_number, curve = ecdsa.SECP256k1)

new_verifying_key = signing_key.get_verifying_key()

assert new_verifying_key.verify(signature, "messesge".encode("utf-8"))
