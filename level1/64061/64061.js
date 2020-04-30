const solution = (board, moves) => {
  const lanes = getLanes(board);
  const dolls = moves
    .map((position) => takeDoll(lanes, position))
    .filter((doll) => doll);
  const lastDolls = removeStackDolls(dolls);

  return dolls.length - lastDolls.length;
};

const getLanes = (board) => {
  const result = [];
  board.forEach((line) => {
    line
      .map((cell, i) => {
        return { cell, i };
      })
      .filter((o) => o.cell > 0)
      .forEach((o) => (result[o.i] = [...(result[o.i] || []), o.cell]));
  });
  return result;
};

const takeDoll = (lanes, position) => lanes[position - 1].shift();

const removeStackDolls = (dolls) =>
  dolls.reduce((bucket, doll) => {
    bucket[bucket.length - 1] === doll ? bucket.pop() : bucket.push(doll);
    return bucket;
  }, []);
