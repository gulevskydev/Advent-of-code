function secondProblem() {
    let rules = r.replace('8: 42', '8: ( 42 )+');
    rules = rules.replace(
        '11: 42 31',
        '11: 42 ( 42 ( 42  ( 42  31 )?  31 )? 31 )?  31',
    );
    let mainRules = `${rules}\n`;
    mainRules = mainRules.replace(/\n/g, ' \n');
    while (mainRules.indexOf('\n') >= 0) {
        const [match, i, str] = mainRules.match(/(\d+): ([^0-9\n$]+)\n/);
        if (i === '0') break;
        const isPiped = str.indexOf('|') >= 0;
        while (mainRules.includes(` ${i} `)) {
            mainRules = mainRules.replace(new RegExp(` ${i} `, 'g'), isPiped ? ` (${str}) ` : ` ${str} `, );
        }
        mainRules = mainRules.replace(match.trim(), '');
        mainRules = mainRules.replace(/\n\n/g, '\n');
    }
    mainRules = mainRules.replace('0: ', '');
    mainRules = mainRules.replace(/[\s]/g, '');

    mainRules = new RegExp(`^${mainRules}$`);
    return messages.reduce((a, b) => a + (mainRules.test(b) ? 1 : 0), 0, );
};