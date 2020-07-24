
//greatest common divisor
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

//generates N - modulus for public and private keys
function generateN(p , q){
    return p * q;
}

//generates public from 2 primes
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

//generates private from 2 primes
function generatePrivate(a,b){
    return 12;
}

//encrypts message using
function encrypt(a,b,text) {
    return "encrypted text";
}

//decrypts message using
function decrypt(a,b,text){
    return "decrypted text";
}