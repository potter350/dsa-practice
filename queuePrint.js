import Queue from "./queue.js";

class printManager{
    constructor(){
        this.queue =  new Queue();
    }

    addPrintDocument(document){
       this.queue.enqueue(document)
    }

    run(){
        while(this.queue.read()){
            this.printDocument(this.queue.dequeue())
        }
    }

    printDocument(document){
        console.log(document)
    }
}

export default printManager