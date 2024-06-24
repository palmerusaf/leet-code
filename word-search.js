/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const [ROWS, COLS] = [board.length, board[0].length]
  const visited = new Set();
  function dfs(r, c, i) {
    if (i === word.length - 1) return true
    if (
      r < 0 ||
      c < 0 ||
      r > ROWS ||
      c > COLS ||
      word[i] !== board[r][c] ||
      visited.has(`${r},${c}`)
    ) return false
    visited.add(`${r},${c}`)
    console.log({ visitList: visited, thisSet: [r, c], hasVistited: visited.has(`${r},${c}`) })
    const res = (
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1)
    )
    visited.delete(`${r},${c}`)
    return res
  }
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (dfs(r, c, 0))
        return true
    }
  }
  return false
};

/*
const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
]
const word = "SEE"
console.log(
  exist(board, word)
)
//*/

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
]
const word = "ABCB"
console.log(
  exist(board, word)
)
