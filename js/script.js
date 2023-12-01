
//esercizio 1
/*
let number = 100;
console.log(number);

//Esercizio 2
const pi = 3.14;
console.log(pi);
*/
/*Esercizio 2/b
//Errore
pi= 3.1416;
console.log(pi);
*/

//Esercizio 2/c
/*
let radius = 8;
let circle = radius * 2 * pi;
console.log(circle);

//Esercizio 3
let name = 'Carlo';
name = 'Marco';
console.log(name);

//Esercizio 4
let greet = "Ciao, Mondo!";
console.log(greet);
*/
//Esercizio 4/B
//let greet = 'Come stai, Mondo?'
//console.log(greet);

//Esercizio 4/C
/*
greet = `${greet} Come stai?`;
console.log(greet);

*/
//Esercizio 1
/*
let n1= 13;
let n2= 5;

let comparison;
if(n1 > n2){
    comparison = n1;
}else{
    comparison = n2;
}
console.log(comparison);
*/

//Esercizio 2
/*
let stringa1 = "Marco";
let stringa2 = "Mario";
let comparison

if (stringa1 == stringa2) {
    comparison = "Valori uguali"
}else{
    comparison = "Valori diversi"
}
console.log(comparison);
*/

//Esercizio 3
/*
let num = "5";
let comparison;

if (num == "2") {
    comparison= "i numeri sono uguali";
}else{
    comparison= "i numeri sono diversi";
}
console.log(comparison);
*/
//Esercizio 1/A
/*
for(let i=1; i<=42; i++){
    console.log(i);
}
*/
//Esercizio 1/b
/*
for (let i = 42; i >= 1; i--) {
    console.log(i);
}*/

//Esercizio 1/a
/*
const numbers = [2, 34, 23, 22, 13, 1, 62, 66] ;
console.log(numbers);
*/
//Esercizio 1/b and 1/c
/*
const fruits = ["mela", "banana", "pesca", "pera", "albicocca", "mango", "kiwi","papaya"];
console.log(fruits.length);
*/
//Esercizio 2/A
/*
const numOfElements = parseInt(prompt('Inserisci un numero intero'));

let numbers = [];
let somma = 0;

for (let i = 1; i <= numOfElements; i++) {
    numbers.push(parseInt(Math.random()* 10) + 1); 
}
let maggiore = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    somma += numbers[i];
    if (numbers[i] > maggiore) {
      maggiore = numbers[i];
    }
}
console.log(numbers);
console.log(numbers.length);
console.log(somma);

console.log(maggiore);
*/

// FUNZIONI

// Esercizio 1/A
/* function PrintCiaoMondo() {
    alert('Ciao Mondo!');
}
//Esercizio 2/A
function somma(num1, num2) {
    let somma = num1 + num2;
    return somma;
}

//Esrcizio 1/B
PrintCiaoMondo();

//Esercizio 2/B
let result = somma(3, 6);
console.log(result);
*/

/* //Esercizio 1/A
function getOneStringFromTwo(stringA, stringB) {
    let string = `${stringA} ${stringB}`;
    return string;
}
//Esercizio 1/B
let stringa_uno = prompt('Inserisci una parola');
let stringa_due = prompt('Inserisci un\'altra parola');

let result = getOneStringFromTwo(stringa_uno, stringa_due);
console.log(result); */

//Esercizio 1/A

let hello = setTimeout(function(){
    alert('Ciao a tutti');
},3000)