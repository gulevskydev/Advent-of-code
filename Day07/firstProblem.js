function getBugsValue(input) {
    let res = [];
    parse('shiny gold');
    for (let i = 0; i < res.length; i++) {
        parse(res[i]);
    }
    return res.length

    function parse(value) {
        const r = input.split('\n').map(e => e.split(' bags contain ')).forEach(e => {
            if (e[1].includes(value) && res.indexOf(e[0]) === -1) res.push(e[0])
        })
    }
}