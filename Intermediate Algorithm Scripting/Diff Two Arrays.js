function diff(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    for (var i = 0; i < arr1.length; i++) {

        for (var j = 0; i < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr1.splice(i, 1);
                arr2.splice(j, 1);
                arr1.concat(arr2);
            }
        }
    }  
    return newArr;
}
diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log(newArr);


function diff(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
     var narr1 = arr1.filter(function(val){
       for(var i=0;i<arr2.length;i++){
         if(val == arr2[i]){
           return false;
         }
       }
      return true;
    });
    var narr2 = arr2.filter(function(val){
      for(var j=0;j<arr1.length;j++){
        if(val==arr1[j]){
          return false;
        }
      }
      return true;
    });
    newArr = narr1.concat(narr2);
    
    return newArr;
  }
  
  diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  console.log(newArr);