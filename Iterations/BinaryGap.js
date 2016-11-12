function solution(N) {
    // Convert N to binary
    const bin = N.toString(2).split('1');

    // Find the max value of binary gap
    let max = 0;
    for (let i = 1; i < bin.length - 1; i++) {
        const len = bin[i].length;
        if (max < len) max = len;
    }
    return max;
}
