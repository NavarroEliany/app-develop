document.getElementById("formLogin").addEventListener('submit', function (e){
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let message = ''
    let alerType=''
    login (email, password)
   
})

function login(email, password){
    fetch("htpps://reqres.in/api/login", {
        method: "POST", 
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password})
    })
    .then((data)=>{
          alerType= 'success'
        message= 'inicio de secion exitoso'
        console.log('responde bien' + data)
    }
        
    )
    .catch((error)=>{
        alerType= 'danger'
        message= 'Correo o contraseña incorrectos.';
        console.error(error)
    })
    let alert =`
    <div class="alert alert-${alerType} alert-dismissible fade show" role="alert">
       ${message}
      
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
   `;
   document.getElementById('alert').innerHTML= alert;
}