function solution(A, B, K) {
    // Count the number of divisibility by K,
    let begin = Math.floor(A / K);
    let end = Math.floor(B / K);

    // Count only the number of divisibility in the rage of [A..B]
    // Don't forget to count the first element, in case, it's divisible by K
    return end - begin + (A % K === 0);
}
