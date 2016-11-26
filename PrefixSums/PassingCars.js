function solution(A) {
    // Create a prefix table in reverse order
    const N = A.length;
    const prefix = [];
    for (let i = N - 1; i >= 0; i--) {
        prefix[i] = A[i] + (prefix[i + 1] || 0);
    }

    // Loop through A and use the prefix number to find passing cars
    let count = 0;
    for (let i = 0; i < N; i++) {
        if (A[i] === 0) count += prefix[i];

        if (count > 1e9) return -1;
    }
    return count;
}
