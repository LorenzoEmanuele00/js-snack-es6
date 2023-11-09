// FUNCTION

function arrayCheck(arrayToCheck, min, max) {
    const result = [];
    arrayToCheck.forEach((elem, index) => {
        if (index <= max && index >= min) {
            result.push(elem);
        }
    });
    return result;
}


// CODE

let a = prompt(`Dammi un valore`);
let b;
do {
    b = prompt(`Dammi un valore più grande`);
} while (b <= a) 

const myArray = ["Lorenzo", "Francesco", "Alessandro", "Monica", "Meri"]

const newArray = arrayCheck(myArray, a, b);
console.log(newArray);

const newArray2 = myArray.filter((elem, index) => (index <= b && index >= a));
console.log(newArray2);