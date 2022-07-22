let form = document.querySelector("form");


let userdata =JSON.parse(localStorage.getItem("userdata")) || [];
form.addEventListener("submit",function(event){
    event.preventDefault();
   let data = {
    email:form.email.value,
    password:form.password.value,
   } 
   if(checkSignin(data.email,data.password)===true){
    localStorage.setItem("loggedInData",JSON.stringify(data));
    alert("Sign in Successful");
    window.location.href = "index.html";
   }else{
    alert("Invalid username or password");
   }
})

function checkSignin(email,password){
let filter = userdata.filter(function(elem){
    return elem.email === email && elem.password === password;
})
if(filter.length>0){
    return true;
}else{
    return false
}
}

let showpass = document.querySelector("#showbtn");
showpass.addEventListener("click",showPassFun);

function showPassFun(){
    let passget = document.querySelector("#password");
    let showicon = document.querySelector("#show");
    
    if(passget.type === "password"){
        passget.type = "text";
        showicon.innerText = "visibility_off";
    }else{
        passget.type = "password";
        showicon.innerText = "visibility";
    }
}