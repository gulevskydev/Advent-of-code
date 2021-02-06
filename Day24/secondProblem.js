function secondProblem() {
  for (let i = 0; i < 100; i++) {
    newBlackTiles = new Set();
    const keys = blackTiles.keys();

    for (const tile of keys) {
      const [x, y] = tile.split('#').map((x) => parseInt(x));
      const cellsAround = getNeighbours(x, y);
      cellsAround.push({ x, y });
      for (const cell of cellsAround) {
        const id = coordinatesToId(cell.x, cell.y);
        const neighbours = getNeighbours(cell.x, cell.y);
        const totalBlack = neighbours.filter((n) =>
          blackTiles.has(coordinatesToId(n.x, n.y))
        ).length;

        if (blackTiles.has(id)) {
          totalBlack === 0 || totalBlack > 2
            ? newBlackTiles.delete(id)
            : newBlackTiles.add(id);
        } else {
          if (totalBlack === 2) {
            newBlackTiles.add(id);
          }
        }
      }
    }
    return newBlackTiles.size;
  }
}

function getNeighbours(x, y) {
  const result = [];
  for (const dir in dirToDelta) {
    result.push({
      x: x + dirToDelta[dir].dx,
      y: y + dirToDelta[dir].dy,
    });
  }
  return result;
}
