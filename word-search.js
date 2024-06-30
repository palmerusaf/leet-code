/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }
  return false;

  function dfs(r, c, i) {
    if (!board[r][c]) return false;
    if (board[r][c] !== word[i]) return false;
  }
};

const testData = [
  {
    board: [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word: "ABCCED",
    exp: true,
  },
  {
    board: [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word: "ABCB",
    exp: false,
  },
  {
    board: [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    word: "SEE",
    exp: true,
  },
];

let testNum = 1;
for (const { board, word, exp } of testData) {
  if (exist(board, word) === exp) {
    console.log(`Passed Test ${testNum}`);
  } else {
    console.log(`Failed Test ${testNum}`);
    // console.log({ board, word, exp });
  }
  testNum++;
}
