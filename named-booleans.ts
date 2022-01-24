// TIC TAC TOE example
// BAD
if (
  user.movements.some((movement) => [1, 4, 7].includes(movement)) ||
  user.movements.some((movement) => [2, 5, 8].includes(movement)) ||
  user.movements.some((movement) => [3, 6, 9].includes(movement)) ||
  user.movements.some((movement) => [1, 2, 3].includes(movement)) ||
  user.movements.some((movement) => [4, 5, 6].includes(movement)) ||
  user.movements.some((movement) => [7, 8, 9].includes(movement)) ||
  user.movements.some((movement) => [1, 5, 9].includes(movement)) ||
  user.movements.some((movement) => [3, 5, 7].includes(movement))
) {
  return res.send({ message: "User won" });
}

// GOOD
const didUserWinVertical =
  user.movements.some((movement) => [1, 4, 7].includes(movement)) ||
  user.movements.some((movement) => [2, 5, 8].includes(movement)) ||
  user.movements.some((movement) => [3, 6, 9].includes(movement));

const didUserWinHorizontal =
  user.movements.some((movement) => [1, 2, 3].includes(movement)) ||
  user.movements.some((movement) => [4, 5, 6].includes(movement)) ||
  user.movements.some((movement) => [7, 8, 9].includes(movement));

const didUserWinDiagonal =
  user.movements.some((movement) => [1, 5, 9].includes(movement)) ||
  user.movements.some((movement) => [3, 5, 7].includes(movement));

const didUserWin =
  didUserWinVertical || didUserWinHorizontal || didUserWinDiagonal;

if (didUserWin) {
  return res.send({ message: "User won" });
}
