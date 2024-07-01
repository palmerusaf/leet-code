/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  return [];
};

[
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
  if (findWords(board, words).sort().toString() === exp.sort().toString()) {
    console.log("Test", index, "Passed");
  }
  console.log("Test", index, "Failed");
  console.log({ board, words, exp });
}
