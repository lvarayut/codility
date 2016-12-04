function solution(A, B) {
    const N = A.length;
    const downstream = [];
    let survivor = 0;

    // There are 3 cases:
    // If A[i] is downstream, push it to the stack
    // else if A[i] is upstream but the stack is empty, increase the number of survivors
    // else A[i] is upstream and the stack is not empty, pop the stack and compare both of them
    for (let i = 0; i < N; i++) {
        if (B[i]) downstream.push(A[i]);
        else if (!B[i] && !downstream.length) survivor++;
        else {
            while (downstream.length) {
                const downFish = downstream.pop();
                if (downFish > A[i]) {
                    downstream.push(downFish)
                    break;
                }
            }
            if (!downstream.length) survivor++;
        }
    }
    return survivor + downstream.length;
}
