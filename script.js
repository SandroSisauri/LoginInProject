const SignUpEmail = document.getElementById('email')
const SignUpPass = document.getElementById('pass')
const SignUpButton = document.getElementById('signup')
const LoginInEmail = document.getElementById('eemail')
const LoginInPass = document.getElementById('ppass')
const LoginInButton = document.getElementById('loginin')


SignUpButton.addEventListener('click',()=>{
    let SignEmailVal = SignUpEmail.value;
    let SignPass = SignUpPass.value;

    alert('You Succesfuly Created Account')


}) 


LoginInButton.addEventListener('click',()=>{
    let SignEmailVal = SignUpEmail.value;
    let SignPass = SignUpPass.value;
    let LoginEmailVal = LoginInEmail.value
    let LoginInPassVal = LoginInPass.value

    if(SignEmailVal == LoginEmailVal && SignPass == LoginInPassVal){
        alert('you logined in')
    }else{
        alert('Check password')
    }

}) 




    

      