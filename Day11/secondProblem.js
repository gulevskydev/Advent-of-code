function secondProblem(input, n) {
    const res = [];
    if (n === 0) return input.map(e => e.split('').filter(el => el === '#').length).reduce((a, b) => a + b)
    for (let i = 0; i < input.length; i++) {
        const arr = []
        for (let j = 0; j < input[i].length; j++) {
            const cells = []
            if (j + 1 < input[i].length && checkHorizontal(input[i].slice(j + 1), 'right')) {
                cells.push('#')
            }
            if (j - 1 >= 0 && checkHorizontal(input[i].slice(0, j), 'left')) {
                cells.push('#')
            }
            if (i - 1 >= 0) {
                if (checkVertically(input, [i, j], 'top')) cells.push('#')
                if (j - 1 >= 0 && checkDiagonal(input.slice(0, i), i, j, 'top', 'left')) cells.push('#')
                if (j + 1 < input[i].length && checkDiagonal(input.slice(0, i), i, j, 'top', 'right')) cells.push('#')

            }
            if (i + 1 < input.length) {

                if (checkVertically(input, [i, j], 'bottom')) {
                    cells.push('#')
                }
                if (j + 1 < input[i].length && checkDiagonal(input.slice(i), 0, j, 'bottom', 'right')) cells.push('#')
                if (j - 1 >= 0 && checkDiagonal(input.slice(i), 0, j, 'bottom', 'left')) cells.push('#')
            }
            if (i == 0) console.log(cells)
            if (cells.length > 4 && input[i][j] != '.') arr.push('L')
            else if (input[i][j] === 'L' && cells.length < 1) arr.push('#')
            else arr.push(input[i][j])
        }
        res.push(arr.join(''))
    }
    return firstProblem(res, n - 1)
}

function checkHorizontal(arr, pos) {
    arr = arr.replace(/\./g, '')
    if (arr.length === 0) return false
    return pos === 'left' && arr[arr.length - 1] === '#' || pos === 'right' && arr[0] === '#' ? true : false;
}

function checkDiagonal(arr, x, y, xPos, yPos) {
    const res = []
    let j = x,
        s = y
    for (let i = 0; i < arr.length; i++) {
        if (xPos === 'top') {
            x--
            if (yPos === 'left') y--
            else y++
        } else {
            x++
            if (yPos === 'left') y--
            else y++
        }
        if (x < arr.length && x >= 0 && y < arr[0].length && y >= 0) res.push(arr[x][y])
    }
    return res.join('').replace(/\./g, '')[0] === '#'
}

function checkVertically(arr, pos, dir) {
    let j = pos[1]
    const res = []
    if (dir === 'bottom') {
        for (let i = pos[0] + 1; i < arr.length; i++) {
            res.push(arr[i][j])
        }
    } else {
        for (let i = pos[0] - 1; i >= 0; i--) {
            res.push(arr[i][j])
        }
    }
    return res.join('').replace(/\./g, '')[0] === '#'

}