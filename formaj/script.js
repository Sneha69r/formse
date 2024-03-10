$(document).ready(function () {



    // $("#name").focusout(function () {

    //     checkName();
    // })

    // $("#email").focusout(function () {

    //     checkEmail()
    // })

    // $("#phone").focusout(function () {

    //     checkNumber();
    // })

    // $("#gender").focusout(function () {

    //     checkGender();
    // })

    // $("#message").focusout(function () {

    //     checkMessage();
    // })


});





function closeForm() {

    document.getElementById("showform").classList.add('d-none');


    document.getElementById("myForm").reset();
    //   location.reload();
    //   window.location.href = window.location.href;  

    let formerr = document.getElementsByClassName("formerror");
    // console.log(formerr);
    for (let i = 0; i < formerr.length; i++) {
        formerr[i].innerHTML = "";
    }


}


function displayForm() {

    document.getElementById("showform").classList.remove('d-none');
    document.getElementById("update_data").classList.add("d-none");
    document.getElementById("submit_data").classList.remove("d-none");


}

function setError(id, error) {

    let element = document.getElementById(id);
    element.innerHTML = error;


}

function checkName() {

    let name = $("#name").val();
    let letters = /^[a-zA-Z_]+( [a-zA-Z]+)*$/;

    if (!letters.test(name) || name.length < 5) {
        setError("errorname", "please provide a valid name!")
        return false;
    }
    else {

        setError("errorname", "");
        return true;
    }

}

function checkEmail() {

    let email = $("#email").val();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email) && email !== "" || email == "") {
        setError("erroremail", "please provide a valid email!")
        return false;
    }
    else {
        setError("erroremail", "")
        return true;
    }
}

function checkNumber() {

    let phoneNumber = $('#phone').val();
    let phoneNumberRegex = /^[0-9]+$/;

    if (!phoneNumberRegex.test(phoneNumber) || phoneNumber === "" || phoneNumber.length < 10) {

        setError("errorphone", "please provide a valid 10 digits number!")
        return false;
    }

    else {

        setError("errorphone", "");
        return true;
    }
}

function checkGender() {

    let gender = $('#gender').val();

    if (gender == '') {

        setError("errorgender", "please select a gender!");
        return false;

    }

    else {

        setError("errorgender", "");
        return true;
    }

}

function checkMessage() {

    let message = $('#message').val();
    if (message === '') {
        setError("errormessage", "please enter a valid message!");
        return false;
    }

    else {

        setError("errormessage", "");
        return true;
    }
}




function validateForm() {


    // checkEmpty()
    // if (!checkName() || !checkEmail() || !checkNumber() || !checkGender() || !checkMessage()) {

    //     return false;
    // }

    // else {
    //     if (alertBox()) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }

    // }
    // return true;

}






function alertBox() {

    let name = $("#name").val();

    let email = $("#email").val();

    let phoneNumber = $("#phone").val();

    let gender = $("#gender").val();

    let message = $("#message").val();


    // if (name === "" || email === "" || phoneNumber === "" || gender === "" || message === "") {
    //     alert("Please fill all the details.");
    //     return false;
    // }

    // if (!checkName() || !checkEmail() || !checkNumber() || !checkGender() || !checkMessage()) {
    //     alert("Please fill all the details correctly.");
    //     return false;
    // }


    if (confirm(("Name: " + name + "\nEmail: " + email + "\nPhoneNumber:" + phoneNumber + "\nGender: " + gender + "\nMessage:" + message))) {
        return true;
    }
    else {
        return;
    }
}


function checkEmpty() {

    let name = $("#name").val();

    let email = $("#email").val();

    let phoneNumber = $("#phone").val();

    let gender = $("#gender").val();

    let message = $("#message").val();

    if (name == "") {

        setError("errorname", "please provide a valid name!")

    }

    if (email == "") {

        setError("erroremail", "please provide a valid email!")


    }

    if (phoneNumber === "") {
        setError("errorphone", "please provide a valid 10 digits number!")

    }

    if (gender == "") {

        setError("errorgender", "please select a gender!");

    }


    if (message === "") {

        setError("errormessage", "please enter a valid message!");


    }





}