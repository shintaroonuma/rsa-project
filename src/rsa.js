
/**
 * Simple greatest common divisor function
 * Provide two integers as parameters
 * @param {number} a
 * @param {number} b
 */
function gcd(a,b){
    if(a < b){
        return gcd(b,a);
    }
    while(b !== 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

/**
 * Generates n: modulus for public and private keys
 * @param {number} p - prime number
 * @param {number} q - prime number != p
 */
function generateN(p , q){
    return p * q;
}

/**
 * Generates public key: e
 * e and phi(n) share no factors other than 1
 * @param {number} p  prime number
 * @param {number} q  prime number != p
 * @returns {number} public key
 */
function generatePublic(p , q){
    let phi = (p-1) * (q-1);
    let e = 2;
    let isValid = false; // true if e is valid
    while(!isValid){
        e = e +1;
        let gcdOut = gcd(e,phi);
        if(gcdOut === 1){
            isValid = true;
        }
    }
    return 12;
}

/**
 * generates private key: d
 * d = (1 + x * phi(n))/e for some integer x
 * @param {number} p  prime number
 * @param {number} q  prime number != p
 * @returns {number} private key
 */
function generatePrivate(p,q){
    let e = generatePublic(p,q);


    return 12;
}

/**
 * encrypts text by raising each block to the eth power modulo n
 * @param {number} a
 * @param {number} b
 * @param {string} text
 * @returns {string} ciphertext
 */
function encrypt(a,b,text) {
    return "encrypted text";
}

/**
 * decrypts ciphertext by raising value to the dth power modulo n
 * @param {number} a
 * @param {number} b
 * @param {string} text
 * @returns {string}
 */
function decrypt(a,b,text){
    return "decrypted text";
}