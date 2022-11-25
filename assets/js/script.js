// global variable declaration start here
const form = document.querySelector(".form"),
    hamburger = document.querySelector(".hamburger"),
    navbar = document.querySelector(".navbar"),
    html = document.querySelector('html'),
    firstName = document.querySelector(".first"),
    lastName = document.querySelector(".last"),
    position = document.querySelector(".position"),
    company = document.querySelector(".company"),
    email = document.querySelector(".email"),
    choose = document.querySelector(".company-type"),
    country = document.querySelector(".country"),
    scrollTop = document.querySelector(".scrollTop-btn"),
    yes = document.querySelector(".yes"),
    no = document.querySelector(".no"),
    check = document.querySelectorAll(".check"),
    nameRegex = /^[A-Za-z]+$/,
    emailRegex = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
let isvalid = false;
// global variable declaration start here
// hambuger function  start here
hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
    html.classList.toggle("html")
});
// hambuger function  end here
// form submit event start here
form.addEventListener("submit", function (e) {
    e.preventDefault();
    error = document.querySelectorAll(".fail");
    validation(firstName, nameRegex);
    validation(lastName, nameRegex);
    validation(position, nameRegex);
    validation(company, nameRegex);
    pick(choose);
    pick(country);
    validation(email, emailRegex);
    checkBox();
    if (isvalid === true && error.length === 0) {
        alert("Your form has been submitted successfully..!");
        form.reset();
    }
});
// form submit event end here
// validation function start here
function validation(input, regex) {
    const inputGroup = input.parentElement,
        spanError = inputGroup.querySelector(".input-span"),
        str = input.value;
    if (str == "") {
        spanError.classList.add("fail");
        inputGroup.classList.add("error");
        spanError.innerText = "*please enter your " + input.name;
        return isvalid = false;
    } else if (!regex.test(str)) {
        spanError.classList.add("fail");
        inputGroup.classList.add("error");
        spanError.innerText = "*please eneter a valid " + input.name;
        return isvalid = false;
    } else if (str.length < 4) {
        spanError.classList.add("fail");
        inputGroup.classList.add("error");
        spanError.innerText = "*it must be atleast 4 character";
        return isvalid = false;
    } else {
        spanError.classList.remove("fail");
        inputGroup.classList.add("succes");
        inputGroup.classList.remove("error");
        return isvalid = true
    }
};

function pick(optionInput) {
    const opt = optionInput.parentElement,
        spanError = opt.querySelector(".input-span");
    if (optionInput.value == "select") {
        spanError.classList.add("fail");
        spanError.innerText = "*please select a valid " + optionInput.name;
        return isvalid = false;
    } else {
        spanError.classList.remove("fail");
        return isvalid = true;
    }
};

yes.addEventListener('click', function () {
    if (yes.checked === true) {
        no.checked = false;
    }
})
no.addEventListener('click', function () {
    if (no.checked === true) {
        yes.checked = false;
    }
});

function checkBox() {
    spanError = document.querySelector(".yes-input");
    if ((yes.checked === true) || (no.checked === true)) {
        spanError.classList.remove("fail");
    } else {
        spanError.classList.add("fail");
        spanError.innerText = "*please select any one ";
        return isvalid = false
    }
};
// validation function end here
// input blur event start here
firstName.addEventListener("blur", function () {
    validation(firstName, nameRegex);
});

lastName.addEventListener("blur", function () {
    validation(lastName, nameRegex);
});

position.addEventListener("blur", function () {
    validation(position, nameRegex);
});

company.addEventListener("blur", function () {
    validation(company, nameRegex);
});

email.addEventListener("blur", function () {
    validation(email, emailRegex);
});

choose.addEventListener("blur", function () {
    pick(choose);
});

country.addEventListener("blur", function () {
    pick(country);
});

check.forEach(function (ele) {
    ele.addEventListener("blur", function () {
        checkBox();
    })
});
// input blur event end here
// scroll to the top start here
scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
// scroll to the top end here