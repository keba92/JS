function getCount(str) {
    var vowelsCount = 0;
    let arr = str.split("");
    for (let i=0; i<arr.length; i++){
        if (arr[i] == "a"){
            vowelsCount += 1;
        }
        else if (arr[i] == "e"){
            vowelsCount += 1;
        }
        else if (arr[i] == "i"){
            vowelsCount += 1;
        }
        else if (arr[i] == "o"){
            vowelsCount += 1;
        }
        else if (arr[i] == "u"){
            vowelsCount += 1;
        }
        else{
        }
    }   
    return vowelsCount;
  }