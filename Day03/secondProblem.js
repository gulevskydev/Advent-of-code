function countTheTrees(input) {
    let pos = 0;
    const res = [];
    const steps = [{
            r: 1,
            b: 1
        },
        {
            r: 3,
            b: 1
        },
        {
            r: 5,
            b: 1
        },
        {
            r: 7,
            b: 1
        },
        {
            r: 1,
            b: 2
        },
    ]
    for (let j = 0; j < steps.length; j++) {
        let count = 0;
        for (let i = 0; i < input.length; i += steps[j].b) {
            if (input[i][pos % input[i].length] === '#') count++;
            pos += steps[j].r;
        }
        pos = 0
        res.push(count);
    }
    return res.reduce((a, b) => a * b);
}