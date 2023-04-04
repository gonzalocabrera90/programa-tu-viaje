const formNombre = document.getElementById('nombre');
const formApellido = document.getElementById('apellido');
const formEmail = document.getElementById('email');
const formSubmit = document.getElementById('enviar');
const formWarning = document.getElementById('warning');
const datosRegistro = {}
formSubmit.addEventListener('click', function(event){
    datosRegistro.nombre = formNombre.value
    datosRegistro.apellido = formApellido.value
    datosRegistro.email = formEmail.value
    if(!datosRegistro.nombre ||
        !datosRegistro.apellido ||
        !datosRegistro.email) {
            formWarning.innerHTML = `
            <i class="bi bi-dash-circle-fill"></i>
            <strong class="red-warning">Registro incorrecto</strong>`
        } else {
            formWarning.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            <strong class="green-check">Registro correcto. Revisa tu email.</strong>`
            datosRegistro.nombre = ""
            datosRegistro.apellido = ""
            datosRegistro.email = ""
        }
    console.log(datosRegistro);
})