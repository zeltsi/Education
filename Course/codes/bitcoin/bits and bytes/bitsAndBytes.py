# Python 3+ code
# Basic byte conversion 


a = "hello world".encode("utf-8")							# utf-8 contains ascii.
print(a)
print(a.hex())
b = bytes.fromhex("68656c6c6f20776f726c64")					# Side by side with ascii table
print(b)
oneByte = bytes.fromhex("6d6f")
print(oneByte)

# Once the text was decoded to binarry code either from text (utf, ascii) or directly from hex 
# it can be decoded using multiple conventions 

print(oneByte.decode("utf-8"))								
print(oneByte.decode("utf-16"))
print(oneByte.decode("ascii"))


# Not every byte has a conversion in all charsets
c = bytes.fromhex("61")
print(c.decode("utf-8"))
#print(c.decode("utf-16")) <- this line wont work


print(oneByte + 5 * bytes.fromhex("00"))			# Padding

d = (23).to_bytes(10, byteorder='big')				
print(d)
e = (-3).to_bytes(10, byteorder='little') #<- this line wont work
print(e) #<- this line wont work
f = int.from_bytes(d, "big", signed=True)			# Only signed int can contain negative values
print(f)