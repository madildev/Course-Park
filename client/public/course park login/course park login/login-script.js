// modal items

// takes the entire page
const modal= document.getElementById('email-modal');
const openbtn = document.querySelector('.main-btn');
const closebtn=document.querySelector('.close-btn');

// click events
openbtn.addEventListener('click', () => {
    modal.style.display= ('block');
})

closebtn.addEventListener('click', () => {
    modal.style.display='none';
})

window.addEventListener('click',(e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
})

// form validation

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');

// show error message
function showError(input,message)
{
    const formValidation= input.parentElement;
    formValidation.className = 'form-validation error';

    const errorMessage= formValidation.querySelector('p');
    errorMessage.innerText = message;
}

// show valid message
function showValid(input){
    const formValidation= input.parentElement;
    formValidation.className = 'form-validation valid';
 
}

// check required feilds
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showValid(input);
        }
    })
}

// cecking the input lengths
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be atleast ${min} char`);
    }else if(input.value.length>max){
        showError(input,`${getFieldName(input)} can be atmost ${max} char`); 
    }else{
        showValid(input);
    }
}

// match the passwords
function passwordMatch(input1,input2){
    if(input1.value!== input2.value){
        showError(input2, 'Passwords do not match');
    }
}


// get feild name

function getFieldName(input){
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

// Event listeners

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    checkRequired([name,email,password,passwordConfirm]);
    checkLength(name,3,20);
    checkLength(password,8,25);
    checkLength(passwordConfirm,8,25);
    passwordMatch(password,passwordConfirm);
})

// swapping
const signinBtn = document.querySelector(".swap-btn-right");
const signupBtn = document.querySelector(".swap-btn-left");
const mainContainer = document.querySelector(".modal-conteng");
// adding and removing containers on clicking signup-in btn
signupBtn.addEventListener('click',()=> {
    container.classList.add(".modal-content-left");
})
signinBtn.addEventListener('click',()=> {
    container.classList.remove(".modal-content-right");
})