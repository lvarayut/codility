function solution(A, K) {
    const len = A.length;
    // Check in case of 0 value input
    if (!len || !K) return A;

    // Shift the values by K
    const shiftedIndex = K > len ? len - (K % len) : len - K;

    return [...A.slice(shiftedIndex), ...A.slice(0, shiftedIndex)];
}
