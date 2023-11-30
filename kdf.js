const { pbkdf2 } = require("ethereum-cryptography/pbkdf2");
const { utf8ToBytes } = require("ethereum-cryptography/utils");
const { bytesToHex } = require("ethereum-cryptography/utils");

let pass = utf8ToBytes("P@ssw0rd!");
let salt = utf8ToBytes("S@lt");
let iterations = 999;
let keylen = 256;
let digest = "sha256";

async function getPbkdf2(_pass, _salt, _iterations, _keylen, _digest) {
    return bytesToHex( await pbkdf2(_pass, _salt, _iterations, _keylen, _digest));
}

console.log("Key derived from PBKDF2 =>:", getPbkdf2(pass, salt, iterations, keylen, digest)); 


