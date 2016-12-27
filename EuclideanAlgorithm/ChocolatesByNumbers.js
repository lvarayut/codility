function gcd(a, b) {
    if (a % b === 0) return b;
    else return gcd(b, a % b);
}

function solution(N, M) {
    // What the distance we can jump until we found the first wrapper? This is the lcd(N, M)
    // For example, N = 10, N = 4: jump 0, 4, 8, 2, 6 - the distance from 0 to 6 is 20
    // So, if we divide the distance by M, we will get the number of jumps
    return N / gcd(N, M);
}
