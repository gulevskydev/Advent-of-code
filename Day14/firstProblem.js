function firstProblem(input) {
    const store = new Map();
    input.forEach((el, i) => {
        if (el.startsWith("mask"))[_, mask] = el.split(" = ");
        else {
            const [_, id, val] = el.match(/mem\[(\d+)\] = (\d+)/);
            store.set(id, parseInt(Number(val).toString(2).padStart(36, "0").split("").map((bit, i) => (mask[i] === "X" ? bit : mask[i])).join(""), 2));
        }
    })
    return [...store].reduce((a, b) => a + b[1], 0)
}