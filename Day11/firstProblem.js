function firstProblem(input, n) {
    const res = [];
    if (n === 0) return input.map(e => e.split('').filter(el => el === '#').length).reduce((a, b) => a + b)
    for (let i = 0; i < input.length; i++) {
        const arr = []
        for (let j = 0; j < input[i].length; j++) {
            const cells = []
            if (j + 1 < input[i].length) cells.push(input[i][j + 1])
            if (j - 1 >= 0) cells.push(input[i][j - 1])
            if (i - 1 >= 0) {
                cells.push(input[i - 1][j])
                if (j - 1 >= 0) cells.push(input[i - 1][j - 1])
                if (j + 1 < input[i].length) cells.push(input[i - 1][j + 1])

            }
            if (i + 1 < input.length) {
                cells.push(input[i + 1][j])
                if (j + 1 < input[i].length) cells.push(input[i + 1][j + 1])
                if (j - 1 >= 0) cells.push(input[i + 1][j - 1])
            }
            if (cells.filter(el => el === '#').length > 3 && input[i][j] != '.') arr.push('L')
            else if (input[i][j] === 'L' && cells.filter(el => el === '#').length < 1) arr.push('#')
            else arr.push(input[i][j])
        }
        res.push(arr.join(''))
    }
    return firstProblem(res, n - 1)
}