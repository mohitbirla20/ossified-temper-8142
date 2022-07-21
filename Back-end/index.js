// getData
// signup Data object;
// where to post the dat

    
async function Register(){
    event.preventDefault();
  let  UserContact= { 
  
   name : document.getElementById("firstname").value,
   lastname : document.getElementById("lastname").value,
   email : document.getElementById("email").value,
   mobile : document.getElementById("number").value,
  massage  : document.getElementById("message").value,
   
  };
  
  UserContact = JSON.stringify(UserContact);
  
  let signup_api_link = 'http://localhost:3000/api/UserContact'
  
  let response = await fetch(signup_api_link,{
      method : 'POST',
     body : UserContact,
    //  mode : "no-cors",
     headers : {
      'Content-Type' : 'application/json'
     }
  })
  
   let data = await response.json();
//    if(data.message === 'Registration Success'){
//         alert("Sign-up Succes");
//        window.location = "login.html"
//    }
   console.log(data);
  //custom setting; get or post 
  }
 


// async function getData(){
//     event.preventDefault();

//     let UserContact = {
//           FirstName : document.getElementById("firstname").value ,
//           LastName : document.getElementById("lastname").value ,
//           Email : document.getElementById("email").value ,
//           PhoneNo : document.getElementById("number").value ,
//            Massage : document.getElementById("message").value ,
//     }
    
//     UserContact = JSON.stringify(UserContact);
  
//     let Contact_api_link = 'http://localhost:3000/api/UserContact'
    
//     let response = await fetch(Contact_api_link,{
//         method : 'POST',
//        body : UserContact,
//       //  mode : "no-cors",
//        headers : {
//         'Content-Type' : 'application/json'
//        }
//     })
    
//      let data = await response.json();
//      console.log(data);
//     //custom setting; get or post 
//     }