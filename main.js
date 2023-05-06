
// Zadanie 1

const numbers = [86, 100, 15];

if (numbers[0] + numbers[2] > numbers[1]) {
    console.log("Suma pierwszego i ostatniego elementu jest większa niż drugi element")
} else {
    console.log("Suma pierwszego i ostatniego elementu nie jest większa niż drugi element")
}

// Zadanie 2

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 5, 6, 8];

if (firstArray.length > secondArray.length) {
    console.log("Pierwsza tablica jest dłuższa")
} else if  (firstArray.length < secondArray.length) {
    console.log("Druga tablica jest dłuższa")
} else {
    console.log("Tablice mają taką samą długość")
}

// Zadanie 3

const fruits = ["pear", "banana", "orange"];
const fruits_v2 = ["apple", "banana", "orange"];

if (fruits[0] === "apple") {
    console.log("Pierwszy element tablicy to 'apple'")
} else {
    console.log("Pierwszy element tablicy to nie 'apple'")
}

if (fruits_v2[0] === "apple") {
    console.log("Pierwszy element tablicy to 'apple'")
} else {
    console.log("Pierwszy element tablicy to nie 'apple'")
}