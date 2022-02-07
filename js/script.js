var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector('#button').addEventListener('click', function(){
    let input = document.getElementById('email').value;
    
    if(!input){
        document.querySelector('.error').style.display ="block";
        document.querySelector('.error').textContent = "Please enter your email"
        document.querySelector('#email').style.borderColor ="red";
    }
    else if(!input.match(pattern)){
        document.querySelector('.error').style.display ="block";
        document.querySelector('.error').textContent = "Please provide a valid email address"
        document.querySelector('#email').style.borderColor ="red";
    }
    else{
        document.querySelector('.error').style.display ="none";
        document.querySelector('#email').style.borderColor ="grey";
    }
})