function firstProblem(input) {
    input = input.split(',').map(e => +e);
    let len = input.length;
    for (let i = 0; i < 2020; i++) {
        if (input.filter(el => el === input[input.length - 1]).length > 1) {
            let idx = [];
            for (let j = input.length - 1; j >= 0; j--) {
                if (input[j] === input[input.length - 1]) {
                    idx.push(j)
                }
            }
            input.push(idx[0] - idx[1]);
        } else {
            input.push(0);
        }
    }
    return input[input.length - len - 1]
}