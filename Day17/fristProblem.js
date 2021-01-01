const grid3d = rows.map((r, rIdx) => r.split('').map((c, cIdx) => [`${cIdx},${rIdx},0`, c === '#']), );
const grid4d = rows.map((r, rIdx) => r.split('').map((c, cIdx) => [`${cIdx},${rIdx},0,0`, c === '#']), );
const makeGrid = (grid) => Object.fromEntries(grid.flat().filter(([, value]) => value));

function firstProblem() {
    let grid = makeGrid(grid3d);
    let maxX = grid3d[0].length;
    let minX = 0;
    let maxY = grid3d.length;
    let minY = 0;
    let minZ = 0;
    let maxZ = 0;
    for (let i = 0; i < 6; i++) {
        const updatedGrid = {};
        for (let z = minZ - 1; z <= maxZ + 1; z++) {
            for (let y = minY - 1; y <= maxY + 1; y++) {
                for (let x = minX - 1; x <= maxX + 1; x++) {
                    const activeNeighbours = getActive(grid, x, y, z);
                    const isActive = !!grid[`${x},${y},${z}`];

                    if (activeNeighbours === 3 || (isActive && activeNeighbours === 2)) {
                        updatedGrid[`${x},${y},${z}`] = true;
                    }
                }
            }
        }
        maxX++;
        minX--;
        maxY++;
        minY--;
        maxZ++;
        minZ--;
        grid = updatedGrid;
    }
    return Object.keys(grid).length;
};

function getActive4d(grid, x, y, z, w) {
    let count = 0;
    for (let i = z - 1; i <= z + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            for (let k = x - 1; k <= x + 1; k++) {
                for (let l = w - 1; l <= w + 1; l++) {
                    if (i === z && j === y && k === x && l === w) continue;
                    if (grid[`${k},${j},${i},${l}`]) count++;
                }
            }
        }
    }
    return count;
};

function getActive(grid, x, y, z) {
    let count = 0;
    for (let i = z - 1; i <= z + 1; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
            for (let k = x - 1; k <= x + 1; k++) {
                if (i === z && j === y && k === x) continue;
                if (grid[`${k},${j},${i}`]) count++;
            }
        }
    }
    return count;
};