





 function pics(){
      document.getElementById("pic").src="images/pics.jpg";
  }
  function pic(){
    document.getElementById("pic").src="images/pic.jpg";
}

function home(){
      document.getElementById("kitchens").src="images/home.jpg";
  }
  function kitchens(){
    document.getElementById("kitchens").src="images/kitchens.jpg";
}


function changeBg() {
    document.body.style.backgroundColor="#ff0000";

}

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  const newDiv = document.createElement("div"); 
  
    
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
  return false;
}


function validateLogin() {
   
    var uname = document.login.user.value;
    var upass = document.login.pass.value;

    //checking the form elements are filled or not
    if(uname == "" && upass == "") {
        document.getElementById("loginError").innerHTML="Username and Password is required";
        document.login.user.focus();
        return false;
    }
    else if(uname == "") {
        document.getElementById("loginError").innerHTML="Username is required";
        document.login.user.focus();
        return false;
    }
   else if(upass == "") {
        document.getElementById("loginError").innerHTML="Password is required";
        document.login.pass.focus();
        return false;
    }
   
    else
    	{return true;
    }
}





