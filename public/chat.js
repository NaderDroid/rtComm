const socket = io.connect("http://localhost:4000");

const msg = document.getElementById("message");
const btn = document.getElementById("send");
const username = document.getElementById("username");
const output = document.getElementById("output");
console.log("Nader from chat js");


//here we're sending the data (user message) to the server
btn.addEventListener("keyup" , ()=>{
    console.log(socket.id);
    socket.emit("sendMessage" , {
        'message' : msg.value,
        'username' : username.value
    })
    msg.value = "";
})
socket.on("broadCast" , (data) => {
    output.innerHTML += '<p>' + data.username + ": " + data.message + '</p>'
})