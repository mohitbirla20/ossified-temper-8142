let form = document.querySelector("form");
let userdata =JSON.parse(localStorage.getItem("userdata")) || [];
form.addEventListener("submit",function(event){
    event.preventDefault();
    let data={
        name:form.name.value,
        Mobile:form.contact.value,
        email:form.email.value,
        password:form.password.value,
        confirmPassword:form.confirmPassword.value

    }
    if(checkEmail(data.email)===true){
        userdata.push(data);
        localStorage.setItem("userdata",JSON.stringify(userdata));
        alert("Sign Up Successful");
        window.location.href = "index.html";
    }else{
        alert("Email already registered!!")
    }
    
})

function checkEmail(email){
    let filtered = userdata.filter(function(elem){
        return email === elem.email;
    })
    if(filtered.length> 0){
        return false;
    }else{
        return true;
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

    