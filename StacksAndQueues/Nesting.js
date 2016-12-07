function solution(S) {
    const N = S.length;

    // Handle edge cases
    if (N === 0) return 1;

    // Loop through S, if it's open bracket, push into the stack,
    // else pop the open bracket and compare
    const stack = [];
    for (let i = 0; i < N; i++) {
        const val = S[i];
        if (val === '(') stack.push(val);
        else if(stack.pop() !== '(') return 0;
    }
    return stack.length ? 0 : 1;
}
