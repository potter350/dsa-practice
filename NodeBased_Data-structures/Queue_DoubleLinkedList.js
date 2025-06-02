
// queue under the hood double linked list

import DoubleLinkedList from "./DoubleLinkedList.js"

class QueueLinkedList{
     constructor(){
        this.data = new DoubleLinkedList()
     }

    //  adding element to last
     enqueue(element){
        this.data.append(element)
     }
    // removing from first (LIFO)
     dequeue(){
        const dequeueNode = this.data.popHead()
        return dequeueNode.data
     }

    //  read
    read(){
        if(!this.data.firstNode) return null;
        return this.data.firstNode.data
    }
    
    reverse(){
     let result = []
      let currentNode = this.data.lastNode
      while(currentNode){
         result.push(currentNode)
         currentNode = currentNode.previousNode
      }
      return result
    }
}

export default QueueLinkedList;