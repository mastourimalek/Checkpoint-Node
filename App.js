const http=require("http")
http.createServer((request,Response)=>{
    Response.end("Hello Node!!!!")
})
.listen(3000)

const fs =require("fs")
let data = fs.readFileSync("./welcome.txt")
console.log(data.toString())
