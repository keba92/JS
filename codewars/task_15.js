/**Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]*/

var moveZeros = function (arr) {
    /**   arr.filter((el,index)=>{
            if (el === 0){
                arr.push(el)
                arr.splice(index,1)
            }
        });*/
        for(let i = arr.length - 1, j = i; i >= 0; i--){
            if([0, '0'].includes(arr[i])){
                let key = i, tmp = arr[i];
                while(key < j)
                    arr[key] = arr[++key];
                arr[j--] = tmp;
            }
        }
        return arr;
      }
      moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0])
    