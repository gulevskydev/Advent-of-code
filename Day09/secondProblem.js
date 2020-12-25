function firstProblem(input, n) {
    for (let i = 0; i < input.length; i++) {
        let s = 0,
            j = i;
        const arr = [];
        while (s < n) {
            s += input[j];
            j++;
            arr.push(input[j]);
        }
        if (s === n) {
            const res = arr.sort((a, b) => a - b);
            return res[0] + res[res.length - 1];
        }
    }
}