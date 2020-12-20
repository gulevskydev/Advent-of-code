function isValidPassword (input) {
    let count = 0;
        for(let i = 0; i < input.length; i++) {
            const range = input[i][0].split('-')
            const char = input[i][1][0];
            const len =  input[i][2].split('').filter(e => e === char).length;
            if(len >= range[0] && len <= range[1]) count++;
        }
    return count;
}