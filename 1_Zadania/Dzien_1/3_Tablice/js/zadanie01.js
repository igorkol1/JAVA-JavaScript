function isNumbersGrowing(array) {
    // Do tablicy możesz się odnieść przez zmienną array.
    // Pamiętaj o zwróceniu poprawnych danych (return true albo return false).
    for (i=1;i<=array.length;i++){
        if(array[i-1]>array[i]){
            return false;
        }
    }
    return true;
}

console.log("tablica [1,2,3,4,5,6,7]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([1,2,3,4,5,6,7]));
console.log("tablica [1,2,10,4,5,6,7] nie jest rosnąca (powinno zwrócić false) " + isNumbersGrowing([1,2,10,4,5,6,7]));
console.log("tablica [-5,-4,0,4,6,21]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([-5,-4,0,4,6,21]));
console.log("tablica [-1,2,-1,4,5,6,7] nie jest rosnąca (powinno zwrócić false) " + isNumbersGrowing([-1,2,-1,4,5,6,7]));
console.log("tablica [8]  jest rosnąca (powinno zwrócić true) " + isNumbersGrowing([8]));
