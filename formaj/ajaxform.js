document.getElementById("submit_data").addEventListener("click", function () {
    insertVal();
});


$(document).ready(function () {

    getData();
    document.getElementById('myForm').reset();

});



function insertVal() {

    // if (validateForm()) {

    //     insertData();
    // }
    insertData();



    // else {
    //     alert("please fill the details")
    // }
}



function insertData() {

    let name = $('#name').val();
    let email = $('#email').val();
    let phoneNumber = $('#phone').val();
    let gender = $('#gender').val();
    let message = $('#message').val();


    $.ajax({

        url: "config/insert1.php",
        type: "post",
        data: {

            user_name: name,
            user_email: email,
            user_phone: phoneNumber,
            user_gender: gender,
            user_message: message
        },
        success: function (data) {

            let response = JSON.parse(data);
            if (response.status === 200) {
                // console.log(response)
                // alert(data);
                if (alertBox()) {

                    document.getElementById('myForm').reset();
                    closeForm();
                    getData();
                }

                else {
                    console.log("cancelled");
                    return;


                }

            }
            else {
                alert(response.message)
            }




        }


    })

}




function getData() {

    $.ajax({

        url: "config/getData.php",
        type: "get",
        success: function (data) {

            let response = JSON.parse(data);
            // console.log(response);

            let tr = '';
            for (let i = 0; i < response.length; i++) {

                let sno = response[i].sno;
                let name = response[i].name;
                let email = response[i].email;
                let phoneNumber = response[i].phone;
                let gender = response[i].gender;
                let message = response[i].message;

                tr += '<tr>';
                tr += '<td>' + sno + '</td>';
                tr += '<td>' + name + '</td>';
                tr += '<td>' + email + '</td>';
                tr += '<td>' + phoneNumber + '</td>';
                tr += '<td>' + gender + '</td>';
                tr += '<td>' + message + '</td>';
                tr += '<td><button type="button" class="btn btn-warning text-decoration-none" onclick="singleRecord(' + sno + ')">Edit</button></td>';
                tr += '<td><button type="button" class="btn btn-danger text-decoration-none" onclick="deleteData(' + sno + ')">Delete</button></td>';

                tr += '<td class="input_data d-none" id="id_input"><span class="d-none" id="uniqueid">' + sno + '</span></td>';

                tr += '</tr>';


            }

            $('#display_data').html(tr);

        }

    })
}


function deleteData(value) {
    if (confirm("Are you sure you want to delete data?")) {
        $.ajax({

            url: "config/delete.php",
            type: "get",
            data: {
                deleteid: value
            },

            success: function (data) {


                getData();
                alert(data);

            }


        })
    }

}


function singleRecord(value) {
    displayForm();
    document.getElementById("update_data").classList.remove("d-none");
    document.getElementById("submit_data").classList.add("d-none");

    $.ajax({

        url: "config/record.php",
        type: "get",
        data: {
            updateid: value
        },
        success: function (data) {

            let response = JSON.parse(data);
            // console.log(response);

            let name = response[0].name;
            let email = response[0].email;
            let phoneNumber = response[0].phone;
            let gender = response[0].gender;
            let message = response[0].message;
            let spanfield = response[0].sno;
            console.log(spanfield)

            document.getElementById("name").value = name;
            document.getElementById("email").value = email;
            document.getElementById("phone").value = phoneNumber;
            document.getElementById("gender").value = gender;
            document.getElementById("message").value = message;
            document.getElementById("hiddenfield").innerHTML = spanfield;

            //form filling



        },
        error: function (data) {
            alert("error")
        }

    })


}

document.getElementById("update_data").addEventListener('click', function () {

    if (validateForm()) {
        if (confirm("Are you sure you want to update data?")) {
            let value = Number(document.getElementById('hiddenfield').innerText);
            console.log(value);
            updateData(value);
            closeForm();

        }
    }
})

function updateData(value) {

    alert("hi");
    let names = document.getElementById("name").value;
    let emails = document.getElementById("email").value;
    let phoneNumber = document.getElementById("phone").value;
    let genders = document.getElementById("gender").value;
    let messages = document.getElementById("message").value;


    
    $.ajax({

        url: "config/update.php",
        type: "post",
        data: {
            sno: value,
            name: names,
            email: emails,
            phone: phoneNumber,
            gender: genders,
            message: messages



        },
        success: function (data) {


            let response = JSON.parse(data);
            if (response.status === 200) {
                alert("Data Updated Successfully");
                

                document.getElementById("submit_data").classList.remove("d-none");
                document.getElementById("update_data").classList.add("d-none");
                getData();

                document.getElementById("myForm").reset();
                let formerr = document.getElementsByClassName("formerror");
                // console.log(formerr);
                for (let i = 0; i < formerr.length; i++) {
                    formerr[i].innerHTML = "";
                }
            }

            else {
                alert(response.message)
            }

        }

        })

}


