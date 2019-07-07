function add(array) {
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

function multiply(array) {
    result=array[0];
    for(i=1;i<array.length;i++){
        result*=array[i];
    }
    return result;
}

identytyMatrix=[1,2,3,4];

console.log(add(arr));
console.log(multiply(arr));
