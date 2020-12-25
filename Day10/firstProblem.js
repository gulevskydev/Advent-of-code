function firstProblem(input) {
    let one = 0,
        three = 1;
    input = input.sort((a, b) => a - b);
    if (input[0] < 3) one++;
    for (let i = 0; i < input.length; i++) {
        if (input[i + 1] - 1 === input[i]) one++;
        else if (input[i + 1] - 3 === input[i]) three++;
    }
    return three * one
}