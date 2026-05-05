const http = require("http")
const fs = require("fs")
const homePage = fs.readFileSync("./index.html")
const CssHomePage = fs.readFileSync("./css/style.css")
const JsHomePage = fs.readFileSync("./js/index.js")
const ImageHomePage = fs.readFileSync("./media/thumb.jpg")

const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write(homePage)
        res.end()
    }else if(req.url === "/css/style.css"){
        res.write(CssHomePage)
        res.end()
    }else if(req.url==="/js/index.js"){
        res.write(JsHomePage)
        res.end()
    }else if(req.url === "/media/thumb.jpg"){
        res.write(ImageHomePage)
        res.end()
    }else{
        res.end("Page Not Found")
    }
})


server.listen(3000)

