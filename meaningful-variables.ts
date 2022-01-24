// Don't use abreviations
// BAD
const mcseDate = Date.now();

// GOOD
const microsoftCertifiedSoftwareEngineerDate = Date.now();

// Tic Tac Toe
// BAD
const playerMovement = new PlayerMovement(pos);

// GOOD
const playerMovement = new PlayerMovement(squarePosition);

// Loops
// BAD
questions.map((q) => q.description);

// GOOD
questions.map((question) => question.description);

// Indexes
// BAD
const i = users.findIndex((user) => user.name === "Gabriel");

// GOOD
const userIndex = users.findIndex((user) => user.name === "Gabriel");
