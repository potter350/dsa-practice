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

    searchWord(word) {
        let searchWord = this.search(word)
        return searchWord.isEndOfWord
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
        return currentNode;
    }



    collectAllWords(array, node, storeKeys) {
        let currentNode = node || this.root;

        if (currentNode.isEndOfWord) {
            array.push(storeKeys)
        }

        for (const [key, childnode] of Object.entries(currentNode.children)) {
            this.collectAllWords(array, childnode, storeKeys + key)
        }
        return array
    }

    autoComplete(prefix) {
        let currentNode = this.search(prefix)
        console.log('search prefix', currentNode);

        if (!currentNode) return null;

        return this.collectAllWords([], currentNode, prefix)

    }







   

    printAllWordsFromTries(collection = [], node = null, word = '') {
        let currentNode = node || this.root

        if(currentNode.isEndOfWord){
            collection.push(word)
        }
        
        for(const [key, childnode] of Object.entries(currentNode.children) ){
            this.printAllWordsFromTries(collection, childnode, word + key)
            
        }
        return collection
    }

    autoSuggest(prefix){
        let currentNode = this.search(prefix)
        if(!currentNode) return null;

        return this.printAllWordsFromTries([],currentNode,prefix)
    }





}

export default Tries;
