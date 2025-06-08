import stack from "./stack.js";

class linter {
   
    constructor(){
        this.stack = new stack()
    }

    lint(text){
        console.log('lint called');
        
       while(this.stack.read()){
         this.stack.pop()
       }

       let matchingBraces = { '(' : ')', '[' : ']', '{' : '}' }
       let receivedText = text.replaceAll(' ', '')

       for( const char of receivedText){
          if(matchingBraces[char]){
            this.stack.push(char)
            console.log('text',text);
          }else if ( Object.values(matchingBraces).includes(char) ){
             if(!this.stack.read()){
                 return `${char} does not have opening braces`
             }else {
                 let poppedItemFromStack = this.stack.pop()
                 if(char !== matchingBraces[poppedItemFromStack]){
                    return `${char} is mismacthed opening brace `
                 }
             }
          }

       }

       if(this.stack.read()){
          return `${this.stack.read()} has does not have closing brace`
       }

       return true
    }

    

}

export default linter