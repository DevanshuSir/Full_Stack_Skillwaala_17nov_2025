// Data Types In js 

// Primitive data types 
// Non-Primitive data types 

// Primitive data types 
// 1 . String - "" , '' , ``
// let text = `Hello everyone`
// console.log(text)
// console.log(typeof text)


// 2 . Number
// let age = -78.87987
// console.log(age)
// console.log(typeof age)

//3.  Boolean

// let isLoggedIn = true
// let isPaid = false
// console.log(isPaid)
// console.log(typeof isPaid)
// console.log(isLoggedIn)
// console.log(typeof isLoggedIn)

//4. Undefined

// let a ;
// a = "Devanshu"
// console.log(a)
// console.log(typeof a)


// 5 . Null

// let student ;
// let student = null
// student = "Aman"
// console.log(student)
// console.log(typeof null)


// 6.  Symbol

// let id1 = Symbol("user")
// let id2 = Symbol("user")
// console.log(id1)
// console.log(id1 === id2)


// 7. BigInt

// let bigNum = 546788989765435678908765645345678

// let another = BigInt(bigNum)

// console.log(another)
// console.log(typeof another)


// Non - primitive data types 
// Object , Array , Function



// Array 

// let myArray = ["apple","Mango","BMW",67,true]
// // index -       0        1       2   3   4

// console.log(myArray[2])


// var firstName = "Aman"

// var firstName = "Manny"

// console.log(firstName)



// var first_name = "Hello"

// {
//     var first_name = "Manny"
// }

// console.log(first_name)


// let userName = "Hello class"

// {
//     let userName = "Mannny"
//     console.log(userName)
// }

// console.log(userName)

// Obj -

// let student = {
//     name : "Devanshu",
//     age : 45,
//     isStudent:true
// }

// const {name , age , isStudent} = student

// console.log(name)
// console.log(age)

// console.log(student)
// console.log(typeof student)
// console.log(student.age)


const mix = ["devanshu",28,true]

// console.log(mix[1])

const [username , age , isStudent ] = mix

console.log(isStudent)

