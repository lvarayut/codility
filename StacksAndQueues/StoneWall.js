function solution(H) {
    const N = H.length;
    const stack = [];
    let count = 0;

    // Loop through H and push to the stack
    for (let i = 0; i < N; i++) {
        const height = H[i];

      // Loop through the stack starting from the end,
        for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j] < height) {
                break;
            } else if (stack[j] === height) count--;
            stack.pop();
        }
        stack.push(height);
        count++;
    }
    return count;
}
