function getNumber(num, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true;
        }
    }
    return false;
}

var identytyMatrix = [1, 4, 6, 3, 4, 9];

console.log(getNumber(3, identytyMatrix));
console.log(getNumber(0, identytyMatrix));

function createIdentityMatrix(row) {
    identytyMatrix = [];
    for (var i = 0; i < row; i++) {
        newRow = [];
        for (var j = 0; j < row; j++) {
            if (j === i) {
                newRow.push(1);
            } else {
                newRow.push(0);
            }
        }
        identytyMatrix.push(newRow)
    }
    return identytyMatrix;
}

function print2DArray(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i].toString());
    }
}

matrix = createIdentityMatrix(5);

print2DArray(matrix);

var Tree = function (type) {
    this.type = type;
    this.bloom = function () {
        console.log("Im blooming");
    }
}

var dab = new Tree('dab');
var kasztan = new Tree('kasztan');
var swierk = new Tree('swierk');

console.log(dab.hasOwnProperty('bloom'));
console.log(kasztan.hasOwnProperty('bloom'));
console.log(swierk.hasOwnProperty('bloom'));

function addTheSameNumbers(num, arr) {
    sum = null;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            sum += num;
        }
    }
    return sum;
}

console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]) + "// => 14");
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]) + "// => 9");
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]) + "// => 0");
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]) + "// => null");

console.log("Zadanie 2");

function powers(num) {
    pows = [];
    if (num > 0) {
        i = 1;
        nextNum = 0;
        while (nextNum < 200) {
            nextNum = Math.pow(num, i);
            pows.push(nextNum);
            i++;
        }
        pows.sort(function (a, b) {
            return b - a
        });
    }
    return pows;
}

console.log(powers(2).toString() + "// => [ 128, 64, 32, 16, 8, 4, 2 ]");
console.log(powers(5).toString() + "// => [ 125, 25, 5 ]");
console.log(powers(-4).toString() + "// => []");

console.log("Zadanie 3");

function getFirstWrongElement(arr) {
    for (var i = 1; i <= arr.length; i++) {
        if (arr[i] % arr[i - 1] != 0) {
            return arr[i];
        }
    }
    return null;
}

console.log(getFirstWrongElement([1, 5, 10, 14, 28, 84]) + "//=> 14");
console.log(getFirstWrongElement([3, 5, 15, 45]) + "// => 5");
console.log(getFirstWrongElement([1, 8, 32, 128, 1024]) + "// => null");

console.log("Zadanie 4");

function getLastNumbers(num, arr) {
    lastNumbers = [];
    if (typeof num === "number") {
        lastNumbers = arr.slice(arr.length - num, arr.length);
    }
    return lastNumbers;
}

console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]).toString() + "// => [6, 7]");
console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]).toString() + "// => [12, 13, 14, 15]");
console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]).toString() + "// => []");
console.log(getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4]).toString() + "// => []");
