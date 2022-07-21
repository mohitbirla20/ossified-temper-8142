async function getData(){
    event.preventDefault();

    let UserContact = {
          FirstName : document.getElementById("firstname").value ,
          LastName : document.getElementById("lastname").value ,
          Email : document.getElementById("email").value ,
          PhoneNo : document.getElementById("number").value ,
          Massage : document.getElementById("message").value ,
    }
    
    UserContact = JSON.stringify(UserContact);
  
    let Contact_api_link = 'http://localhost:3000/api/UserContact'
    
    let response = await fetch(Contact_api_link,{
        method : 'POST',
       body : UserContact,
      //  mode : "no-cors",
       headers : {
        'Content-Type' : 'application/json'
       }
    })
    
     let data = await response.json();
     console.log(data);
    //custom setting; get or post 
    }
   
    // UserContact = JSON.stringify(UserContact);

    // let contactAPI = "http://localhost:3000/api/UserContact"

    // let response = await fetch(contactAPI,{
    //     method:"POST",
    //     body : UserContact,

    //     headers : {
    //         'Content-Type' : 'application/json'
    //        }
    // });

    // let data = await response.json();
    // console.log(data)
