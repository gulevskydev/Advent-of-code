function firstSolution() {
    let val = 1;
    let count = 0;
    while (val !== card) {
        val *= 7;
        val %= 20201227;
        count++;
    }
    val = 1;
    for (let i = 0; i < count; i++) {
        val *= door;
        val %= 20201227;
    }
    return val;
};