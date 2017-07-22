#Creating BTC header using py3.5

magic_number = bytes.fromhex("f9beb4d9")
command_name = bytes("version".encode("ascii")) + 5 * bytes.fromhex("00")
payload = bytes.fromhex("7e11010000000000000000006bf68558000000000000000000000000312e302e302e37323100000000000000208d0000000000000000312e302e302e37323100000000000000208d96238423000000000645584f4249541ed9060000")
payload_size = int(len(payload)).to_bytes(4, byteorder="little", signed = False)

import hashlib

sha256_1 = hashlib.sha256(payload)
sha256_2 = hashlib.sha256(sha256_1.digest()) 
print("this is the result of the second hash: " + sha256_2.hexdigest())

checksum = bytes.fromhex("58fbb4e0")

header = (magic_number + command_name + payload_size + checksum)

FINALE_VERSION_MSG = (header + payload)

print(FINALE_VERSION_MSG.hex())