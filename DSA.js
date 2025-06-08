
// linear search
// function linearSearch(arr, searchValue){
//      for (let i = 0; i < arr.length ; i++){
//             if(arr[i]==searchValue){
//                 return i
//             }
//      }
// }

// linearSearch([1,2,3,4,5,6,7,8,9],25)

//greatestProduct
// function greatestProduct(arr){
//     let greatestProduct = arr[0] * arr[1]
//     let steps = 1
//     for (const [indexI, valueI] of arr.entries()){
//         steps++
//         for (const [indexJ, valueJ] of arr.entries()){
//             steps++
//             if(indexI !== indexJ && valueI * valueJ > greatestProduct ){
//                     greatestProduct = valueI * valueJ
//             }
//         }
//     }
//     console.log('steps', steps)
//     console.log('greatestProduct', greatestProduct)
//     return greatestProduct
// }
// greatestProduct([1,2,3,4,5,6,7,8,9]) 



// Greatest Number
// function GreatestNumber(arr){
//     let gNumber = arr[0]
//     for (let i =0; i < arr.length ; i++){
//         if(arr[i] > gNumber){gNumber = arr[i]}
//     }
//     console.log('gNumber', gNumber)
//     return gNumber
// }

// ages = [12, 23, 45, 67, 89, 34, 56, 78]
// GreatestNumber(ages)


// chapter 8

// hash function to find intersection of 2 array
// function intersection(arr1, arr2){
//     let hash2 = {}
//     let intersection = []
//     if(!arr1.length || !arr2.length) return "no intresection"
    
//     for (const value of arr2){
//         hash2[value] = true
//     }
    
//     for(const value of arr1){
//          if(hash2[value]) intersection.push(value)
//     }
   
//     console.log('intersection', intersection)
//     return intersection
// }
// intersection([1,2,3,4,5,6,7,8,9], [5,6,7,8,9])




// finding duplicates in array of strings
// function duplicates(arr){
//     if(!arr.length) return "Array is Empty"
//     let hash = {}
//     let dup = []
//     for(const value of arr){
//         if(hash[value]){ dup.push(value)}
//         else hash[value]= true;
//     }
//     console.log('hash', hash, dup)
// }

// duplicates(["a", "b", "c", "d", "c", "e", "f"])


// find missing alphabets
// function missingAlphabet(string){
//     let alphabets = Array.from({length:26}, (_,i) => String.fromCharCode(97 + i) )
//     hash1 = {}
//     receivedString = string.replaceAll(' ','')
//     missiedLetter = []
//     for(const value of receivedString){
//         hash1[value] = true
//     }
//     for (const value of alphabets){
//         if( !hash1[value]) missiedLetter.push(value)
//     }
//     console.log('missiedLetter',missiedLetter)
//     return missiedLetter
// }
// missingAlphabet("the quick brown box jumps over a lazy dog")


// finding first non-duplicate from string
// function nonDuplicate(string){
//     let hash ={}
//     let rString = string.replaceAll(' ', '')
//     let nonDuplicateLetter = []
//     if(rString.length){
//         for(let i=0; i < rString.length; i++){
//             if(hash[rString[i]]){
//                hash[rString[i]] = (hash[rString[i]] || 0 ) + 1
//             }else{
//                hash[rString[i]] = 1
//             }
//         }
//         for(let i=0; i<rString.length; i++){
//             if(hash[rString[i]] === 1){
//                 nonDuplicateLetter.push(rString[i])
//             }
//         }
//         console.log('rString hash',nonDuplicateLetter[0])
//     }
// }
// nonDuplicate('minimum')

// // testing stack
// import linter from "./stackLint.js";
//      function testingStack(text){
//         const testingStackLint = new linter()
//          testingStackLint.lint(text)
//          console.log('testingStack output',testingStackLint.lint(text))
//      }
// testingStack( "(let x = a")

// testing Queue
// import printManager from "./queuePrint.js";
//        function testingQueue(){
//             const testPrint = new printManager()
//             testPrint.addPrintDocument('First Document')
//             testPrint.addPrintDocument('Second Document')
//             testPrint.addPrintDocument('Third Document')
//             testPrint.run()
//        }
// testingQueue()

