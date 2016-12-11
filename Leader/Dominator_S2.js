function solution(A) {
    const N = A.length;
    const occurrences = new Map();
    let max = 0;
    let index = -1;

    // Loop through A to count the number of occurrences of each element
    for (let i = 0; i < N; i++) {
        const val = A[i];

        if (occurrences.has(val)) occurrences.set(val, occurrences.get(val) + 1);
        else occurrences.set(val, 1);

        // Save max and its index
        if (max < occurrences.get(val)) {
            index = i;
            max = occurrences.get(val);
        }
    }
    return max > N / 2 ? index : -1;
}
