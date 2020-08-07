/**Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun! */

function towerBuilder(nFloors) {
    let finalArray = [];
    let numSpaces = 0;
    // Start from the reverse.
    for (let i = nFloors; i > 0; i--) {
      finalArray.push(" ".repeat(numSpaces) + "*".repeat(i) + "*".repeat(i-1)  + " ".repeat(numSpaces));
      numSpaces++;
    }
    return finalArray.reverse();
}
  console.log(towerBuilder(5));