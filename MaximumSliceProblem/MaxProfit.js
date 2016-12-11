function solution(A) {
    const N = A.length;

    let max = 0;
    let lowest = A[0];

    // Loop through A and find the max difference
    for (let i = 0; i < N; i++) {
        const diff = A[i] - lowest;
        max = Math.max(max, diff);
        if (diff <= 0) lowest = A[i];
    }
    return max;
}
