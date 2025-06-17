

// === Linked Lists ===

// 1. Singly Linked List
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function createLinkedList(arr) {
  let dummy = new ListNode(0), current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function printLinkedList(head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  console.log("Linked List:", res);
}

let list1 = createLinkedList([1, 2, 3, 4]);
printLinkedList(list1);


// 2. Doubly Linked List
class DoublyNode {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(val) {
    let node = new DoublyNode(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  print() {
    let curr = this.head, res = [];
    while (curr) {
      res.push(curr.val);
      curr = curr.next;
    }
    console.log("Doubly Linked List:", res);
  }
}

let dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.print();


// 3. Reverse a Linked List
function reverseList(head) {
  let prev = null;
  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}
let reversed = reverseList(createLinkedList([1, 2, 3]));
printLinkedList(reversed);


// 4. Cycle Detection (Floyd’s Algorithm)
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
let cycleNode = new ListNode(1);
cycleNode.next = new ListNode(2);
cycleNode.next.next = cycleNode; // creating a cycle
console.log("Cycle detected:", hasCycle(cycleNode)); // true


// 5. Merge Two Sorted Lists
function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;
  return dummy.next;
}
let merged = mergeTwoLists(createLinkedList([1, 3, 5]), createLinkedList([2, 4, 6]));
printLinkedList(merged);


// 6. Find Middle Node
function findMiddle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
console.log("Middle Node:", findMiddle(createLinkedList([1, 2, 3, 4, 5])).val); // 3


// 7. Intersection Point of Two Linked Lists
function getIntersectionNode(a, b) {
  let lenA = 0, lenB = 0, headA = a, headB = b;
  while (headA) { lenA++; headA = headA.next; }
  while (headB) { lenB++; headB = headB.next; }
  
  headA = a; headB = b;
  if (lenA > lenB) for (let i = 0; i < lenA - lenB; i++) headA = headA.next;
  else for (let i = 0; i < lenB - lenA; i++) headB = headB.next;

  while (headA && headB) {
    if (headA === headB) return headA;
    headA = headA.next;
    headB = headB.next;
  }
  return null;
}

// Create intersection example
let common = new ListNode(8);
common.next = new ListNode(10);
let listA = new ListNode(3);
listA.next = new ListNode(7);
listA.next.next = common;
let listB = new ListNode(99);
listB.next = common;

console.log("Intersection at:", getIntersectionNode(listA, listB)?.val); // 8
