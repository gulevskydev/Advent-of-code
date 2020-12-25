function firstProblem(input) {
    for (let i = 25; i < input.length; i++) {
        const pre = input.slice(i - 25, i);
        let ans = null;
        for (let j = 0; j < pre.length; j++) {
            for (let k = 0; k < pre.length; k++) {
                if (k !== j && pre[j] + pre[k] === input[i]) {
                    ans = input[i]
                }
            }
        }
        if (!ans) return [input[i], pre, ans]
    }
}