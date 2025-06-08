
class stack {
   constructor(){
       this.data = []
   }

   push(element){
       return this.data.push(element)
   }

   pop(){
     if(this.data.length){
       return this.data.pop()
     }else{
        return null
     }
   }

   read(){
     if(this.data.length){
       return this.data[this.data.length - 1]
     }else{
        return null
     }
   }

}

export default stack