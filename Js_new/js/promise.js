// Promise 
// Pending fulfill rejected 


// fetch('https://dummyjson.com/products').then().catch().finally();



// let myPromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task....")
//         // resolve({userName:"Devanshu"})
//         reject("Error loading data...")
//     },2000)
// }).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })


// console.log(myPromise)




// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task done....👍")

//         let success = true
//         if(success){
//             resolve("Data Loading successfully...")
//         }else{
//             reject("Error Loading data...")
//         }

//     },3000)
// }).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise Finished..")
// })



// let promise = new Promise((resolve,reject)=>{
//     resolve(10)
// })

// promise.then((num1)=>{
//     return num1*2
// }).then((num2)=>{
//     return num2*3
// }).then((num3)=>{
//     console.log(num3)
// })



// fetch("https://fakestoreapi.com/products").then((data)=>{
//     return data.json()
// }).then((res)=>{
//     console.log(res)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log('Data Fetching Finished..')
// })


// Point 1 - Promise 
// Point 2 - Fetch



