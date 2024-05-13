class TrieNode {
    constructor() {
        this.children = {}
        this.endOfWord = false
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode()
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let cur = this.root
        for (const c of word.split('')) {
            if (cur.children[c] === undefined) {
                cur.children[c] = new TrieNode();
            }
            cur = cur.children[c]
        }
        cur.endOfWord = true
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let cur = this.root
        for (const c of word.split('')) {
            if (cur.children[c] === undefined) return false
            cur = cur.children[c]
        }
        return cur.endOfWord
    }
    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let cur = this.root
        for (const c of prefix.split('')) {
            if (cur.children[c] === undefined) return false
            cur = cur.children[c]
        }
        return true
    }
}




/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
