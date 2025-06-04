import Node from "./SingleEnded-node.js";

class LinkedList{
    constructor(firstnode = null){
        this.firstnode = firstnode
    }

    read(index){
        let currentNode = this.firstnode;
        let currentIndex = 0;

        while(currentIndex < index){
            currentNode = currentNode.nextNode
            currentIndex ++;
        }
        if(!currentNode){
            return null
        }
        return currentNode.data
    }

    readAll(){
      let currentNode = this.firstnode
      let listAll = []
      listAll.push(currentNode.data)

      while(true){
          currentNode = currentNode.nextNode
          listAll += ' '+currentNode.data
          if(!currentNode.nextNode) return listAll
      }
    }

    length(){
        let currentIndex = 1;
        let currentNode = this.firstnode
        while(true){
            currentIndex ++
            currentNode = currentNode.nextNode
            if(!currentNode.nextNode) return currentIndex
        }
    }

    search(value) {
        let currentNode = this.firstnode
        let currentIndex = 0;

        while (true) {
            if (currentNode.data === value) {
                return currentIndex;
            }
            currentNode = currentNode.nextNode
            if (!currentNode) {
                return null
            }
            currentIndex++;
        }
    }

    insert(value, index){
        let newNode = new Node(value)

        if(index === 0){
            newNode.nextNode = this.firstnode
            this.firstnode = newNode
            return
        }
        let currentNode = this.firstnode
        let currentIndex = 0;
        while(currentIndex < (index - 1)){
            currentNode = currentNode.nextNode
            currentIndex ++;
            if(!currentNode)return null;
        }
        newNode.nextNode = currentNode.nextNode
        currentNode.nextNode = newNode
        return 
    }

    delete(index){
        if(index === 0){
            this.firstnode = this.firstnode.nextNode
            return
        }

        let currentNode = this.firstnode
        let currentIndex = 0
        // finding node before delete index
        while(currentIndex < (index - 1)){
            currentNode = currentNode.nextNode
            currentIndex ++;
        }
        // getting node after delete index
        let nodeAfterDeleteNode = currentNode.nextNode.nextNode 
        
        // connecting before , after delete index, (so this index to be delete is removed from list)
        currentNode.nextNode = nodeAfterDeleteNode
        return
    }

    lastValue(){
        if(!this.firstnode) return null;
        let currentNode = this.firstnode
        let currentIndex = 0;
        let currentData = this.firstnode.data
        while(currentNode){
             currentIndex ++;
             currentData = currentNode.data
             currentNode = currentNode.nextNode
        }
        return currentData
    }

    reverseList(){
      let previousNode = null;
      let currentNode = this.firstnode // - A
      while(currentNode){
        const newNode = currentNode.nextNode //storing next node - B C
        console.log('newNode',newNode);
        currentNode.nextNode = previousNode  //reversing pointer - null A
        console.log('currentNode.nextNode = previousNode',currentNode.nextNode = previousNode);

        previousNode = currentNode           //previous move forward - B C
        console.log('previousNode',previousNode);
        
        currentNode = newNode                //current move forward - B C
        console.log('currentNode',currentNode);

      }
        this.firstnode = previousNode
        console.log('this.firstnode = previousNode',this.firstnode = previousNode);

    }

    nodeToDeleteMiddle(node){
       node.data = node.nextNode.data
       return node.nextNode = node.nextNode.nextNode
    }

    
}

export default LinkedList;


