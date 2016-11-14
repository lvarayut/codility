function solution(A) {
    // Create hash table
    let hash = new Map();
    A.forEach((val) => {
        if (hash.has(val))
            hash.delete(val);
        else
            hash.set(val, val);
    });

    return hash.values().next().value;
}
