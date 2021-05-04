let formFree = document.querySelector('#form-free')
let inputFirstName = document.querySelector('#input-first-name')
let inputLastName = document.querySelector('#input-last-name')
let inputEmail = document.querySelector('#input-email')
let inputPassword = document.querySelector('#input-password')
let errorFirstName = document.querySelector('#error-first-name')
let errorLastName = document.querySelector('#error-last-name')
let errorEmail = document.querySelector('#error-email')
let errorPassword = document.querySelector('#error-password')
let iconFirstName = document.querySelector('#input-first-name + span.icon')
let iconLastName = document.querySelector('#input-last-name + span.icon')
let iconEmail = document.querySelector('#input-email + span.icon')
let iconPassword = document.querySelector('#input-password + span.icon')

function showError(input, error, icon){
     input.classList.add('input-is-danger')
     icon.classList.remove('is-hidden')
     error.classList.remove('is-hidden')
}

function hideError(input, error, icon){
     input.classList.remove('input-is-danger')
     icon.classList.add('is-hidden')
     error.classList.add('is-hidden')
}

function showEmailError(){
     inputEmail.placeholder = 'email@example/com'
}

function hideEmailError(){
     inputEmail.placeholder = 'Email Address'
}

function checkInput(input, error, icon){
     if(input.value === ''){
          showError(input, error, icon)
          return false;
     } else {
          hideError(input, error, icon)
          return true;
     }
}

function checkEmail(input, error, icon){
     let emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

     if(input.value === '' || !emailFormat.test(input.value)){
          showError(input, error, icon)
          showEmailError()
          return false;
     } else{
          hideError(input, error, icon)
          hideEmailError()
          return true;
     }
}

function checkForm(event){
     let checkList = [];


     checkList.push(checkInput(inputFirstName, errorFirstName, iconFirstName))
     checkList.push(checkInput(inputLastName, errorLastName, iconLastName))
     checkList.push(checkEmail(inputEmail, errorEmail, iconEmail))
     checkList.push(checkInput(inputPassword, errorPassword, iconPassword))

     checkList.forEach((list) => {
          if(!list){
               event.preventDefault()
          }
     })

}

formFree.addEventListener('submit', checkForm)