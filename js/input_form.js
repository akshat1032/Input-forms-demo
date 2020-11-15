const text = document.querySelector('#text');
const textError = document.querySelector(".text-error");
text.addEventListener('input', function () {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else
        textError.textContent = "Name is Incorrect";
});

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener('input', function () {
    let emailRegex = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else
        emailError.textContent = "Email is invalid";
});

const phone = document.getElementById("tel");
const phoneError = document.querySelector(".tel-error");
phone.addEventListener('input', function () {
    let phoneRegex = RegExp("^[0-9]{1,}[ ][1-9]{1}[0-9]{9}$");
    if (phoneRegex.test(phone.value))
        phoneError.textContent = "";
    else
        phoneError.textContent = "Phone number is invalid";
});

const password = document.getElementById("pwd");
const passwordError = document.querySelector(".pwd-error");
password.addEventListener("input", function () {
    let passwordRegex = RegExp("^(?=.*\\d)(?=.*[A-Z])(?=.*\\W)(?!.*\\W\\w*\\W)(?!.*\\s).{8,}$");
    if (passwordRegex.test(password.value))
        passwordError.textContent = "";
    else
        passwordError.textContent = "Invalid Password"
});

const salary = document.querySelector('#salary');
const output = document.querySelector(".salary-output");
output.textContent = salary.value;
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});