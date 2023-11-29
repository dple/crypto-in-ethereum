const { sha256 } = require("ethereum-cryptography/sha256");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { ripemd160 } = require("ethereum-cryptography/ripemd160"); 
const { blake2b } = require("ethereum-cryptography/blake2b");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { bytesToHex } = require("ethereum-cryptography/utils");

let hash_value = "Crypto plays a heart role in blockchain!";

/** 
 * Input: a string of arbitrary length
 * Output: 256-bit string
 */
function sha256_hash(str) {
    return bytesToHex(sha256(utf8ToBytes(str)));
}
/** 
 * Input: a string of arbitrary length
 * Output: 256-bit string
 */
function keccak_hash(str) {
    return bytesToHex(keccak256(utf8ToBytes(str)));
}
/** 
 * Input: a string of arbitrary length
 * Output: 160-bit string
 */
function ripemd160_hash(str) {
    return bytesToHex(ripemd160(utf8ToBytes(str)));
}
/** 
 * Input: a string of arbitrary length
 * Output: 512-bit string
 */
function blake2b_hash(str) {
    return bytesToHex(blake2b(utf8ToBytes(str)));
}

console.log("Using SHA256 => ", sha256_hash(hash_value));
console.log("Using Keccak256 => ", keccak_hash(hash_value));
console.log("Using ripemd160 => ", ripemd160_hash(hash_value));
console.log("Using Blake2b => ", blake2b_hash(hash_value));