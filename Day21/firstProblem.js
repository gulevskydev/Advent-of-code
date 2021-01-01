function firstProblem(input) {
    input = input.replace(/[()]/g, '').split('\n').map((r) => r.split(' contains ').map((i) => i.split(/[,]? /)));
    let store = {};
    const allIngredients = input.map(([i]) => i).flat();
    input.forEach(([ingredients, allergens]) => {
        allergens.forEach((allergen) => {
          if (!store[allergen]) {
            store[allergen] = ingredients;
          } else {
            store[allergen] = [...store[allergen]].filter((i) =>
              ingredients.includes(i),
            );
          }
        })
    })
    store = Object.values(store).flat()
    return allIngredients.filter(e => !store.includes(e)).length
}