// // reverse a string using stack 
// import stack from "./stack.js";
// function reverseStringByStack(string){
//      let rString = string.replaceAll(' ', '')
//      let reverseString = []
//      const Stack = new stack();
//      for(const char of rString){
//         Stack.push(char)
//      }
//      while(Stack.read()){
//         reverseString += Stack.pop()
//      }
//      console.log('reverseString',reverseString);
//      return reverseString
// }
//       reverseStringByStack('abcdefghi')


// // countdown function for nasa
// function countdown(number){
//   while(number > 0){
//     console.log(number)
//     number--
//   }
// }
// countdown(10)


// // Recursion
// function factorial(number){
//     if(number <= 1){
//         console.log('base case',1)
//         return 1
//     }else{
//         let finalFactorial =  number * factorial(number - 1)
//         console.log('finalFactorial',finalFactorial)
//         return finalFactorial
//     }
// }
// factorial(8)


// // recursive file system traversal ---------------------------------((((Pending))))
// import { readdirSync, lstatSync } from 'fs';
// import { join } from 'path';
// function printSubDirectories(directory){
//    for(const filename of readdirSync(directory)){
//       console.log('filename',filename);
      
//    }
// }
// printSubDirectories("/")


// function sum(low, high){
//     if(high === low){
//         return 1
//     }else{
//         let finalSum = high + sum(low, high - 1)
//         console.log(finalSum);
        
//         return finalSum
//     }
// }
// sum (1, 10)


// flatten the array of array by recursion

// function arrayFlatten(arr){

//   if(!Array.isArray(arr)){
//      throw new TypeError ('Input must be an array')
//   }
//   const result = [];
// //   IIFE Immediately invoked function expression
//       (function recurse(current){
//          for(const item of current){
//             if(Array.isArray(item)){
//                 recurse(item)
//             }else{
//                 result.push(item)
//             }
//          }
//       })(arr)
//      return result
// }

// let array2 = [ 1,
// 2,
// 3,
// [4, 5, 6],
// 7,
// [8,
// [9, 10, 11,
// [12, 13, 14]
// ]
// ],
// [15, 16, 17, 18, 19,
// [20, 21, 22,
// [23, 24, 25,
// [26, 27, 29]
// ], 30, 31
// ], 32
// ], 33
// ]

// let flat = arrayFlatten(array2)
// console.log('flat',flat)




// recursive function to sum array
// function sum(array, index = 0){
//     if( array.length == 0) return null
//     console.log(`${index, array.slice(1)}`);
//     index ++
//     return  array[0] + sum(array.slice(1))
// }
// let output = sum([1,2,3,4,5])
// console.log('output',output);

// reverse a string using recursion
// function reverseString(string, index = 1){
//     if(index >= string.length) return string.charAt(0);
//     return string.charAt(string.length - index) + reverseString(string, index + 1)
// }

// function reverse(string){
//     if(string.length === 0) {return '';}
//      return reverse( string.slice(1)) +  string[0] 
// }
// // let result = reverseString('abcde')
// let result = reverse('abcde')
// console.log('result string',result)

// count x
// function countX(text){
//     if(text.length == 0) return 0;
//    if(text[0] == 'x'){
//       return 1 + countX(text.slice(1))
//    }else{
//       return countX(text.slice(1))
//    }
// }
// console.log('countX',countX('asdxa'))

// staircase f(n) = f(n-1) + f(n-2) + f(n-3)
// function numberOfPath(n){
//     if(n < 0){
//         return 0
//     }
//     else if(n === 0 ){
//         return 1
//     }

//     return (numberOfPath(n-1) + numberOfPath(n-2) + numberOfPath(n-3))
// }
// console.log('numberOfPath',numberOfPath(1))




// anagram (permutations)
// function anagramsOf(text){
//     if(text.length === 1){ return [text[0]] }

//     const collection = []
//     let subtextAnagrams = anagramsOf(text.slice(1))

