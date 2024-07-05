/**
 * @typedef {{children:{[string]:PNode},wordIndex:number|-1}} PNode
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  // build prefix tree
  /** @type PNode */
  const root = { wordIndex: -1, children: {} };
  for (let i = 0; i < words.length; i++) {
    let iter = root;
    for (let c = 0; c < words[i].length; c++) {
      const char = words[i][c];
      if (iter.children[char] === undefined) {
        iter.children[char] = { children: {}, wordIndex: -1 };
      }
      iter = iter.children[char];
    }
    iter.wordIndex = i;
  }
  const res = new Set();
  /**
   * @param {character[][]} board
   * @param {PNode} iter
   */
  const dfs = (r, c, iter) => {
    if (iter === undefined) return;
    if (iter.wordIndex > -1) res.add(words[iter.wordIndex]);
    if (!board[r] || !board[r][c]) return;
    const char = board[r][c];
    board[r][c] = "*";
    dfs(r + 1, c, iter.children[char]);
    dfs(r - 1, c, iter.children[char]);
    dfs(r, c + 1, iter.children[char]);
    dfs(r, c - 1, iter.children[char]);
    board[r][c] = char;
  };
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      dfs(r, c, root);
    }
  }
  return [...res.values()];
};

[
  {
    board: [["a", "b"]],
    words: ["ba"],
    exp: ["ba"],
  },
  {
    board: [["a"]],
    words: ["a"],
    exp: ["a"],
  },
  {
    board: [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    words: ["oath", "pea", "eat", "rain"],
    exp: ["eat", "oath"],
  },
].forEach(runTest);

function runTest({ board, words, exp }, index) {
  index++;
  const res = findWords(board, words);
  if (res.sort().toString() === exp.sort().toString()) {
    console.log("Test", index, "Passed");
  } else {
    console.log("Test", index, "Failed");
    console.log({ board, words, exp, res });
  }
}
