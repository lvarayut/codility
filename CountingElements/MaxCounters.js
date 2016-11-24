function solution(N, A) {
    let M = A.length;

    // Create an array of size N
    const occurrences = new Array(N).fill(0);

    // Create a max variable to keep tracking the max value
    let max = 0;
    let plus = 0;

    // Loop through A array and apply operations
    for (let K = 0; K < M; K++) {
        const index = A[K] - 1;
        if (A[K] !== N + 1) {
            if (occurrences[index] < plus) occurrences[index] = plus;

            occurrences[index]++;

            // Update max, if nescessary
            if (max < occurrences[index]) max = occurrences[index];

        } else {
            plus = max;
        }
    }

    // Loop through the occurrences, to set all values to the plus
    for (let i = 0; i < N; i++) {
        if (occurrences[i] < plus) occurrences[i] = plus;
    }
    return occurrences;
}
