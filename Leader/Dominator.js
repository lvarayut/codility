function calculateMostOccurrence(A) {
    let size = 0;
    let value;

    // Loop through A to calculate size and value
    for (let i = 0; i < A.length; i++) {
        if (size === 0) {
            value = A[i];
            size++;
        } else if (value !== A[i]) {
            size--;
        } else {
            size++;
        }
    }
    return {size, value};
}

function findDominator(A, size, value) {
    // If size is 0, there is no dominator
    if (!size) return -1;

    let count = 0;
    let index;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === value) {
            index = i;
            count++;
        }
    }
    return count > A.length / 2 ? index : -1;
}

function solution(A) {
    // Handle edge cases
    if (!A.length) return -1;

    // Calculate size and value;
    let {size, value} = calculateMostOccurrence(A);

    // Find the dominator
    return findDominator(A, size, value);
}
