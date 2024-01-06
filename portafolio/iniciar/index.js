const persons = [
    {
        nombre : "juan",
        correo: "Juan123@gmail.com",
        password: "juan123"
    },
    {
        nombre: "Vale",
        correo: "Vale123@gmail.com",
        password: "vale123"
    }
]

function iniciarSesion() {
    let correo = document.getElementById("correo");
    let password = document.getElementById("password");

    if (correo.value != ""){
        correo.classList.add("is-valid");
        correo.classList.remove("is-invalid");

    }
    else{
        correo.classList.add("is-invalid");
        correo.classList.remove("is-valid");
    }

    if (password.value != ""){
        password.classList.add("is-valid");
        password.classList.remove("is-invalid");
    }
    else {
        password.classList.add("is-invalid");
        password.classList.remove("is-valid");
    }
    persons.forEach(function(person){
        if(correo.value ==  person.correo && password.value == person.password){
            sessionStorage.setItem('nombre', person.nombre);
            location.href = "home.html";
            console.log("El correo es correcto");
        }

    })

}