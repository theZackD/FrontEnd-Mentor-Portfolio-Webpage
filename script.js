const emailadress = document.querySelector('#Email')
const MSG = document.querySelector('#Message')
const errMsg = document.querySelector('.error')

let ValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 

let Correct_email = ValidEmail.test(emailadress.value)


ErrorMessage = function() {

    if (Correct_email) {
        errMsg.textContent = '';
        emailadress.className = "Inputf";
    } else {
        errMsg.textContent = 'Invalid email adress';
        emailadress.className = 'Inpute'
    }

}

MSG.onclick = ErrorMessage()