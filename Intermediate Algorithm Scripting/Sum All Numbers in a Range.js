
//1
function sumAll(arr) {
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var oarr = [];
    // var i = 0;
    var lg = max - min + 1;
    if (min <= max) {
        for (var index = 0; index < lg; index++) {
            oarr.push(min);
            min++;
        }
        console.log(oarr);
        return oarr.reduce(function (a, b) {
            return a + b;
        }, 0);

    }
}

sumAll([1, 4]);
console.log(sumAll([1, 4]))
