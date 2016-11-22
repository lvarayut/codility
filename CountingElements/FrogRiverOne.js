function solution(X, A) {
    const occurrences = new Array(X).fill(false);
    let total = 0;

    for (let i = 0; i < A.length; i++) {
        const index = A[i] - 1;
        if (!occurrences[index]) {
            occurrences[index] = true;
            total++;
        }
        if (total === X) return i;
    }

    return - 1;
}
