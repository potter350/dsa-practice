
import Node from './DoubleEnded-Node.js'

class DoubleLinkedList{
    constructor(firstNode = null, lastNode = null){
       this.firstNode = firstNode;
       this.lastNode = lastNode;
    }

    append(value){
        const newNode = new Node(value)

        if(!this.firstNode){
            this.firstNode = newNode
            this.lastNode = newNode
        }else{
            newNode.previousNode = this.lastNode
            this.lastNode.nextNode = newNode
            this.lastNode = newNode
        }
    }

    popHead(){
        const poppedHead = this.firstNode
        this.firstNode = this.firstNode.nextNode
        this.firstNode.previousNode = null
        return poppedHead
    }

   
}

export default DoubleLinkedList;