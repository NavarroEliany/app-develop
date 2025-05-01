document.getElementById("formLogin").addEventListener('submit', function (e){
    e.preventDefault()
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let message = ''
    let alerType=''
    login (email, password)
   
})

function login(email, password){
    let message=''
    let alertType=''
    localStorage.removeItem('token')
    fetch("https://reqres.in/api/login", {
        method: "POST", 
        headers: {
            "Content-type": "application/json",
            'x-api-key':' reqres-free-v1'
        },
        body: JSON.stringify({ email, password})
    })
    .then((response)=>{
        if(response.status ===200){
          alerType= 'success'
        message= 'inicio de secion exitoso'
        console.log('responde bien' + response)
        alertBuilder(alerType, message)
        localStorage.setItem('tiken', 'sassddee')
        setTimeout(()=>{
        location.href = 'admin/dashboard.html'
        }, 2000) //2000 ms = 2s
    }
    else{
        alertType = 'danger'
        message = 'Correo o contraseñas incorrectas'
        alertBuilder(alerType, message)
    }
    }
        
    )
    .catch((error)=>{
        alerType= 'danger'
        message= 'Correo o contraseña incorrectos.';
        console.error(error)
        alertBuilder(alerType, message)
    })
    
}

function alertBuilder (alertType, message){
    const alert =`
    <div class="alert alert-${alerType} alert-dismissible fade show" role="alert">
       ${message}
      
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
   `;
   document.getElementById('alert').innerHTML= alert;
}