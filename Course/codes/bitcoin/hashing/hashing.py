# Python 3+ code
# Hashing basics


# pip install hashlib
import hashlib								

a = hashlib.sha256("hello".encode("ascii"))
print("hello".encode("ascii").hex())
print(a)
print(a.hexdigest())
b = hashlib.sha256(bytes.fromhex("68656c6c6f"))
print(b.hexdigest())
c = hashlib.sha256("6f".encode("ascii"))
print(c.hexdigest())