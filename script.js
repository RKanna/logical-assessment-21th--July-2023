"use strict";

//Set-1

//1.Write a JavaScript program to check if a number is positive, negative, or zero.

// function checkNumber(num) {
//   if (num == 0) {
//     console.log("The number is Zero");
//   } else if (num < 0) {
//     console.log("The number is Negative");
//   } else if (num > 0) {
//     console.log(`The number is ${num} positive`);
//   }
// }
// checkNumber(10);
// checkNumber(-5);
// checkNumber(0);

//2.Create a function that takes two numbers as arguments and returns their sum.

// function sumOfTwo(numOne, numTwo) {
//   const sum = numOne + numTwo;
//   console.log(sum);
// }
// sumOfTwo(6, 6);

//3.Write a program to find the maximum of two given numbers.

// function maxFinder(numOne, numTwo) {
//   if (numOne > numTwo) {
//     console.log(`${numOne} is largest`);
//   } else {
//     console.log(`${numTwo} is largest`);
//   }
// }
// maxFinder(9, 15);

//4.Create a function that takes a string as input and returns its length

// function lengthFinder(str) {
//   const lengthOfStr = str.length;
//   console.log(lengthOfStr);
// }
// lengthFinder("hello");

//5.Write a JavaScript function to check if a given number is prime or not.

// function primeCheck(number) {
//   if (number <= 3) {
//     return true;
//   }
//   if (number % 2 === 0 || number % 3 === 0) {
//     return false;
//   }
//   for (let divisor = 5; divisor * divisor <= number; divisor += 6) {
//     if (number % divisor === 0 || number % (divisor + 2) === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// let numberToCheck = 23;
// if (primeCheck(numberToCheck)) {
//   console.log(`${numberToCheck} is a prime number`);
// } else {
//   console.log(`${numberToCheck} is not a prime number`);
// }

//6.Write a function to sort given array.

// function sortArray(arr) {
//   const sortedArray = arr.sort();
//   console.log(sortedArray);
// }
// sortArray([4, 8, 9, 3, 8]);
// sortArray(["g", "w", "a", "c", "l"]);

//7.Write a function that checks if a given string, is a palindrome

// function checkPalindrome(str) {
//   const arrStr = str.split("").reverse().join("");
//   if (str == arrStr) {
//     console.log("the given string is palindrome");
//   } else {
//     console.log("the given string is not a palindrome");
//   }
// }
// checkPalindrome("malayalam");

//8..Create a program that generates a random number between 1 and 10 and asks the user to guess it.

// function generateRandom() {
//   const randomNum = Math.floor(Math.random() * 11);
//   console.log("Guess the number");
//   const timeOut = setInterval(() => {
//     console.log(randomNum);
//   }, 10000);
// }
// generateRandom();

//9.Create a program that generates a random password with a mixture of characters and symbols.

// function generatePassword() {
//   const alphaStr = "abcdefghijklmnopqrstuvwxyz!@#$%&*()";
//   const splitedStr = alphaStr.split("");
//   const genRandomLength = splitedStr.length * 2;
//   let counter = 0;
//   let result = "";
//   while (counter < genRandomLength) {
//     if (counter % 2 === 0) {
//       result += alphaStr.charAt(Math.floor(Math.random() * alphaStr.length));
//     } else {
//       result += splitedStr[Math.floor(Math.random() * splitedStr.length)];
//     }
//     counter++;
//   }
//   return result;
// }
// const password = generatePassword();
// console.log(password);

//10.Create a program that determines if a given year is a leap year or not.

// function LeapYearOrNot(year) {
//   if (year % 4 == 0) {
//     console.log("This is a Leap Year");
//   } else {
//     console.log("This is not a Leap year");
//   }
// }
// LeapYearOrNot(2020);
