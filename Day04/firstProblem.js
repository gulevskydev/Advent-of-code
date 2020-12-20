function isValidPasport(input) {
    let count = 0;
    const requiredData = ['ecl', 'byr', 'eyr', 'hgt', 'hcl', 'pid', 'iyr'];
    for (let i = 0; i < input.length; i++) {
        if (requiredData.every(el => input[i].includes(el))) count++
    }
    return count;
}