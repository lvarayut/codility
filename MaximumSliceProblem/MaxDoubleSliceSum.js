function solution(A) {
    const N = A.length;

    // Find the maximum slice from the left
    const kadaneLeft = new Array(N).fill(0);
    for (let i = 1; i < N - 1; i++) {
        kadaneLeft[i] = Math.max(kadaneLeft[i - 1] + A[i], A[i]);
    }

    // Find the maximum slice from the right
    const kadaneRight = new Array(N).fill(0);
    for (let i = N - 2; i > 0; i--) {
        kadaneRight[i] = Math.max(kadaneRight[i + 1] + A[i], A[i]);
    }

    // Find the maximum sum of two slices
    let max = 0;
    for (let i = 1; i < N - 1; i++) {
        max = Math.max(max, kadaneLeft[i - 1] + kadaneRight[i + 1]);
    }
    return max;
}
