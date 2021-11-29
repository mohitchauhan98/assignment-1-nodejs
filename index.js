const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req,response) =>{
    if (req.url == "/"){
        fs.readFile("./index.html" , (err , data) => {
            response.writeHead(200,{'Content-type' : "text-html"});
            response.write(data);
            response.end();
        })
    }


    else if (req.url == "/video"){
        fs.readFile("./Dolphin.mp4" , (err , data) => {
            if (!err){
            response.writeHead (200 , { 'Content-type' : "video/mp4"});
            response.write(data);
            response.end();
        }
        })
    }

    else if(req.url="/books"){
        response.writeHead(200,{'Content-type':"application/json"});
        response.write(JSON.stringify({data:[{Name:"NODEJS",Author:"Anudeep sir",Publisher:"Edyoda"}]}));
        response.end();
    }
    else{
        response.writeHead(404);
        response.write("404 not found");
        response.end();
    }


});
server.listen(port , (err) => {
    if (err){
        console.log("Error")
    }else{
        console.log(`server started running on ${port}`)
    }
})

