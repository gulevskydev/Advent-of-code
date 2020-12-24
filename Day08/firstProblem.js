function first(input) {
    let acc = 0;
    const visited = [];
    for (let i = 0; i < input.length; i++) {
        if (visited.includes(i)) return acc;
        else if (input[i].slice(0, 3) === 'acc') {
            acc += Number(input[i].slice(3))
        } else if (input[i].slice(0, 3) === 'jmp') {
            visited.push(i)
            i += Number(input[i].slice(3)) - 1
        }
        visited.push(i)
    }
    return acc
}