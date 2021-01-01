function secondProblem() {
    let ismap = true;
    const filtered = [];
    while (ismap) {
        ismap = false;
        Object.entries(store).forEach(([allergen, ingredients], index) => {
            if (ingredients.length === 1 && !filtered.includes(allergen)) {
                ismap = true;
                filtered.push(allergen);
                Object.entries(store).forEach(([a, i], idx) => {
                    if (idx === index) return;
                    store[a] = i.filter((x) => x !== ingredients[0]);
                });
            }
        });
    }

    return [...new Set(Object.entries(store).map(([a, i]) => [a, i]).sort((a, b) => (a[0] < b[0] ? -1 : 1)).map((a) => a[1]))].join(',');
}