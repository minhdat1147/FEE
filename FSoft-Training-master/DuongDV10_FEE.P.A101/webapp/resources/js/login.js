var check = document.getElementById("login")
check.addEventListener("click",function () {
    var checkEmail = document.getElementById("email").value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var checkPassword = document.getElementById("password").value;

    if (checkEmail.match(mailformat) && checkPassword !== "") {
        alert("Login successful!");
    } else if (checkEmail == "" || checkEmail.match(mailformat)==false) {
        alert( "Please insert your email!" )
    } else if (checkPassword == "") {
        alert( "Please insert your password!" )
    } else{
        alert("Please insert your information correctly!")
    }

})
    
