function print2DArray(arr) {
    for (i=0;i<arr.length;i++){
        console.log(arr[i].toString());
    }
}

var arr = [
    [11, 12,5],
    [42, 2],
    [-4, -120,67,9],
    [0, 0],
    [1, 34],
];

print2DArray(arr);
