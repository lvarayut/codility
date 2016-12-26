function solution(A) {
    const N = A.length;
    const max = Math.max(...A);
    const occurrences = new Array(max + 1).fill(0);

    // Divide by itself
    for (let i = 0; i < N; i++) {
        occurrences[A[i]]++;
    }

    // Divide by others
    for (let i = 0; i < N; i++) {
        for (let j = 2; A[i] * j <= max; j++) {
            if (occurrences[A[i] * j]) {
                occurrences[A[i] * j]++;
            }
        }
    }

    const result = [];
    for (let i = 0; i < N; i++) {
        result.push(A.length - occurrences[A[i]]);
    }

    return result;
}
