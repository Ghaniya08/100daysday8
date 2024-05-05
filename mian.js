#! /usr/bin/env node
console.log("\n Question 22");
let error = ['Apple', "Mango", "Banana", "Orange", "Grapes"];
console.log(error[5]);
console.log(error[4]);
console.log("\n Question 23");
let favfruit = "Mango";
let FavVega = "Potato";
//true 1
console.log(" 1: Favorite fruit is Mango?");
console.log(favfruit == "Mango");
//true 2
console.log("2: Favorite vegatable is Potato?");
console.log(FavVega == "Potato");
//False 1
console.log(" 1:favorite fruit is apple ?");
console.log(favfruit == "Apple");
//false 2
console.log("2: Favorite vegatable is Onion?");
console.log(FavVega == "Onion");
//False 3
console.log(" 1: favfruit is not equal to Mango?");
console.log(favfruit != "Mango");
//False 4
console.log("2: Favorite vegatable is not Potato?");
console.log(FavVega != "Potato");
//true 3
console.log(" 1: Mango is not equal to Potato?");
console.log(favfruit != FavVega);
//true 4
console.log("2: Mango is equal to Potato?");
console.log(FavVega == favfruit);
console.log("\n Question 24");
//equality
console.log("\n equality");
let mango = "mango";
console.log("Is mango is equal to mango");
console.log(mango == "mango");
console.log(mango == "Mango");
console.log("with lower case");
//lower case and upper case
console.log("\n lower case and upper case");
console.log("Mango".toLowerCase() == "mango");
console.log("with uppercase");
console.log("mango".toUpperCase() == "MANGO");
console.log("with lower case");
console.log("mango".toLowerCase() == "Mango");
console.log("with uppercase");
console.log("MANGO".toUpperCase() == "mango");
//numbers
console.log("\n numberical");
console.log(15 > 19);
console.log(2 < 5);
console.log(8 == 8);
console.log(2 != 2);
console.log(7 >= 5);
console.log(2 <= 3);
//or and and operators
console.log(" \n or & and operators");
console.log(2 == 2 && 3 == 3);
console.log(4 == 4 && 5 > 7);
console.log(10 != 10 && 3 == 3);
console.log(15 > 6 || 6 == 6);
console.log(5 > 10 || 9 < 5);
console.log(30 != 30 || 4 > 2);
console.log("\n test array");
let fruits = ["apple", "banana", "orange", "grapes"];
console.log("is banana is present in fruit array ");
console.log(fruits.includes("banana"));
console.log("\n test array that is not present in array");
console.log("is cheery is present in fruit array ");
console.log(!fruits.includes("cheery"));
export {};
