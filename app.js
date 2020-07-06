const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');


//create function for show error
 function showError(input,message){
 const formControl=input.parentElement;
 formControl.className='form-control error';
 const small= formControl.querySelector('small');
 small.innerText=message;
}

//create function for show success

function showsuccess(input)
{
  const formControl=input.parentElement;
 formControl.className='form-control success';
}


//create function for checkEmpiy array

function checkEmpity(inputArr)
{
inputArr.forEach(function(input){
if(input.value.trim() === ''){
  showError(input,`${input.id} is required`);
} else {
  showsuccess(input);
}
});
}


//create function for checkEmail 
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}


//create function for check username lenght
function checkLength(input,min,max)
{
  if(input.value.length < min) {
    showError(input,`${input.id} must be least ${min} charachers`);
  } else if (input.value.length > max) {
    showError(input,`${input.id} must be less than ${max} charachers`);
  } else {
    showsuccess(input);
  }
}


//create function for password match

function checkPasswordsMatch(input1,input2){
  if(input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }

}



form.addEventListener('submit',function(e){

checkEmpity([username,email,password,password2]);
checkEmail(email);
checkLength(username,3,25);
checkLength(password,6,25);
checkPasswordsMatch(password, password2);




  e.preventDefault();
})