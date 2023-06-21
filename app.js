"use strict";
//Array qiymatlarining umumiy yig'indisini hisoblash
//Global massiv for we use exercise throughout
//\/\/\/\/\/\/\/\/\/\/\/
const arr = [5, 15, 45];
let sum = 0;


//Way-1
function calculateSum(array) {
    return array.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
}
const result = calculateSum([1, 2, 3]);


//Way-2 Using by ForOf loop
for (const value of arr) {
    if (typeof value === 'number') {
        sum += value;
    }
}


//Way-3 Using by ForEach loop
arr.forEach(value => {
  sum += value;
});


//Way-4 Using by For loop
for (let index = 0; index < arr.length; index++) {
  sum += arr[index];
}


//Way-5 Using by While loop
let i = -1;

while (++i < arr.length) {
  sum += arr[i];
}


document.getElementById("demo").innerHTML = sum;