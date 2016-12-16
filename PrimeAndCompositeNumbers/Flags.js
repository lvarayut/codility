function findPeaks(A) {
    const peaks = new Array(A.length).fill(false);
    for (let i = 1; i <= A.length - 2; i++) {
        if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
            peaks[i] = true;
        }
    }
    return peaks;
}

function findMaxFlags(peaks, maxFlags) {
    // Loop through all the possible flags
    for (let flag = maxFlags; flag > 1; flag--) {
        let pos = 0;
        let countFlags = flag;
        while (pos < peaks.length && countFlags > 0) {
            if (peaks[pos]) {
                countFlags -= 1;
                pos += flag;
            } else pos += 1;
        }
        if (countFlags === 0) return flag;
    }
}

function solution(A) {
    // Find peak indexes
    const peaks = findPeaks(A);
    const maxFlags = peaks.reduce((a, b) => a + b, 0);

    // Handle the cases of 0 or 1 peak
    if (maxFlags < 2) return maxFlags;

    // Find maximum flags
    return findMaxFlags(peaks, maxFlags);
}
