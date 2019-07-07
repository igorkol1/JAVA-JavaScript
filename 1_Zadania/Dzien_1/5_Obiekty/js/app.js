String.prototype.upperLower = function () {
    newString = '';
    for (i = 0; i < this.length; i++) {
        if (i % 2 === 0) {
            newString += this.charAt(i).toLowerCase();
        } else {
            newString += this.charAt(i).toUpperCase();
        }
    }
    return newString;
}


var test = 'Javascript jest super';
console.log(test.upperLower());

// Zadanie 2

var Car = function (brand, color, km, inspections) {
    this.brand = brand;
    this.color = color;
    this.km = km;
    this.inspections = inspections
}

Car.prototype.printCarinfo = function () {
    console.log(this.brand);
    console.log(this.color);
    console.log(this.km);
}

var bmw = new Car("bmw", "blue", 10000);

bmw.printCarinfo()

// Zadanie 3

bmw.inspections = ['01.2013', '03.2015'];

Car.prototype.addInspection = function (inspectionDate) {
    this.inspections.push(inspectionDate);
}

Car.prototype.printInspections = function () {
    console.log(this.inspections.toString());
}

bmw.addInspection('02.2017');
bmw.printInspections();

// Zadanie 5

var Rectangle = function (base,h) {
    this.base = base;
    this.h = h;
}

Rectangle.prototype.getArea = function () {
    return this.base*this.h;
}

Rectangle.prototype.getPerimiter = function () {
    return 2*this.base+2*this.h;
}

var retangle = new Rectangle(4,5);
console.log(retangle.getArea());
console.log(retangle.getPerimiter());

// Zadanie 6
//
// Stwórz konstruktor dla obiektów Calculator.
//     Konstruktor ma nie przyjmować żadnych danych.
//     Każdy nowo stworzony obiekt powinien mieć pustą tablicę, w której będzie trzymać historię wywołanych operacji.
//     Następnie przy pomocy prototypu klasy dodaj do niej następujące metody:
//     add(num1, num2) - metoda ma dodać do siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "added num1 to num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// multiply(num1, num2) - metoda ma pomnożyć przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "multiplied num1 with num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// subtract(num1, num2) - metoda ma odjąć od siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "subtracted num1 from num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// divide(num1, num2) - metoda ma podzielić przez siebie dwie zmienne i zwrócić wynik. Dodatkowo w tablicy operacji ma zapamiętać napis: "divided num1 by num2 got result" (oczywiście z wartościami zmiennych podstawionymi w odpowiednie miejsce).
// printOperations() - metoda ma wypisać wszystkie operacje zapamiętane w pamięci.
// clearoperations() - metoda ma wyczyścić wszystkie operacje z pamięci.
//     Pamiętaj o używaniu this.

var Calculator = function () {
    this.operations =[];
}

Calculator.prototype.add = function (num1,num2) {
    result = num1+num2;
    this.operations.push(`added ${num1} to ${num2} got result ${result}`);
    return result;
}

Calculator.prototype.multiply = function (num1,num2) {
    result = num1*num2;
    this.operations.push(`multiplied ${num1} with ${num2} got result ${result}`);
    return result;
}

Calculator.prototype.subtract = function (num1,num2) {
    result = num1-num2;
    this.operations.push(`subtracted ${num1} from ${num2} got result ${result}`);
    return result;
}

Calculator.prototype.divide = function (num1,num2) {
    result = num1/num2;
    this.operations.push(`divided ${num1} by ${num2} got ${result}`)
    return result;
}

Calculator.prototype.printOperations = function () {
    console.log(this.operations.toString());
}

Calculator.prototype.clearoperations = function () {
    this.operations = [];
}


var calc = new Calculator();

calc.add(1,2);
calc.subtract(7,3);
calc.multiply(5,5);
calc.divide(12,2);
calc.printOperations();
calc.clearoperations();