//     for(const subtextAnagram of subtextAnagrams){
//           for(let index=0; index<=subtextAnagram.length; index++){
//               const newText = (
//                                 subtextAnagram.slice(0, index)  + 
//                                 text[0] + 
//                                 subtextAnagram.slice(index)
//               )
//               collection.push(newText)
//           }
//     }

//     return collection;
// }
// let checking = anagramsOf('radar')
// console.log('checking anagrom', checking);


// -----------------------------------------------------  exsercise ----------------------------------------------------------
// 1.Use recursion to write a function that accepts an array
// of strings and returns the total number of characters
// across all the strings. For example, if the input array is
// ["ab", "c", "def", "ghij"], the output should be 10 since there are
// ten characters in total.

// function stringLength(arr){
//     if(arr.length == 0) return 0
//         return arr[0].length + stringLength(arr.slice(1))
// }
// let checkingStringLength = stringLength(['asdas','s','scaer'])
// console.log('checkingStringLength',checkingStringLength);

// // 2. Use recursion to write a function that accepts an array
// // of numbers and returns a new array containing just the
// // even numbers.

// function findEvenNumber(arr, result = []){
//     if(arr.length == 0) return result;
//     if(arr[0] % 2 == 0 ){ result.push(arr[0]) }
//     findEvenNumber(arr.slice(1), result)
//     return result
// }
// let evenNumber = findEvenNumber([1,2,3,4])
// console.log('evenNumber',evenNumber);


// 3.A particular numerical sequence is known as triangular
// numbers.The pattern begins as 1, 3, 6, 10, 15, 21, and
// continues onward.To calculate the next number in the
// sequence, we add the previous number from the
// sequence plus N, where N corresponds to the place in
//     the sequence where the number lies.For example, the
// seventh number in the sequence is 28, since it’s the
// seventh number in the pattern, so we add the number 7
// plus 21(the previous number in the sequence).Write a
// function that accepts a number for N and returns the
// correct number from the series; that is, if the function
//     was passed the number 7, the function would return 28.

// function triangularSeries(n){
//     if(n == 1) return 1
//     return n + triangularSeries(n-1)
// }
// let nthNumber = triangularSeries(15)
// console.log('nthNumber',nthNumber);



// 4.Use recursion to write a function that accepts a string
// and returns the first index that contains the character
// “x”. For example, the string, "abcdefghijklmnopqrstuvwxyz" has
// an “x” at index 23. To keep things simple, assume the
// string definitely has at least one “x”.

// function findLetterIndex(text, letter, index = 0){
//     if(text.length == 0) return index = -1;
//     if (text[0] === letter){ return index;}
//     return findLetterIndex(text.slice(1), letter, index + 1)
// }
// const letterIndex = findLetterIndex('dragon warrior', 'i')
// console.log('letterIndex',letterIndex);



// 5. This problem is known as the unique paths problem.
// Let’s say you have a grid of rows and columns. Write a
// function that accepts a number of rows and a number of
// columns and calculates the number of possible
// “shortest” paths from the upper-leftmost square to the
// lower-rightmost square.
// For example, here’s what the grid looks like with three
// rows and seven columns. You want to get from the S
// (Start) to the F (Finish).
// By “shortest” path, I mean that at every step, either
// you’re moving one step to the right:
// Or you’re moving one step downward:
// Again, your function should calculate the number of
// shortest paths.

// function uniquePath(rows, columns){
//     if(rows === 1 || columns === 1){
//         return 1
//     }
//     return uniquePath(rows - 1, columns) + uniquePath(rows , columns - 1)
// }

// const path = uniquePath(3, 7)
// console.log('path',path);




















// ---------------------------------------- Dynamic Programming --------------------------------------------
// function max(array, index = 0) {
//     console.log('recursion called' )
// if (array.length === 0) { return null; }
// if (array.length === 1) { return array[0]; }

// const maxValue = max(array.slice(1))
// if (array[0] > maxValue) {
// return array[0];
// } else {
// return maxValue;
// }
// }
// max([1,2,3,4])


