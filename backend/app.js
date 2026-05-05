const http = require("http")
const fs = require("fs")

// create a file 
// fs.writeFile("demo.txt","Hello Node js fs module class",(err)=>{
//    if(err) throw err
//    console.log("File Created Successfully")
// })

// Read a File 
// fs.readFile("demo.txt","utf8",(err,data)=>{
//    if(err) throw err
//    console.log(data)
// })

// Update a file 

// fs.appendFile("demo.txt","\n Welcome to node class",(err)=>{
//    if(err) throw err
//    console.log("File Update")
// })


//Delete a  file 

fs.unlink("demo.txt",(err)=>{
   if(err) throw err
   console.log("file deleted")
})

const server = http.createServer((req,res)=>{
   if(req.url==='/'){
    res.end("Hello Node js HomePage")
   }else if(req.url==="/about"){
    res.end("Hello About Page")
   }else if(req.url==="/contact"){
    res.end("Hello Contact Page")
   }else{
    res.end("404 Page Not Found")
   }
})


server.listen(5000)



