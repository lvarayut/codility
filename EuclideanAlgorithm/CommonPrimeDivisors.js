function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
}

function verify(a, b) {
    while (a !== 1) {
        const gcdVal = gcd(a, b);
        if (gcdVal === 1) {
            break;
        }
        a /= gcdVal;
    }
    return a;
}

function solution(A, B) {
    const Z = A.length;
    let count = 0;

    // Loop through A, B pairs and verify them
    for (let i = 0; i < Z; i++) {
        const a = A[i];
        const b = B[i];
        const gcdVal = gcd(a, b);
        if (verify(a, gcdVal) === 1 && verify(b, gcdVal) === 1) {
            count += 1;
        }
    }
    return count;
}