// fibonacci series by recusrion
// let memologcount = 0

// function fibMemo(n, memo={}){
//     memologcount++
//     if(n === 0 || n === 1  )return n;
//     if(!memo[n]){
//         memo[n] = fibMemo(n-2, memo) + fibMemo(n-1, memo);
//     }
//     console.log('memo',memo);
    
//     return memo[n]
// }
// console.log('fib',fibMemo(10), 'memologcount',memologcount,)


// let count = 0
// function addUntil100(array) {
//     count++
// if (array.length === 0) { return 0; }
// let maxValue = addUntil100(array.slice(1))
// if (array[0] + maxValue > 100) {
// return maxValue;
// } else {
// return array[0] + maxValue;
// }
// }
// console.log(addUntil100([25,4,6,8,9,1,55,9,5,7,88,8,9]), count)


// let count = 0;
// function golomb(n) {
// count++
// if (n === 1) { return 1; }
// return 1 + golomb(n - golomb(golomb(n - 1)));
// }
// console.log(golomb(10), 'count -',count)






//-------------------------------------------------quick sort ---------------------------------------------

class sortArray{
    constructor(array){
        this.array = array
    }
// [2,0,3,6,1,8,4]
    partition(leftPointer, rightPointer) {
        //  prepared left, right, pivot 
        const pivotIndex = rightPointer
        const pivot = this.array[pivotIndex]

        rightPointer = pivotIndex - 1

        while (true) {
            while (this.array[leftPointer] < pivot) {
                leftPointer += 1
            }

            while (this.array[rightPointer] > pivot) {
                rightPointer -= 1
            }

            if (leftPointer >= rightPointer) {
                break
            } else {
                [this.array[leftPointer], this.array[rightPointer]] =
                    [this.array[rightPointer], this.array[leftPointer]]

                leftPointer += 1
                // rightPointer -= 1
            }

        }
        [this.array[leftPointer], this.array[pivotIndex]] =
            [this.array[pivotIndex], this.array[leftPointer]]

        return leftPointer;

    }

    // recursion for sub array partition
    quickSort(leftIndex, rightIndex){
        if(rightIndex - leftIndex <= 0){
            return
        }

        const pivotIndex = this.partition(leftIndex, rightIndex)
        this.quickSort(leftIndex, pivotIndex - 1)
        this.quickSort(pivotIndex + 1 , rightIndex)
        return this.array
    }
}

const tokens = [2,0,3,6,1,8,4]
// const sortableArray = new sortArray(tokens)
// sortableArray.quickSort(0 , tokens.length - 1)
// console.log('sortableArray',sortableArray.array)


// staircase
let count = 0
let memocount = 0

// without memoization
function staircase(n){
    count ++;
    if(n < 0) return 0;
    if(n === 0 || n === 1){
        return 1
    }
    return staircase(n-1) + staircase(n-2) + staircase(n-3)
}

// console.log('staircase',staircase(11), 'count -',count)

// with memoization
function memoStaircase(n, memo = {}){
    memocount ++;
    if(n < 0) return 0;
    if(n === 0 || n === 1){
        return 1
    }

    if(!memo[n]){
        memo[n] =  staircase(n-1, memo) + staircase(n-2, memo) + staircase(n-3, memo)
    }

    return memo[n]
}
// console.log('memoStaircase',memoStaircase(11), 'memocount -',memocount,)


// anagram  abc
let anagramCount = 0;
function anagramOf(string){
    anagramCount ++;
    if(string.length === 1) return [string[0]];
    const collection = []
    const substringAnagrams = anagramOf(string.slice(1))

    for(const anagram of substringAnagrams){
        for(let i=0; i<=anagram.length; i++){
            const newString = anagram.slice(i) + string[0] + anagram.slice(0, i)
            collection.push(newString)
        }
    }

    return collection;
}

// console.log('anagramOf',anagramOf('abcdefgh'), 'anagramCount -',anagramCount);













