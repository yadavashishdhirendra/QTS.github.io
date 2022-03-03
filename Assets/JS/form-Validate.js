function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["company"].value;
    var z = document.forms['myForm']["email"].value;
    var x1 = document.forms['myForm']['number'].value;
    var y1 = document.forms['myForm']['message'].value;
    if (x == "" || y == "" || z == "" || x1 == "" || y1 == "") {
        document.getElementById('name_error').style.display = 'block';
        document.getElementById('company_error').style.display = 'block';
        document.getElementById('email_error').style.display = 'block';
        document.getElementById('number_error').style.display = 'block';
        document.getElementById('message_error').style.display = 'block';
    }
    else {
        alert("Success!");
    }
    var name = document.forms["myForm"]["name"].value;
    if (name == null || name == "") {
        document.getElementById('name_error').style.display = 'block';
        return false;
    }

    var company = document.forms["myForm"]["company"].value;
    if (company == null || company == "") {
        document.getElementById('company_error').style.display = 'block';
        return false;
    }

    var email = document.forms["myForm"]["email"].value;
    if (email == null || email == "") {
        document.getElementById('email_error').style.display = 'block';
        return false;
    }

    var number = document.forms["myForm"]["number"].value;
    if (number == null || number == "") {
        document.getElementById('number_error').style.display = 'block';
        return false;
    }

    var message = document.forms["myForm"]["message"].value;
    if (message == null || message == "") {
        document.getElementById('message_error').style.display = 'block';
        return false;
    }
}