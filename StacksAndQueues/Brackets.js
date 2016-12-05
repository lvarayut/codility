function solution(S) {
    const N = S.length;

    // Handle edge cases
    if (N === 0) return 1;

    // Generate a map to keep track closing brackets
    const brackets = new Map([['}', '{'], [')', '('], [']', '[']]);

    // Loop through S, if it's open bracket, push into the stack,
    // else pop the open bracket and compare
    const stack = [];
    for (let i = 0; i < N; i++) {
        const val = S[i];
        if (!brackets.has(val)) stack.push(val);
        else if(stack.pop() !== brackets.get(val)) return 0;
    }
    return stack.length ? 0 : 1;
}
