function getValue(input) {
    let op = '';
    let sum = null;
    for (let i = 0; i < input.length; i++) {
        if (input[i] !== ' ') {
            if ('+-*/'.includes(input[i])) op = input[i];
            else if (op.length) {
                console.log(`${sum} ${op} ${input[i]}`)
                sum = eval(`${sum} ${op} ${input[i]}`)
                op = '';
            } else {
                sum = input[i]
            }
        }
    }
    return sum;
}

function getSum(input) {
    input = input.split('')

    while (input.includes('(')) {
        parse(input);
    }
    return getValue(input)
}

function parse(input) {
    const idx = input.lastIndexOf('(')
    const s = input.slice(idx)
    const lastIdx = s.indexOf(')')
    input.splice(idx, lastIdx + 1, getValue(input.slice(idx + 1, idx + lastIdx)))
}

function firstProblem(input) {
    return input.split('\n').map(getSum).reduce((a, b) => a + b);
}