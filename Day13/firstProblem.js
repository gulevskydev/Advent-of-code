function firstProblem(input) {
    const time = +input[0];
    let variants = [];
    input[1] = input[1].split(',').filter(e => !isNaN(e)).map(e => +e)
    for (let i = 0; i < input[1].length; i++) {
        let busTime = +input[1][i];
        while (busTime < time) {
            busTime += +input[1][i]
        }
        variants.push([input[1][i], busTime])
    }
    variants = variants.sort((a, b) => a[1] - b[1])
    return (variants[0][1] - time) * variants[0][0]
}