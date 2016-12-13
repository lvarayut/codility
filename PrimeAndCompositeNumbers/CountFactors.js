function solution(N) {
    let count = 0;
    let i;
    for (i = 1; i < Math.sqrt(N); i++) {
        if (N % i === 0) count += 2;
    }
    if (i * i === N) count += 1;

    return count;
}
