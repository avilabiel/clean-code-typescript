// TIC TAC TOE example
// BAD
if (
  [1, 4, 7].every((movement) => player.movements.includes(movement)) ||
  [2, 5, 8].every((movement) => player.movements.includes(movement)) ||
  [3, 6, 9].every((movement) => player.movements.includes(movement)) ||
  [1, 2, 3].every((movement) => player.movements.includes(movement)) ||
  [4, 5, 6].every((movement) => player.movements.includes(movement)) ||
  [7, 8, 9].every((movement) => player.movements.includes(movement)) ||
  [1, 5, 9].every((movement) => player.movements.includes(movement)) ||
  [3, 5, 7].every((movement) => player.movements.includes(movement))
) {
  return res.send({ message: "Player won" });
}

// GOOD
const didPlayerWinVertical =
  [1, 4, 7].every((movement) => player.movements.includes(movement)) ||
  [2, 5, 8].every((movement) => player.movements.includes(movement)) ||
  [3, 6, 9].every((movement) => player.movements.includes(movement));

const didPlayerWinHorizontal =
  [1, 2, 3].every((movement) => player.movements.includes(movement)) ||
  [4, 5, 6].every((movement) => player.movements.includes(movement)) ||
  [7, 8, 9].every((movement) => player.movements.includes(movement));

const didPlayerWinDiagonal =
  [1, 5, 9].every((movement) => player.movements.includes(movement)) ||
  [3, 5, 7].every((movement) => player.movements.includes(movement));

const didPlayerWin =
  didPlayerWinVertical || didPlayerWinHorizontal || didPlayerWinDiagonal;

if (didPlayerWin) {
  return res.send({ message: "Player won" });
}
