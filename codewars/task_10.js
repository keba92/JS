/**The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}. */

function count (string) {
    let obj = {};
    let newStr = string.split('');
    newStr.map((el)=>{
        let cunt = newStr.filter(e=>e.indexOf(el)>-1).length;
        let key = el;
        obj[key] = cunt;
    })
    return obj;
  }
  count("");