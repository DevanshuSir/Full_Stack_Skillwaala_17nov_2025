// shallow copy and deep copy

// let a = 10
// let b = a
// b = 20

// console.log(a)
// console.log(b)

// let obj_one = {
//     userName:"Devanshu"
// }

// let obj_two = obj_one

// obj_two.userName = "Manny"

// console.log(obj_one)
// console.log(obj_two)


// shallow copy

// let obj_one = {
//     userName:"Dev",
//     age:79
// }


// // let obj_two = Object.assign({},obj_one)

// let obj_two = {...obj_one}

// obj_one.age = 98
// obj_two.userName = "Aman"

// console.log(obj_one)
// console.log(obj_two)


// let obj_one = {
//     userName:"Aman",
//     age:45,
//     address:{
//         city:"Jaipur",
//         pinCode:5678
//     }
// }


// let obj_two = {...obj_one}


// obj_two.userName = "Manny"
// obj_two.address.city = "Ajmer"

// console.log(obj_one)
// console.log(obj_two)



// Deep copy

// let obj_one = {
//     userName:"Aman",
//     age:45,
//     address:{
//         city:"Jaipur",
//         pinCode:5678
//     }
// }

// let obj_two = JSON.parse(JSON.stringify(obj_one))


// obj_two.userName = "Devanshu"

// obj_two.address.city = "Ajmer"

// console.log(obj_one)
// console.log(obj_two)


// let apiData = {
//     user:{name:"Dev",email:"dev@gmail.com"},
//     setting:{theme:"dark"}
// }


// shallow copy

// let copy1 = {...apiData}
// copy1.setting.theme = "light"

// console.log(copy1.setting.theme)
// console.log(apiData.setting.theme)

// deep copy

// let copy2 = JSON.parse(JSON.stringify(apiData))
// copy2.setting.theme = "blue"

// console.log(apiData.setting.theme)
// console.log(copy2.setting.theme)

// let apiData = {
//     user:{name:"Dev",email:"dev@gmail.com"},
//     setting:{theme:"dark"}
// }

// let copy = structuredClone(apiData)


// copy.setting.theme = "blue"

// console.log(apiData)
// console.log(copy)



// shallow copy

// Object.assign({},obj_name)
// {...obj_name}


// Deep copy

// JSON.parse(JSON.stringify(obj_name))
// structuredClone(obj_name)


