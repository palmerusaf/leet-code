/** @typedef {{children:{[string]:TrieNode},word:boolean}} TrieNode  */

/**
 * @type TrieNode
 */
class TrieNode {
  constructor() {
    return { children: {}, word: false };
  }
}
class WordDictionary {
  /** @type TrieNode */
  root;
  constructor() {
    this.root = new TrieNode();
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let iter = this.root;
    for (const c of word) {
      if (iter.children[c] === undefined) {
        iter.children[c] = new TrieNode();
      } else {
        iter = iter.children[c];
      }
      iter.word = true;
    }
    return null;
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    return dfs(0, this.root);
    function dfs(j, root) {
      let iter = root;
      for (let i = j; i < word.length; i++) {
        if (word[i] === ".") {
          for (const child of Object.values(iter.children)) {
            if (dfs(i + 1, child)) return true;
          }
        }
        if (iter.children[word[i]] === undefined) {
          return false;
        }
      }
      return iter.word;
    }
  }
}

const test1 = {
  call: [
    "WordDictionary",
    "addWord",
    "addWord",
    "addWord",
    "search",
    "search",
    "search",
    "search",
  ],
  para: [[], ["bad"], ["dad"], ["mad"], ["pad"], ["bad"], [".ad"], ["b.."]],
  exp: [null, null, null, null, false, true, true, true],
};

/**
 * @typedef {typeof test1} Test
 */

/**
 * @type Test[]
 */
[test1].forEach(runTest);

/**
 * @param {Test} {}
 * @param {number} index
 */
function runTest({ exp, call, para }, index) {
  index++;
  const wd = new WordDictionary();
  for (let i = 1; i < call.length; i++) {
    if (wd[call[i]](para[i][0]) !== exp[i]) {
      console.log("Test", index, "Failed");
      console.log({ call: call[i], arg: para[i][0], exp: exp[i] });
      return;
    }
  }
  console.log("Test", index, "Passed");
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
