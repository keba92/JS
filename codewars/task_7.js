/**Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched. 
 * Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !*/

/**function pigIt(str){
    let simbal = " ";
    let arr = str.split('').reverse()
    arr.map((el, index)=>{
        if (simbal === el){
            arr[index-1]=arr[index-1]+"ay"
        }
    })
    arr.push("ay")
    return arr.join('');
}
  pigIt('Pig latin is cool');*/

  function pigIt(str){
    let newStr = str.split(/(\W+)/);
    let changed = newStr.map(input => {
      if (!/\w/.test(input)) return input
      return input.substring(1) + input.charAt(0) + "ay";
    });
    return changed.join("");
  }

  console.log(pigIt('Hello world !'))