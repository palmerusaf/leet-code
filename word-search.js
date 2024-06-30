/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (!hasChars(board, word)) return false;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (dfs(r, c, 0)) {
        return true;
      }
    }
  }
  return false;

  function dfs(r, c, i) {
    if (!board[r] || !board[r][c]) return false;
    if (board[r][c] !== word[i]) return false;
    if (i === word.length - 1) return true;
    board[r][c] = "visited";
    const res =
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);
    board[r][c] = word[i];
    return res;
  }
  function hasChars(board, word) {
    let wc = {};
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        wc[board[i][j]] = (wc[board[i][j]] || 0) + 1;
      }
    }
    for (let i = 0; i < word.length; i++) {
      if (wc[word[i]] !== undefined && wc[word[i]] >= 0) {
        wc[word[i]]--;
      } else {
        return false;
      }
    }
    return true;
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
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    word: "AAB",
    exp: true,
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
