const express = require("express");
const socketIO = require("socket.io");
var app = express();
let isConnected = false;

var server = app.listen(4000 , function (){
    console.log("Your server is running on port 4000")
    }
)
app.use(express.static("public"));
var sockServer = socketIO(server);

sockServer.on("connection" , (socket) => {
    isConnected = true;
    console.log("Web socket is connected" , socket.id)
})
