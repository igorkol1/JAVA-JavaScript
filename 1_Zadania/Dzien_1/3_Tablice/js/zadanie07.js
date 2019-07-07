function getMissingElement(arr) {
    missingElements=[];
    debugger;
    for(i=0;i<arr.length;i++) {
        if (Math.abs(arr[i + 1] - arr[i]) === 2) {
            missingElements.push(arr[i] + 1); //Assumption that gap won't be bigger than 2;
        }
    }
        if(missingElements.length===0){
            return null;
        }
        return missingElements;
}

//console.log(getMissingElement([1,2,3,4,5,6,7]).toString()+"// => null");
console.log(getMissingElement([6,7,8,10,11,12,13,14,15]).toString()+"// => 9");
console.log(getMissingElement([-4,-3,-2,0,1,2,3,4]).toString()+"// => -1");
