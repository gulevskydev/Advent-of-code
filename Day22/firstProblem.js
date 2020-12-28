function firstProblem(input) {
    input = input.map(e => e.split('\n'));
    let p1 = input[0].slice(1);
    let p2 = input[1].slice(1);
    while (p1.length && p2.length) {
        if (+p1[0] > +p2[0]) {
            let val1 = p1.shift();
            let val2 = p2.shift();
            p1.push(val1, val2)
        } else {
            let val1 = p1.shift();
            let val2 = p2.shift();
            p2.push(val2, val1)
        }
    }
    return p1.reduce((a, b, i) => a + +b * (p1.length - i), 0)
}