pragma solidity ^0.4.6;

contract Validator {

    signaure = r + s +v;
    original message = hash sha3("hello world")

    function verify(bytes32 r, bytes32 s, uint8 v, bytes32 hash) returns(address) {
        return ecrecover(hash, v, r, s);
    } 
    
    function constVerify(bytes32 r, bytes32 s, uint8 v, bytes32 hash) constant returns(address) {
        return ecrecover(hash, v, r, s);
    } 
    
}