// move zero to end without creating additonal space
let array = [6,8,0,4,7,0,2,0,9];
//          [9,0,2,0,7,4,0,8,6]
function reverseArray(array7){
   let halfLength = Math.floor((array.length) / 2)
   let length =  array.length - 1
   for(let i=0; i<halfLength; i++){
       let first = array[i]
       let last = array[length - i]
       array[i] = last
       array[length - i] = first
   }
   return array
}
// console.log('reverseArray',reverseArray(array))

//          [0,8,9,4,0,0,2,0]
function moveZero(arr){
    if(!arr.includes(0)){return arr}
        let length = arr.length - 1
        let leftPointer = 0;
         for(let i=0; i<arr.length; i++){
              if(arr[i] !== 0 ){
                [ arr[leftPointer], arr[i] ] = [ arr[i], arr[leftPointer] ]
                leftPointer ++;
              }
         }
         return arr;
}
// const testingMoveZero = moveZero(array)
// console.log('testingMoveZero',testingMoveZero);


// find greatest number in array
const numbers = [6,8,9,4,3,11,2,42]
// O(N)
function greatestNumber1(array){
    if(array.length == 1) return array;
    let greatestNum = array[0]
    for(let i=0; i < array.length; i++){
       if(greatestNum < array[i]){
          greatestNum = array[i]
       }
    }
       return greatestNum
}
// console.log('greatestNumber 1',greatestNumber1(numbers))

// O(N Log N)
function greatestNumber2(array){
    if(array.length == 1) return array;
    const sortableArray = new sortArray(array)
    const sortedArray = sortableArray.quickSort(0 , array.length -1)
    return sortedArray [ array.length - 1]
}
// console.log('greatestNumber 2',greatestNumber2(numbers))

// O(N2)
function greatestNumber3(array){
    if(array.length == 1) return array;
     let greatestNum = true ;
     for(let i=0; i<array.length; i++){
        greatestNum = true
        for(let j=0; j<array.length; j++){
             if(array[j] > array[i]){
                 greatestNum = false;
                 break
             }
        }
        if(greatestNum) return array[i]
     }
     return greatestNum
}
// console.log('greatestNumber 3',greatestNumber3(numbers))






// ----------------------------------------- Node Based Data Strucutres -------------------------------


// ----------  single ended LinkedList --------------------------
import LinkedList from "./NodeBased_Data-structures/LinkedList.js"
import Node from "./NodeBased_Data-structures/SingleEnded-node.js"

// const node1 = new Node('A')
// const node2 = new Node('B')
// const node3 = new Node('C')
// const node4 = new Node('D')

// node1.nextNode = node2
// node2.nextNode = node3
// node3.nextNode = node4

// const list =  new LinkedList(node1)
// console.log('list', list)
// console.log('list read', list.read(3))
// console.log('list search', list.search('a'))
//  list.insert('bloody', 3)S
// console.log('list lastValue', list.lastValue())

//  list.delete(4)
// console.log('list ', list)
// console.log('list length', list.length())
// console.log('list ',list);
// list.reverseList()
// console.log('list after reverseList',list);
//  Here’s a tricky one. Add a method to the classic LinkedList
// class that reverses the list; that is, if the original list is A
// -> B -> C, all of the list’s links should change so that C -
// > B -> A.


// delete node in middle
// list.nodeToDeleteMiddle(node3)
// console.log('list after nodeToDeleteMiddle ',list);



// ------------- Double Linked List --------------
import QueueLinkedList from "./NodeBased_Data-structures/Queue_DoubleLinkedList.js"

const queue = new QueueLinkedList()
// queue.enqueue('Hello Wolrd to Node based data structures')
// queue.enqueue('Visiting Nodes')
// console.log('queue enqueue', queue )
// console.log('queue dequeue', queue.dequeue() )
// console.log('queue reverse', queue.reverse() )











// ----------------------- Binary Search Tree --------------------------

import TreeNode from "./NodeBased_Data-structures/BinarySearch-Tree/TreeNode.js"
import BinarySearchTree from "./NodeBased_Data-structures/BinarySearch-Tree/BinarySearchTree.js"

const node11 = new TreeNode(9)
const node12 = new TreeNode(14)

