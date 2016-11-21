function add(a, b) {
    return a + b;
}

function solution(A) {
    const N = A.length;
    const occurrences = new Set();

    // Add each occurrence to the set
    for (let i = 0; i < N; i++) {
        occurrences.add(A[i]);
    }

    // Loop from 1..N to check if any number missing
    for (let i = 1; i <= N; i++) {
        if (!occurrences.has(i)) return 0;
    }
    return 1;
}
