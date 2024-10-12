function validate(e){
    e.preventDefault()
const email=document.getElementById("email").value 
const password=document.getElementById("password").value
const age=document.getElementById("age").value
const msgbox=document.getElementById("message")
let message=""
if (email==""){
    message="Please enter email"
    msgbox.style.color="red"
}
else if (password==""){
    message="Please enter password"
    msgbox.style.color="red"
}
else if (age==""){
    message="Please enter age"
    msgbox.style.color="red"
}
else {
    message="Login sucessful!"
    msgbox.style.color="green"
}
msgbox.innerHTML=message
}

