function second(s) {
    let arr = s.split('\n').map(e => e.split(' '))
    let visited = [];
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        acc = 0;
        visited = [];
        if (arr[i] !== 'acc') {
            let input = new Array(...arr).map((e, id) => i === id && e[0] === 'nop' ? ['jmp', e[1]] : i === id && e[0] === 'jmp' ? ['nop', e[1]] : e)
            for (let j = 0; j < input.length; j++) {
                if (visited.includes(j)) {
                    break
                } else if (input[j][0] === 'acc') {
                    acc += +input[j][1]
                    if (j === input.length - 1) return [acc, input[j]]
                } else if (input[j][0] === 'jmp') {
                    if (+input[j][1] === 0) {
                        break
                    }
                    visited.push(j)
                    j += +input[j][1] - 1
                }
                visited.push(j)
                if (j === input.length - 1) return [acc, input[j]]
            }
        }
    }
    return acc
}