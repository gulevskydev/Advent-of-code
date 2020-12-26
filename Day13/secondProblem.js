function firstProblem(input) {
    let count = 0;
    let c = +input[0];
    input.slice(1).forEach((el, i) => {
        if (el !== 'x') {
            el = Number(el);
            while ((count + i + 1) % el !== 0) count += c
            c *= el
        }
    })
    return count
}