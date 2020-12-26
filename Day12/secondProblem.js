function firstProblem(input) {
    let xWaypoint = 10,
        yWaypoint = 1;
    let x = 0,
        y = 0
    for (let i = 0; i < input.length; i++) {
        if (input[i][0] === 'R' || input[i][0] === 'L') {
            const len = +input[i].slice(1)
            for (let j = 0; j < len; j += 90) {
                const currentXWaypoint = xWaypoint;
                const currentYWaypoint = yWaypoint;
                yWaypoint = input[i][0] === 'L' ? currentXWaypoint : -currentXWaypoint;
                xWaypoint = input[i][0] === 'L' ? -currentYWaypoint : currentYWaypoint;
            }
        } else if (input[i][0] === 'F') {
            x += (input[i].slice(1) * xWaypoint);
            y += (input[i].slice(1) * yWaypoint);
        } else {
            if (input[i][0] === 'N') yWaypoint += +input[i].slice(1);
            else if (input[i][0] === 'S') yWaypoint -= +input[i].slice(1);
            else if (input[i][0] === 'E') xWaypoint += +input[i].slice(1);
            else xWaypoint -= +input[i].slice(1);
        }
    }
    return Math.abs(x) + Math.abs(y)
}