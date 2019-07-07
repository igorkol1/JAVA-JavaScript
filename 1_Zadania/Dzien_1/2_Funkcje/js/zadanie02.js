function calculateCircle(r) {
    if(typeof r==="number"){
        return {
            circuit:2*Math.PI*r,
        area:Math.PI*Math.pow(r,2)
        }
    }else {
        return false;
    }
}

console.log(calculateCircle("ets"));
console.log(calculateCircle(5).circuit+" "+calculateCircle(5).area);

