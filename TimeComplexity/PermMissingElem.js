function add(a, b) {
    return a + b;
}

function solution(A) {
    const N = A.length;

    // Sum from 1..(N + 1)
    const continuousIntegers = Array.from(new Array(N + 1), (_, i) => i + 1);
    const total = continuousIntegers.reduce(add, 0);

    // Sum all values inside A
    const totalA = A.reduce(add, 0);

    // Diff both of them
   return total - totalA;
}
