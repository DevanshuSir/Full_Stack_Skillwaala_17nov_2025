// js advanced methods - map and forEach

// let numbers = [1,2,3,4,5]

// numbers.forEach((value,index)=>{
//     console.log("Value:- " + value + " Index :- "+ index)

// })


// forEach

// let fruits = ["apple","banana","kiwi"]

// console.log(fruits[1])

// function allValue(value,index){
//     // console.log(`value :- ${value} index:- ${index}`)
//     return value
// }

// fruits.forEach(allValue)

// map 

// let cars = ["Bmw","Mg","Hyundai","Honda"]

// cars.map((value,index)=>{
//     console.log(`value :- ${value} index:- ${index}`)
// })


// let fruits = ["apple","banana","kiwi"]

// const returnedValue = fruits.forEach((value,index)=>{
//     return value
// })

// console.log(returnedValue)


// const returnedValue = fruits.map((value,index)=>{
//     return value
// })

// console.log(returnedValue)


// const user = [
//     {user:"devanshu",age:89},
//     {user:"aman",age:29},
//     {user:"manny",age:39},
//     {user:"kizie",age:19},
// ]


// user.forEach((value,index)=>{
//     console.log(`${value.user} is ${value.age} years old.`)
// })


// const price = [100,200,300]

// const withGst = price.map((value,index)=>
//     value + value * 0.18
// )


// console.log(price)
// console.log(withGst)


// filter 

// let numbers = [1,2,3,4,5,6,7,8,9]

// const evens = numbers.filter((value ,index)=>{
//     return value %2 ===0
// })

// console.log(evens)


// const user = [
//     {user:"devanshu",age:89},
//     {user:"aman",age:29},
//     {user:"manny",age:39},
//     {user:"kizie",age:19},
// ]


// const ageFilter = user.filter((value,index)=>{
//     return value.age >= 30
// })

// console.log(ageFilter)



// point 1 - map


// point 2 - filter


// reduce 

// const number = [1,2,3,4,5]

// const total = number.reduce((acc,curr,index)=>{
//     return acc + curr
// },2)

// acc = 1 curr = 2  - 1+2 = 3
// acc = 3 curr = 3  - 3+3 = 6
// acc = 6 curr = 4  - 6+4 = 10
// acc = 10 curr = 5 - 10+5 = 15
// acc = 15 curr = undefiend   ===== 15

// acc = 2 curr = 1 - 2+1 = 3
// acc = 3 curr = 2 - 3+2 = 5
// acc = 5 curr = 3 - 5+3 = 8
// acc = 8 curr = 4 - 8+4 = 12
// acc = 12 curr = 5 - 12+5 = 17
// acc = 17 curr = undefiend  ======= 17

// console.log(total)


// const cart = [
//     {item:"shoes", price:1000},
//     {item:"t-shirt",price:500},
//     {item:"jeans",price:1200}
// ]

// const totalPrice = cart.reduce((acc,value)=>{
//    return acc + value.price
// },0)

// console.log(`Total Price :- ${totalPrice}`)

// const fruits = ["apple","banana","apple","orange","banana","apple","orange"]


// const totalFruits = fruits.reduce((acc,value)=>{
//     acc[value] = (acc[value] || 0) + 1
//     // apple = false || 0 +1 = 1
//     // apple = 1 + 1 = 2
//     return acc
// },{})

// console.log(totalFruits)


// {
//     apple : 3,
//     banana : 2,
//     orange : 2,


// }

// let obj = {}


// obj["city"] = "jaipur"
// obj["age"] = 78

// console.log(obj)



