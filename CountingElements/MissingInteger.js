function solution(A) {
    // Create a set from A
    const occurrences = new Set(A);

    // While loop from 1..INFITINY,
    // break when there is existing number
    let i = 1;
    while(occurrences.has(i)) {
        i++;
    }
    return i;
}
