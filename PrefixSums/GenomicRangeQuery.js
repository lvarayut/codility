function generatePrefix(dna, S) {
    const N = S.length;
    const prefix = [];

    // Generate number of dna occurrences in each index
    for (let i = 0; i < N; i++) {
        let nextPrefix = prefix[i - 1] ? prefix[i - 1].concat() : [0, 0, 0, 0];
        let impact = dna.get(S[i]);
        nextPrefix[impact - 1] += 1;
        prefix.push(nextPrefix);
    }
    return prefix;
}

function calculateMinimalImpact(dna, S, prefix, start, end) {
    const occStart = prefix[start - 1] || [0, 0, 0, 0];
    const occEnd = prefix[end]
    for (let i = 0; i < 4; i++) {
        if ((occEnd[i] - occStart[i]) > 0)  return i + 1;
    }
    return dna.get(S[start]);
}

function solution(S, P, Q) {
    // Create a prefix table to store impact numbers
    const dna = new Map([['A', 1], ['C', 2], ['G', 3], ['T', 4]]);
    const prefix = generatePrefix(dna, S);

    // Loop 0..M-1 elements to calculate impacts
    const result = [];
    const M = P.length;
    for (let i = 0; i < M; i++) {
        result[i] = calculateMinimalImpact(dna, S, prefix, P[i], Q[i]);
    }

    return result;
}
