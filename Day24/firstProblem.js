function firstProblem(lines) {
  const dirToDelta = {
    nw: { dx: 0, dy: -1 },
    sw: { dx: -1, dy: 1 },
    w: { dx: -1, dy: 0 },
    e: { dx: 1, dy: 0 },
    ne: { dx: 1, dy: -1 },
    se: { dx: 0, dy: 1 },
  };

  let blackTiles = new Set();
  let x, y;

  lines.forEach((line) => {
    x = 0;
    y = 0;
    const directions = [...line.matchAll(/e|se|sw|w|nw|ne/g)].map((x) => x[0]);

    directions.forEach((direction) => {
      x += dirToDelta[direction].dx;
      y += dirToDelta[direction].dy;
    });

    const key = `${x}#${y}`;
    blackTiles.has(key) ? blackTiles.delete(key) : blackTiles.add(key);
  });
  return blackTiles.size;
}
