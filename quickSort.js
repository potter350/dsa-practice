
class quickSort{
  
    constructor(array){
        this.array = array
    }

    partition(leftIndex, rightIndex){
        const pivotIndex = rightIndex 
        const pivot = this.array[pivotIndex]
        rightIndex = rightIndex - 1

        while(true){
            while( this.array[leftIndex] < pivot ){
                 leftIndex ++;
            }

            while ( this.array[rightIndex] > pivot ){
                rightIndex --;
            }

            if(leftIndex >= rightIndex){
                break;
            }else{
                [ this.array[leftIndex] , this.array[rightIndex] ] = [ this.array[rightIndex], this.array[leftIndex] ]
                leftIndex ++;
            }
        }
            
            [ this.array[leftIndex] , this.array[pivotIndex] ] = [ this.array[pivotIndex], this.array[leftIndex]  ]
            console.log('leftindex', leftIndex)
            return leftIndex;
    }

   
    quick_sort(leftIndex, rightIndex){
        if(rightIndex - leftIndex <= 0){
            return 
        }

        let pivotIndex = this.partition(leftIndex, rightIndex)
        this.quick_sort(leftIndex,pivotIndex - 1)
        this.quick_sort(pivotIndex + 1, rightIndex)

        return this.array
    }

    quick_select(k, leftIndex, rightIndex){
         
         if(rightIndex - leftIndex <= 0){
            return this.array[leftIndex]
         }
         let pivotIndex = this.partition(leftIndex, rightIndex)
         if(k < pivotIndex){
            return this.quick_select(k, leftIndex, pivotIndex - 1)
         }
         else if(k > pivotIndex){
           return this.quick_select(k, pivotIndex + 1, rightIndex)
         }
         else{
            return this.array[pivotIndex]
         }
    }

    
}
console.log('qk srt called');

function testing() {
    let values = [20, 50, 80, 10, 500, 120, 65]
    const sortableArray = new quickSort(values)
    sortableArray.quick_sort(0, values.length - 1);
    // console.log('partition', sortableArray.quick_sort(0, values.length - 1))
    console.log('quick select of k', sortableArray.quick_select(2, 0, values.length - 1), sortableArray.array);
    
}

// testing()

// greatest product of any 3 number from array
function greatestProduct(array){
    const L = array.length - 1
    if(L < 3) {return array}
    const sortableArray = new quickSort(array)
    const sortedArray   = sortableArray.quick_sort(0 , L)
    console.log('sortedArray',sortedArray);
    
    return sortedArray[L -1] * sortedArray[L -2] * sortedArray[L -3]
}
console.log('greatestProduct',greatestProduct([20, 50, 80, 10, 500, 120, 65]));
