


// find 2sum of target [1,2,3,4] t = 6
function twoSum(array, target) {
    let left = 0;
    let right = array.length - 1;
    while (right > left) {
        let sum = array[left] + array[right];
        if (sum === target) return [left, right];
        else if (target > sum) left++;
        else right--;
    }
    return null; //if pair not found
}

// same for unsorted array - (lookup pattern)
function twoSumUnsorted(array, target) {
    let hash = {}
    collection = []

    for (let i = 0; i < array.length; i++) {
        let sub = target - array[i]
        if (hash[sub]) {   //checking if hash any previous numbers
            collection.push([hash[sub], i])
        } else {
            hash[array[i]] = i   //hashing value and its index
        }
    }

    return collection;
}

let numbers = [1, 2, 3, 4, 5, 6]
let ages = [5, 34, 66, 14, 25, 31, 78, 18, 75, 82]
let hash = { 0: 1, 1: 2, 2: 3 }
console.log('2sum', twoSum(numbers, 20))
// console.log('2sum twoSumUnsorted', twoSumUnsorted(numbers, 20))

console.log('2sum twoSumUnsorted 2', twoSumUnsorted(ages, 100))


// Reverse String (two pointer wont work bcoz js strings are immutable & cant do inplace reversal)
function reverseString(string) {
    let right = string.length - 1
    let reverseString = ''
    while (right >= 0) {
        reverseString += string[right]
        right--;
    }
    return reverseString;
}

console.log('reverse string', reverseString('hello'));

// palindrome (madam)
function checkPalindrome(string){
//  let str = string.toLowerCase().replace(/[^a-z0-9]/g,'') //omit case sensitive & non alpha numerals
     let left=0;
     let right = string.length -1;
     while(right > left){
         if( string[left] !== string[right]){
            return false
         }
         left++;
         right--;
     }
     return true
}
console.log('palindrome',checkPalindrome('madam'));



