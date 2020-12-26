function firstProblem(input) {
    const coord = {
        'W': 0,
        'E': 0,
        'N': 0,
        "S": 0,
    }
    let currentDirection = 'E',
        currentDegree = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i][0] === 'F') {
            coord[currentDirection] += +input[i].slice(1);
        } else if (input[i][0] === 'R' || input[i][0] === 'L') {
            if (input[i][0] === 'R') {
                currentDegree = (360 + currentDegree + +input[i].slice(1)) % 360;
            } else {
                currentDegree = (360 + currentDegree - +input[i].slice(1)) % 360;
            }

        } else coord[input[i][0]] += +input[i].slice(1)
        currentDirection = currentDegree === 0 ? 'E' : currentDegree === 90 ? 'S' : currentDegree === 180 ? 'W' : 'N';
    }
    return Math.abs(coord['N'] - coord['S']) + Math.abs(coord['E'] - coord['W']);
}