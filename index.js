const express = require("express");
const socket = require("socket.io");
var app = express();
let isConnected = false;

var server = app.listen(4000 , function (){
    console.log("Your server is running on port 4000")
    }
)
app.use(express.static("public"));
var sockServer = socket(server);

sockServer.on("connection" , () => {
    isConnected = true;
    console.log("Web socket is connected" , socket.id)
})
