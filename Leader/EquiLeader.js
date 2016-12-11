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
    for (let i = 0; i < A.length; i++) {
        if (A[i] === value) {
            count++;
        }
    }
    return count > A.length / 2 ? { count, dominator: value } : -1;
}

function calculateEqui(A, dominator, totalDominator) {
    const N = A.length;
    let count = 0;
    let countDominator = 0;
    let lenLeft, lenRight, conditionLeft, conditionRight;
    for (let i = 0; i < N; i++) {
        lenLeft = i + 1;
        lenRight = N - i - 1;

        if (A[i] === dominator) {
            countDominator += 1;
        }

        conditionLeft = countDominator > lenLeft / 2;
        conditionRight = (totalDominator - countDominator) > lenRight / 2;

        if (conditionLeft && conditionRight) {
            count++;
        }
    }
    return count;
}

function solution(A) {
    // Handle edge cases
    if (!A.length) return -1;

    // Calculate size and value;
    let {size, value} = calculateMostOccurrence(A);

    // Find the dominator
    const { count, dominator } = findDominator(A, size, value);

    // Calculate Equi
    return calculateEqui(A, dominator, count);
}
