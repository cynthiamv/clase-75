
// HTTP --> protocolo
// --> GET buscar informacion
// --> POST crear informacion
// --> PUT actualiza informacion
// --> DELETE borra informacion

// los metodos reciben PARAMETROS entre parentesis, si es mas de uno, separados por coma

// fetch recibe UN parametro obligatorio: la direccion web
// parametro opcional: UN OBJETO que contenga:
    // headers: especifican informacion sobre el fetch
    // body: la informacion que vamos a enviar, generalmente el JSON.stringify de un objeto de javascript



    // Ultima parte de la clase: un fetch adentro de otro 


    
    // fetch(`http://api.openweathermap.org/data/2.5/weather?q=${buscarCiudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
    // .then(res => res.json())
    // .then(datosClimaActual => {
    //   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${buscarCiudad}&units=metric&lang=es&appid=9f39cdba4d4a89d545134347942f077d`)
    //   .then(res => res.json())
    //   .then(datosPorHora => {
      
    // solamente aqui dentro tengo acceso a datosClimaActual y datosPorHora a la vez. 
    // Si quisiera maquetar una tarjeta usando ambos datos, deberia hacerlo aqui

    // })


// Ejercicio 1

// fetch('https://meli-nnaykhkakj.now.sh/user/list')
//   .then(data => data.json()) 
//   .then(result => console.log(result))

// const usuarioNuevo = {
//   name: "Cynthia",
//   lastname: "Vico",
//   phone: "22300000001",
//   email: "cynthia@gmail.com"
// }

// fetch('https://meli-nnaykhkakj.now.sh/user', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(usuarioNuevo),
// })
//   .then(data => data.json()) 
//   .then(result => console.log(result))

// const modificoUsuario = {
//   name: "Cynthia",
//   lastname: "V",
//   phone: "22300000001",
//   email: "cynthia@gmail.com"
// }
// fetch('https://meli-nnaykhkakj.now.sh/user/edit/1', {
//   method: 'PUT',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(modificoUsuario),
// })
//   .then(data => data.json()) 
//   .then(result => console.log(result))


// ELIMINO USUARIO

// fetch('https://meli-nnaykhkakj.now.sh/user/remove/1', {
//   method: 'DELETE',
//   headers: { 'Content-Type': 'application/json' }
// })
//   .then(data => data.json()) 
//   .then(result => console.log(result))



// EJERCICIO 2

fetch('https://meli-nnaykhkakj.now.sh/user/list')
  .then(data => data.json()) 
  .then(result => {
    console.log(result)
    const listaUsuarios = document.querySelector(".usuarios");

    let acc = ""

    result.users.forEach(user => {
      let name = user.name
      let lastName = user.lastname
      let phone = user.phone
      let email = user.email
      acc += `
      <tr>
        <td>${name}</td>
        <td>${lastName}</td>
        <td>${phone}</td>
        <td>${email}</td>
        <td class="list__body--actions">
          <i class="fa fa-edit"></i>
          <i class="fa fa-trash"></i>
        </td>
      </tr>`
    });

    listaUsuarios.innerHTML = `<tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Teléfono</th>
        <th>Email</th>
        <th>Acciones</th>
        </tr>` + acc;
 
  })


