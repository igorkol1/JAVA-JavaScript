function create2DArray(row,column) {
    arr=[];
    for(i=0;i<row;i++){
        newRow=[];
        for(j=0;j<column;j++){
            newRow.push(Math.floor(Math.random() * 100));
        }
        arr.push(newRow);
    }
    return arr;
}

function print2DArray(arr) {
    for (i=0;i<arr.length;i++){
        console.log(arr[i].toString());
    }
}

print2DArray(create2DArray(5,5));
