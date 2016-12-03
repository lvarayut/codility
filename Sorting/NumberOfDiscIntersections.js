function generatePairs(A) {
    const pairs = [];

    for (let i = 0; i < A.length; i++) {
        pairs.push({
            start: i - A[i],
            end: i + A[i]
        });
    }

    // Return the sorted array, by start point (ASC)
    return pairs.sort((a, b) => a.start - b.start);
}

function solution(A) {
    const N = A.length;
    let count = 0;

    // Handle edge cases
    if (!N) return 0;

    // Create a sorted array containing objects, start and end
    const pairs = generatePairs(A);
    for (let i = 0; i < N; i++) {
        const pair = pairs[i];
        for (let j = i + 1; j < N; j++) {
            const comparedPair = pairs[j];
            if (comparedPair.start <= pair.end) {
                count++;
            }
            else break;
        }

        // In case of exceeding 10,000,000
        if (count > 1e7) return - 1;
    }
    return count;
}
