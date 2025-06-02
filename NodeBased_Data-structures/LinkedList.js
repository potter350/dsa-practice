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

    
}

export default LinkedList;


