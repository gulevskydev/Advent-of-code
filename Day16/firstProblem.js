function firstProblem(input) {
    const nums = []
    input[0].split('\n').map(e => e.split(':')[1].split('or')).forEach(arr => {
        arr.forEach(el => {
            el = el.trim()
            const [f, l] = el.split('-').map(e => +e);
            for (let i = f; i <= l; i++) {
                nums.push(i)
            }
        })
    })
    return input[2].split(':')[1].split('\n').join(',').split(',').slice(1).filter(e => !nums.includes(+e)).reduce((a, b) => +a + +b)
}