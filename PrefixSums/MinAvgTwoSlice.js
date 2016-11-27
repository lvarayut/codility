function solution(A) {
    const N = A.length;
    let minVal = Infinity;
    let minPosition, lenTwo, lenThree, result;

    // The possible lengths are only two or three, thus,
    // we need to loop through A and check for both cases
    for (let i = 0; i < N - 1; i++) {
        lenTwo = (A[i] + A[i + 1]) / 2;
        lenThree = (A[i] + A[i + 1] + (A[i + 2] || 0)) / 3;
        result = lenTwo < lenThree ? lenTwo : lenThree;

        if (result < minVal) {
            minVal = result;
            minPosition = i;
        }
    }
    return minPosition;
}
