function checkArray(arr2D) {

    results=[];


    for(i=0;i<arr2D.length;i++){
        status = true;
        for (j=0;j<arr2D[i].length;j++){
            if(arr2D[i][j]%2!=0){
                status=false;
                break;
            }
        }
        results.push(status);
    }

    return results;
}

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

console.log(checkArray(arr));

