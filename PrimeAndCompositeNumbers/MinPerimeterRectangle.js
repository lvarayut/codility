function solution(N) {
    let min = Infinity;
    let i;
    // Loop from 1..sqrt(N) to find the factor of 30
    for (i = 1; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            // i * B = N, thus B = N/i
            let P = 2 * (i + N/i);
            min = Math.min(min, P);
        }
    }

    return min;
}
