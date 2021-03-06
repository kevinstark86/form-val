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

const checkEmail = (input) =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);

    } else {
        showError(input, 'Email is not valid');
    }
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

// Check input length

const checkLength = (input, min, max)=>{
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} maximum characters is ${max}`);
    } else {
        showSuccess(input);
    }

}

// Check passwords match

const checkPassswordsMatch = (input1, input2) =>{
    if(input1.value === input2.value){
        showSuccess(input1);
    } else {
        showError(input2, 'Passwords do not match');
    }
}

// Get fieldname
const getFieldName = (input)=>{
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

//Event Listener
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPassswordsMatch(password, password2);
})