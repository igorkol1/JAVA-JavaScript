function calculateTip(amount, rating){
    switch (rating) {
        case "Very good service":
            return amount*0.25;
        case "Good service":
            return amount*0.20;
        case "Neutral service":
            return amount*0.15;
        case "Bad service":
            return 0;
    }
}

console.log(calculateTip(100,"Very good service"));
console.log(calculateTip(100,"Good service"));
console.log(calculateTip(100,"Neutral service"));
console.log(calculateTip(100,"Bad service"));
