import TrieNode from "./TrieNode.js";

// Trie data structure class
export class Tries {
    constructor() {
        // Initialize the root node of the Trie
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let currentNode = this.root;

        // Traverse each character of the word
        for (const char of word) {
            // If the character exists as a child, move to it
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char];
            } else {
                // If not, create a new TrieNode and move to it
                let newNode = new TrieNode();
                currentNode.children[char] = newNode;
                currentNode = newNode;
            }
        }

        // After inserting all characters, mark the end of the word
        return currentNode.isEndOfWord = true;
    }

    // Search for a word in the Trie
    search(word) {
        let currentNode = this.root;

        // Traverse each character of the word
        for (const char of word) {
            // If the character exists, continue traversal
            if (currentNode.children[char]) {
                currentNode = currentNode.children[char];
            } else {
                // If any character is missing, word doesn't exist
                return false;
            }
        }

        // Return true only if it's the end of a complete word
        return currentNode.isEndOfWord;
    }
}

export default Tries;
