function mathInfo() {
    var randomNumber = Math.floor(Math.random() * 100);

    console.log("Random number: "+randomNumber);

    if (randomNumber % 2 === 0) {
        console.log("Number is even");
    } else {
        console.log("Number is odd");
    }

    printDivisorsCount(randomNumber);
    printPowerOfMod(randomNumber);
}

function printDivisorsCount(number) {
    var divisors= [];
    for(i =1;i<number;i++){
        if(number%i===0){
            divisors.push(i);
        }
    }
    console.log("Divisors: "+divisors.toString());
}

function printPowerOfMod(number) {
    powNumber =Math.pow(number,number%5);
    console.log(powNumber)
}

mathInfo();
