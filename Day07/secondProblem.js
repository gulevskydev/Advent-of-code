function getCountOfBags(input) {
    let sum = -1;
    getCount(input, 'shiny gold', 1)

    function getCount(input, value, num) {
        sum += num
        const startValues = input.split('\n').find(e => e.split(' bags contain ')[0] === value).split(' bags contain ')[1]
            .split(',').map(e => e.replace(/bags/g, '').replace(/bag/g, '').replace(/\./g, '').trim());
        if (startValues.join('') !== 'no other') {
            for (let i = 0; i < startValues.length; i++) {
                getCount(input, startValues[i].slice(2), +startValues[i][0] * num)
            }
        }
    }
    return sum
}