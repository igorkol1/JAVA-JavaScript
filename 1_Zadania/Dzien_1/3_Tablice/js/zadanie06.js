function factors(n) {
    if (typeof n === "number" && n > 0) {
        factorsArr = [];
        for(i=1;i<=n;i++){
            if(n%i===0){
                factorsArr.push(i);
            }
        }
        factorsArr.sort(function(a, b){return b-a})
        return factorsArr;
    }else {
        throw new Error('Whoops!');
    }
}

console.log(factors(2).toString()+"// => [2, 1]");
console.log(factors(54).toString()+"// => [54, 27, 18, 9, 6, 3, 2, 1]");
console.log(factors(-4).toString()+"// => []");

