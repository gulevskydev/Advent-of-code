function getValue(input) {
    let op = '';
    let sum = null;
    return input.join('').split('*').map(e => eval(e)).reduce((a, b) => a * b)
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