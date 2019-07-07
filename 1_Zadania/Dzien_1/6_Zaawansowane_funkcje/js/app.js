function boilEgg() {
    var interval = setInterval(function () {
        console.log("Egg is boiling...")
    },5000);
    setTimeout(function () {
        console.log("Egg is ready");
        clearInterval(interval);
    },30000);


}

boilEgg();

function getMax(arr) {
    arr.sort(function(a, b){return b-a});
    return arr[0];
}

var arr = [1,4,0,99,-2];

console.log(getMax(arr));
