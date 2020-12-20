function countTheTrees(input) {
    let count = 0;
    let pos = 0;
    for (let i = 0; i < input.length; i++) {
        console.log(input[i][pos], pos, input[i].length)
        input[i] = input[i].repeat(i)
        if (input[i][pos] === '#') count++;
        pos += 3;
    }
    return count;
}