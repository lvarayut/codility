function findPeaks(A) {
    const peaks = [];
    for (let i = 1; i <= A.length - 2; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks.push(i);
        }
    }
    return peaks;
}

function calculateMaxBlocks(N, peaks) {
    for (let divisor = 1; divisor <= N; divisor++) {
        if (N % divisor !== 0) continue;

        let count = 0;
        let blocks = N / divisor;

        // Loop 1..|peaks - 1| to find the maximum blocks
        for (let j = 0; j < peaks.length; j++) {
            let val = Math.floor(peaks[j] / divisor);

            if (val > count) break;
            else if (val === count) count++;
        }
        if (count === blocks) return blocks;
    }
    return 0;
}


function solution(A) {
    // Find peak indexes
    const peaks = findPeaks(A);

    // Find maximum blocks
    return calculateMaxBlocks(A.length, peaks);
}
