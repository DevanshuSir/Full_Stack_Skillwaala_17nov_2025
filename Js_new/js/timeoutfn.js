// setTimeOut and setInterval

// syntax - setTimeout(function,delay)


// milliSecond - 1000 - 1sec

// console.log("Start")
// setTimeout(()=>{
//     console.log("Hello after 2 sec")
// },2000)
// console.log("End")


// setTimeout(()=>{console.log("message:after 1sec")},1000)
// const id = setTimeout(()=>{console.log("message:after 2sec")},2000)
// setTimeout(()=>{console.log("message:after 3sec")},3000)

// clearTimeout(id)


// setInterval

// syntax - setInterval(function,delay)

// setInterval(()=>{
//     console.log("Hello class")
// },1000)


// let count = 1
// const id = setInterval(()=>{
//     console.log(`Counts :- ${count}`)
//     count++

//     if(count>5){
//         clearInterval(id)
//         console.log("Stopped..!")
//     }

// },1000)


let timeout = 5

let timer = setInterval(()=>{
    console.log(`Time Left - ${timeout}`)
    timeout--

    if(timeout<0){
        clearTimeout(timer)
        console.log("Time's Up..!")
    }

},1000)

