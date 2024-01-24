function login(){
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    if (email == "admin@loker.com"){
        if (password == "admin"){
            window.location.replace("AdminLTE-3.2.0/index.html")
        }else if (password == ""){
            window.alert("*Masukan Password") ;
        }else{
            window.alert("*Password Salah") ;
        }
    }else if(email == ""){
        window.alert("*Masukan Email");
    }else{
        window.alert("Email Salah");
    }
}