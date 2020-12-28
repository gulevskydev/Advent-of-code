function secondProblem(input) {
    const store = new Map(input.map((x, i) => [x, i]));
    let current, next = 0;
    for (let i = input.length; i < 30000000; i++) {
        current = next;
        next = store.has(current) ? i - store.get(current) : 0;
        store.set(current, i);
    }
    return current;
}