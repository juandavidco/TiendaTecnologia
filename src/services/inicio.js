import { getAuth, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js"
let botoninicio=document.getElementById("botoninicio")

botoninicio.addEventListener("click",function(evento){

    evento.preventDefault()

    let email=document.getElementById("Correoinicio").value
    let password=document.getElementById("passwordinicio").value

    let formularioinicio=document.getElementById("formularioinicio")

    console.log(email,password)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        Swal.fire({
            position: 'top-end', 
            icon: 'success',
            title: 'Exito en el inicio de sesion',
            showConfirmButton: false,
            timer: 2000
          })
          formularioinicio.reset()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Algo salio mal!',
            footer: '<a href="">¿Por que tengo este problema?</a>'
          })
      });

})