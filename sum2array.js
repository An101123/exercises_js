array1 = [1, 2, 9, 10];
array2 = [2, 4, 5, 7, 8, 9, 0, 9];
var temp = [];
if (array2.length > array1.length) {
    for (i = array1.length; i < array2.length; i++) {
        temp.push(array2[i]);
    }
    var sum = array1.map(function(num, index) {
        // console.log(num);
        // console.log(array2[index])
        return num + array2[index];
    });
} else {
    for (i = array2.length; i < array1.length; i++) {
        temp.push(array1[i]);
    }

    var sum = array2.map(function(num, index) {
        // console.log(num);
        return num + array1[index];
    });
}
sum = sum.concat(temp);
console.log(sum);