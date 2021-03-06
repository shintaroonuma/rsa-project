/**
 * Simple greatest common divisor function
 * Provide two integers as parameters
 * @param {number} a
 * @param {number} b
 */
function gcd(a, b) {
  if (a < b) {
    return gcd(b, a);
  }
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

/** Upper bound for a prime number input. */
export const UPPER_BOUND = 1000000;

/** Lower bound for a prime number input. */
export const LOWER_BOUND = 1;

/**
 * checks if number is inside our boundaries
 * @param {number} a
 * @returns {boolean} is number valid
 * @see UPPER_BOUND
 * @see LOWER_BOUND
 */
export function checkBound(a) {
  if (a > UPPER_BOUND) {
    return false;
  } else {
    return a >= LOWER_BOUND;
  }
}

/**
 * simple prime checker
 * Fermat's little theorem
 * @param {number} a
 * @returns {boolean} is number prime
 */
export function checkPrime(a) {
  let isValid = true;
  if (a === 1) {
    return false;
  } else {
    for (let i = 2; i * i <= a; i++) {
      if (a % i === 0) {
        isValid = false;
      }
    }
    return isValid;
  }
}

/**
 * Generates n: modulus for public and private keys
 * @param {number} p prime number
 * @param {number} q prime number != p
 * @returns {number}
 */
export function generateN(p, q) {
  return p * q;
}

/**
 * Generates public key: e
 * e and phi(n) share no factors other than 1
 * @param {number} p prime number
 * @param {number} q prime number != p
 * @returns {number} public key
 */
export function generatePublic(p, q) {
  let phi = (p - 1) * (q - 1);
  let e = 2;
  let isValid = false; // true if e is valid
  while (!isValid) {
    e = e + 1;
    let gcdOut = gcd(e, phi);
    if (gcdOut === 1) {
      isValid = true;
    }
  }
  return e;
}

/**
 * Generates private key: d
 * d = (1 + x * phi(n))/e for some integer x
 * @param {number} p prime number
 * @param {number} q prime number != p
 * @param {number} e public key
 * @returns {number} private key
 */
export function generatePrivate(p, q, e) {
  let a = e;
  let b = (p - 1) * (q - 1);
  a %= b;
  for (let i = 1; i < b; i++) {
    if ((a * i) % b === 1) {
      return i;
    }
  }
}

/**
 * Encrypts text by raising each block to the eth power modulo n
 * @param {number} e public key
 * @param {number} n modulus for public key
 * @param {string} text
 * @returns {string} ciphertext
 */
export function encrypt(e, n, text) {
  let len = text.length;
  let output = "";
  for (let i = 0; i < len; i++) {
    let value = text.charCodeAt(i);
    let newVal = powerMod(e, n, value);
    let newString = newVal.toString();
    output = output.concat(newString);
    output = output.concat(" ");
  }
  return output;
}

/**
 * Decrypts ciphertext by raising value to the dth power modulo n
 * @param {number} d private key
 * @param {number} n modulus for private key
 * @param {string} ciphertext
 * @returns {string} text
 */
export function decrypt(d, n, ciphertext) {
  let text = ciphertext.split(" ");
  let len = text.length;
  let output = "";
  for (let i = 0; i < len; i++) {
    let value = parseInt(text[i]);
    let newVal = powerMod(d, n, value);
    let newString = String.fromCharCode(newVal);
    output = output.concat(newString);
  }
  return output;
}

/**
 * power mod function efficiently mods sub tasks
 * so sub task values do not balloon out of control
 * @param {number} key
 * @param {number} n
 * @param {number} val
 * @returns {number} answer
 */
function powerMod(key, n, val) {
  let output = 1;
  let expon = key;
  let value = val;
  while (expon > 0) {
    let temp = Math.floor(expon / 2);
    let rem = key - 2 * temp;
    if (rem === 1) {
      output = (output * value) % n;
    }
    value = (value * value) % n;
    expon = temp;
  }
  return output;
}
