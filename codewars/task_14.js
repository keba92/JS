/**Consider a sequence u where u is defined as follows:

The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...

Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u (so, there are no duplicates).

Example:
dbl_linear(10) should return 22

Note:
Focus attention on efficiency */


function dblLinear(n) {
    let arr = [1];
    for (let i=0; i<n; i++){
        let y = (2 * arr[i]) + 1;
        let z = (3 * arr[i]) + 1;
        arr.sort((a,b)=>a-b).push(y,z)
        let num = arr.filter(el => (el == arr[i]))
        if (num.length>1){
            let idx = arr.findIndex((el,index)=>{
                if(el == num[0]){
                    return index;
                }})
                arr.splice(idx,1)
        }
     }
     let n1= n+1;
     let n2= arr.length-1;
     arr.splice(n1, n2);
    return arr[n];
 }

 dblLinear(50);