const node13 = new TreeNode(22)
const node14 = new TreeNode(31)

const node15 = new TreeNode(36)
const node16 = new TreeNode(62)

const node17 = new TreeNode(77)
const node18 = new TreeNode(96)

50,25,10,9,14,23,22,31,75,59,36,62,87,77,96
const node3 = new TreeNode(10, node11, node12)
const node4 = new TreeNode(23, node13, node14)

const node5 = new TreeNode(59, node15, node16)
const node6 = new TreeNode(87, node17, node18)

const node1 = new TreeNode(25, node3, node4)
const node2 = new TreeNode(75, node5, node6)

let root = new TreeNode(50, node1, node2)

console.log('root tree', root)

let countNode = 1

function searchNode(searchValue, node){
    if(!node || searchValue === node.data ){
        return node
    }
    
    if(searchValue < node.data){
        return searchNode(searchValue, node.leftChild)
    }
    else if(searchValue > node.data){
        return searchNode(searchValue, node.rightChild)
    }
}

function insertNode(value, node){
   if(value < node.data){
        if(!node.leftChild){
             node.leftChild = new TreeNode(value)
        }else{
             insertNode(value, node.leftChild)
        }
   }
   else if(value > node.data){
       if(!node.rightChild){
         node.rightChild = new TreeNode(value)
       }else{
             insertNode(value, node.rightChild)
       }
   }
}

// let testingInsertNodes = insertNode(11, root)
// let testingSearchNodes = searchNode(11, root)
// let BST = new BinarySearchTree()
// let restingDeleteNodes = BST.deleteNode(9, root)
// let traversingNodes = BST.traverseAndPrint(root)

//  console.log('restingDeleteNodes',root)
//  console.log('traversingNodes',traversingNodes)







// ------------------- Binary Search Tree exercises -----------------
let rootNode = new TreeNode()
let BST = new BinarySearchTree()


function insertValuesInToEmptyBST(){
       let  insertArray =  [1, 5, 9, 2, 4, 10, 6, 3, 8] 
       let root = new TreeNode(1)
       insertArray.forEach( (x)=> {
          BST.insertNode(x, root)
       })
       console.log('root',root);
       return root
       

}
// insertValuesInToEmptyBST()

// let testingFindGreatestInBST = BST.findGreatestNumber(root)
// console.log('testingFindGreatestInBST',testingFindGreatestInBST);













// ------------------------------- Heaps -----------------------

// import Heap from "./NodeBased_Data-structures/PriorityQueues-Heaps/Heap.js"
// const heap = new Heap()
// heap.insert(50)
// heap.insert(52)
// heap.insert(125)
// heap.insert(42)
// heap.insert(37)
// heap.insert(18)
// let index = 1
// console.log('heap',heap.data)
// console.log('heap',heap.pop(),heap)




// --------------------------- Tries -----------------------------

import Tries from "./NodeBased_Data-structures/Tries/Tries.js"

let testingTries = new Tries()
console.log('testingTries', testingTries);
console.log('testingTries',testingTries.insert('cat'), testingTries);

const commonlySearchedWords = [
  "weather", "news", "facebook", "youtube", "google",
  "translate", "maps", "near me", "restaurants", "movies",
  "covid", "whatsapp", "instagram", "login", "amazon",
  "flipkart", "cricket", "score", "time", "date",
  "speed test", "calculator", "online", "download", "song",
  "photo", "video", "how to", "what is", "why",
  "bank", "loan", "electricity bill", "train status", "flight",
  "tax", "income tax", "exam result", "weather tomorrow", "current affairs",
  "ai tools", "chatgpt", "stock price", "bitcoin", "gold rate",
  "IPL", "world cup", "festival", "recipe", "temple near me"
];

function addingWordsToTries(){
      for(const word of commonlySearchedWords){
        testingTries.insert(word)
      }
   console.log('testingTries', testingTries);
}
addingWordsToTries()

console.log('search tries', testingTries.search('google'));
console.log('print all words in tries', testingTries.collectAllWords2([],null,''));
