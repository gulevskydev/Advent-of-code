const [r, m] = input.replace(/"/g, '').split('\n\n');
const messages = m.split('\n');

function firstProblem(rules) {
    let mainRules = `${rules}\n`;
    mainRules = mainRules.replace(/\n/g, ' \n');
    while (mainRules.indexOf('\n') >= 0) {
        const [match, i, str] = mainRules.match(/(\d+): ([^0-9\n$]+)\n/);
        if (i === '0') break;
        const hasPipe = str.indexOf('|') >= 0;
        while (mainRules.includes(` ${i} `)) {
            mainRules = mainRules.replace(new RegExp(` ${i} `, 'g'),hasPipe ? ` (${str}) ` : ` ${str} `,);
        }
        mainRules = mainRules.replace(match.trim(), '');
        mainRules = mainRules.replace(/\n\n/g, '\n');
    }
    mainRules = mainRules.replace('0: ', '');
    mainRules = mainRules.replace(/[\s]/g, '');
    mainRules = new RegExp(`^${mainRules}$`);
    return messages.reduce((a, b) => a + (mainRules.test(b) ? 1 : 0),0,);
};