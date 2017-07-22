#payload of a version message with py3.5
version         = (70014).to_bytes(4, byteorder="little", signed=True)
services        = (0).to_bytes(8, byteorder="little", signed=False)

import time

timestamp       = (int(time.time())).to_bytes(8, byteorder="little", signed =True)
recv_services   = (0).to_bytes(8, byteorder="little", signed=False)
recv_addr       = bytes("127.0.0.1"[::-1].encode("ascii"))
recv_addr       = recv_addr + (16 - len(recv_addr)) * bytes.fromhex("00")
recv_port       = (8333).to_bytes(2, byteorder="big", signed=False)

trans_services  = (0).to_bytes(8, byteorder="little", signed=False)
trans_addr      = bytes("127.0.0.1"[::-1].encode("ascii"))
trans_addr      = trans_addr + (16 - len(trans_addr)) * bytes.fromhex("00")
trans_port      = (8333).to_bytes(2, byteorder="big", signed=False)

nonce = (595862422).to_bytes(8, byteorder="little", signed=False)

user_agent = bytes("ME".encode("ascii"))
user_agent_bytes = (int(len(user_agent))).to_bytes(1, byteorder="little", signed=False)

start_height = (448798).to_bytes(4, byteorder="little", signed=True)

relay = False.to_bytes(1, byteorder="little")

payload = (version + services + timestamp +recv_services + recv_addr + 
            recv_port + trans_services + trans_addr + trans_port +
            nonce + user_agent_bytes + user_agent + start_height +
            relay)
            
print(payload.hex())

