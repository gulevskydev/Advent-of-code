function isValidPasport(input) {
    let count = 0;
    for (let i = 2; i < input.length; i++) {
        const str = input[i].replace(/\n/g, ' ').split(' ').map(e => e.split(':'))
        let l = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j][0] === 'byr' && str[j][1].length === 4 && str[j][1] >= 1920 && str[j][1] <= 2002) {
                l++
            } else if (str[j][0] === 'iyr' && str[j][1].length === 4 && str[j][1] >= 2010 && str[j][1] <= 2020) {
                l++
            } else if (str[j][0] === 'eyr' && str[j][1].length === 4 && str[j][1] >= 2020 && str[j][1] <= 2030) {
                l++
            } else if (str[j][0] === 'hgt') {
                if (str[j][1].endsWith('cm') && str[j][1].slice(0, str[j][1].length - 2) >= 150 && str[j][1].slice(0, str[j][1].length - 2) <= 193) {
                    l++
                } else if (str[j][1].endsWith('in') && str[j][1].slice(0, str[j][1].length - 2) >= 59 && str[j][1].slice(0, str[j][1].length - 2) <= 76) {
                    l++
                }
            } else if (str[j][0] === 'hcl' && str[j][1].slice(1).length === 6 && str[j][1].split('').slice(1).every(e => '0123456789abcdef'.includes(e))) {
                l++

            } else if (str[j][0] === 'ecl' && ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(str[j][1])) {
                l++
            } else if (str[j][0] === 'pid' && str[j][1].split('').every(e => !isNaN(e)) && str[j][1].length === 9) {
                l++
            }
        }
        if (l === 7) count++
        l = 0
    }
    return count;
}