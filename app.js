const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input error message
const showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;

}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add('success')
}


// Check email is valid

const isValidEmail = (email) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


// check required fields

const checkRequired = (inputArr)=>{
    inputArr.forEach((item)=>{
        if(item.value.trim() === ''){
            showError(item, `${getFieldName(item)} is required`);
        } else {
            showSuccess(item);
        }

    });
}

// Get fieldname
const getFieldName = (input)=>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}
//Event Listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([username, email, password, password2]);

   /*  //username
    if(username.value === '') {
        showError(username, 'Username is required')
    } else {
        showSuccess(username);
    }

    //email
    if(email.value === '') {
        showError(email, 'Email is required')
    } else if(!isValidEmail(email.value)){
        showError(email, 'Email is not valid')
    } else {
        showSuccess(email);
    }

    //password
    if(password.value === '') {
        showError(password, 'Password is required')
    } else {
        showSuccess(password);
    }

    //password2
    if(password2.value === '') {
        showError(password2, 'Confirm password is required')
    } else {
        showSuccess(password2);
    } */


    
})