
// queue under the hood array
class Queue {
    constructor(){
        this.data = []
    }

    enqueue(element){
        return this.data.push(element)
    }

    dequeue(){
        if(this.data.length){
            return this.data.shift()
        }else{
            return null
        }
    }

    read(){
        if(this.data.length){
            return this.data[0]
        }else{
            return null
        }
    }
}

export default Queue