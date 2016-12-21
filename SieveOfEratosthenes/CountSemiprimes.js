function findPrims(N) {
    // Use Sieve of Eratosthenes algorithm
    const flags = new Array(N + 1).fill(true);
    flags[0] = flags[1] = false;
    let prime = 2;

    while (prime <= Math.sqrt(N)) {
        for (let i = prime * prime; i < flags.length; i+=prime) {
            flags[i] = false;
        }

        // Set new prime
        let next = prime + 1;
        while (next < flags.length && !flags[next]) {
            next += 1;
        }
        prime = next;
    }

    // Get only prime numbers
    let result = [];
    for (let i = 0; i < flags.length; i++) {
        if (flags[i]) result.push(i);
    }
    return result;
}

function findSemiPrimes(primes, N) {
    const semiPrimes = new Array(N + 1).fill(0);
    for (let i = 0; i < primes.length; i++) {
        for (let j = 0; j <= i; j++) {
            let val = primes[i] * primes[j];
            if (val > N) break;
            semiPrimes[val] = 1;
        }
    }
    return semiPrimes;
}

function calculatePrefix(semiPrimes) {
    const prefix = [];

    for (let i = 0; i < semiPrimes.length; i++) {
        prefix[i] = (prefix[i - 1] || 0) + semiPrimes[i];
    }

    return prefix;
}

function findNumberOfSemiPrimes(prefix, P, Q) {
    let result = [];

    for (let i = 0; i < P.length; i++) {
        result.push(prefix[Q[i]] - prefix[P[i] - 1]);
    }
    return result;
}

function solution(N, P, Q) {
    // Find Prim numbers from 1..N/2
    const primes = findPrims(N);

    // Find SemiPrim numbers from the primes array
    const semiPrimes = findSemiPrimes(primes, N);

    // Calculate prefix
    const prefix = calculatePrefix(semiPrimes);

    // Find number of semiPrimes in range P..Q
    return findNumberOfSemiPrimes(prefix, P, Q);
}
