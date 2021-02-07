function firstProblem(input) {
  const res = input.reduce((a, tile) => {
    let arr = tile
      .split('\n')
      .slice(1)
      .map((e) => e.split(''));
    [
      arr[0],
      arr.map((r) => r[0]),
      arr.map((r) => r[arr.length - 1]),
      arr[arr.length - 1],
    ].forEach((b) => {
      let t = [b, [...b].reverse()].sort()[0];
      a[t] = !a[t]
        ? [].concat(Number(tile.match(/^Tile (\d+):\n/)[1]))
        : a[t].concat(Number(tile.match(/^Tile (\d+):\n/)[1]));
    });
    return a;
  }, {});
  return Object.values(res)
    .filter((ids) => ids.length === 1)
    .flat()
    .filter((id, index, ids) => ids.indexOf(id) !== index)
    .reduce((a, b) => a * b, 1);
}
