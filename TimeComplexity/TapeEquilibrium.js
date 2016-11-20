function buildIncrementalArray(A) {
    const incrementalArray = [A[0]];
    for (let i = 1; i < A.length - 1; i++) {
        incrementalArray[i] = incrementalArray[i - 1] + A[i];
    }
    return incrementalArray;
}

function solution(A) {
    // Incremental forward & backward
    const forward = buildIncrementalArray(A);
    const backward = buildIncrementalArray(A.reverse()).reverse();

    let min = Infinity;
    for (let i = 0; i < A.length; i++) {
        const val = Math.abs(forward[i] - backward[i]);
        if (val < min) min = val;
    }
    return min;
}
