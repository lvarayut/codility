function solution(A) {
    // Sort ASC
    const N = A.length;
    const sortedArr = A.sort((a, b) => a - b);

    // There are two cases
    // 1. (0) * (1) * (N - 1)
    // 2. (N - 1) * (N - 2) * (N - 3)
    let head = sortedArr[0] * sortedArr[1] * sortedArr[N - 1];
    let tail = sortedArr[N - 1] * sortedArr[N - 2] * sortedArr[N - 3];
    if (sortedArr[N - 1] < 0) {
      return tail;
    } else {
      return head > tail ? head : tail;
    }
}
