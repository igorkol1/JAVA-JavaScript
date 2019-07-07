function distFromAverage(arr) {
    sum = add(arr);
    avg=sum/arr.length;
    result=[];

    for(i=0;i<arr.length;i++){
        result.push(Math.abs(arr[i]-avg));
    }
    return result;
}

function add(array) {
    sum = 0;
    for (i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log(`[3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4)`);
console.log(distFromAverage([1, 2, 3, 4, 5, 6, 7]).toString());
console.log(`[0,0,0,0] (średnia z tablicy wejściowej to 1)`);
console.log(distFromAverage([1, 1, 1, 1]).toString());
console.log(`[3,3,2,2] (średnia z tablicy wejściowej to 5)`);
console.log(distFromAverage([2, 8, 3, 7]).toString());
