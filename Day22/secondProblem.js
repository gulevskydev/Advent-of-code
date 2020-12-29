function recursiveCombat(p1, p2) {
    const store = new Set();
    while(p1.length > 0 && p2.length > 0) {
        let winner;
        const hash = p1.join('§') + p2.join('§');
        if(store.has(hash)) {
            return {winner: 1};
        }
        const card1 = p1.shift(), card2 = p2.shift();
        store.add(hash);
        if(p1.length >= card1 && p2.length >= card2) {
            const {winner: player } = recursiveCombat(p1.slice(0, card1), p2.slice(0, card2));
            winner = player;
        } else {
            winner = card1 > card2 ? 1 : 2;
        }

        winner == 1 ? p1.push(card1,card2) : p2.push(card2,card1);
    }
    return {
        winner: p1.length > 0 ? 1 : 2,
        res: p1.length > 0 ? p1 : p2
    };
}
const {res} = recursiveCombat([...s1], [...s2]);
return res.reduce((a,c,i) => a + (c * (res.length - i)), 0);