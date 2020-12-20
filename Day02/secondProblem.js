function isValidPassword(input) {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        const range = input[i][0].split('-')
        const char = input[i][1][0];
        if (input[i][2][range[0] - 1] === char && input[i][2][range[1] - 1] !== char ||
            input[i][2][range[0] - 1] !== char && input[i][2][range[1] - 1] == char) count++;
    }
    return count;
}