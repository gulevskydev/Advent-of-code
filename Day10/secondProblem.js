function firstProblem(input) {
    input = input.sort((a, b) => a - b);
    const step = []
    input.forEach((el, i) => {
        step[i] = 0
        let j = i - 1
        while (j >= 0 && el - input[j] <= 3) {
            step[i] += step[j]
            j--
        }

        if (el <= 3) {
            step[i]++
        }
    })
    return step
}