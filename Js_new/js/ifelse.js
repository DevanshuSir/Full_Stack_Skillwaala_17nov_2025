// Syntax

/**
    if(condition){
            // agar ye condition ye true hoti hai to ye code chalega 
    }else{
            // agar if part false hota hai to ye code chalega
        }
 */


// let age = 13

// if(age >= 18){
//     console.log("You can vote..")
// }else{
//     console.log("You cannot vote yet..")
// }


/**

    if(condition){
    // code run
    }else if(condition){
    // code run
    }else if(condition){
    // code run
    }else{
        // code run
        }

 */


// let marks = prompt("Enter Marks:- ")

// if(marks>=90){
//     console.log("Grade A")
// }else if(marks >= 75){
//     console.log("Grade B")
// }else if(marks >= 50){
//     console.log("Grade C")
// }else{
//     console.log("Fail")
// }



// let num = prompt("Enter Number:- ")

// if(num % 2 === 0 ){
//     console.log("Even Number")
// }else{
//     console.log("Odd Number")
// }


// let a = prompt("Enter First Number :- ")
// let b = prompt("Enter Second Number:- ")

// if(a>b){
//     console.log("First Number is Larger number")
// }else{
//     console.log("Second Number is Larger number")
// }



// let userName = prompt("Enter UserName :- ")
// let password = prompt("Enter Password :- ")

// if(userName === "admin" && password === "12345"){
//     console.log("Login Successfully")
// }else{
//     console.log("Invalid Credentials..")
// }



// let age = prompt("Enter Age :- ")

// if(age >= 18){
//     console.log("You are eligible for a driving license..")
// }else if(age >= 16 && age<18){
// console.log("You can apply for a learners license..")
// }
// else{
//     console.log("You are not eligible for any license yet..")
// }


// nested if else 

/**

    if(){
            if(){
                if(){
                
                }
            }    
    }

 */


// package.json -> npm init -y
// package install -> prompt-sync -> npm i prompt-sync
// package-lock.json / node_module 
// package is ready to use 
let prompt = require('prompt-sync')();

let age = prompt("Enter your age :- ")
let hasId = true

if(age >= 18){    // 12 >= 18 false // 18 >= 18 true // 67 >= 18 true
    if(hasId){
        console.log("Allowed to Enter..")
    }else{
        console.log("Id Required..")
    }
}else{
    console.log("Not allowed..")
}


// condition

// ifelse 

