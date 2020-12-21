function countQuestions(input) {
    return input.map(e => e.includes('\n') ? [...new Set(e.split('\n').join(''))].join('') : [...new Set(e)].join('')).join('').length
}