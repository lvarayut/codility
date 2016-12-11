function solution(A) {
    const N = A.length;
    let maxSlice = -Infinity;
    let maxEnding;

    // Loop through A and find the max difference
    for (let i = 0; i < N; i++) {
        if (i === 0) maxEnding = A[i];
        else {
            maxEnding = Math.max(maxEnding + A[i], A[i]);
        }
        maxSlice = Math.max(maxEnding, maxSlice);
    }
    return maxSlice;
}
