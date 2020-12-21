function countQuestions(input) {
    let count = 0;
    const arr = input.map(e => e.includes('\n') ? e.split('\n') : e)
    for (let i = 0; i < arr.length; i++) {
        count += typeof arr[i] === 'string' ? arr[i].length : arr[i][0].split('').filter(e => arr[i].every(el => el.includes(e))).length
    }
    return count;
}