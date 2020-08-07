/**Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

    Examples input/output:

    XO("ooxx") => true
    XO("xooxx") => false
    XO("ooxXm") => true
    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    XO("zzoo") => false
 */

function XO(str) {
    const arr = str.toLowerCase().split("");
    let O = 0;
    let X = 0;
    for (let i=0; i<arr.length; i++){
        if (arr[i] == "x"){
            X+=1;
        }
        else if (arr[i] == "o"){
            O+=1;
        }
        else{
        }
    }
    if (X == O){
        return true;
    }
    else {
        return false;
    }
} 