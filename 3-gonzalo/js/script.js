const formNombre = document.getElementById('nombre');
const formApellido = document.getElementById('apellido');
const formEmail = document.getElementById('email');
const formSubmit = document.getElementById('enviar');
const formWarning = document.getElementById('warning');

const formSelect = document.getElementById('select-promotor');

const datosRegistro = {}
const recomendados = document.querySelector('.recomendaciones-content');
const viajesElement = document.querySelector('.viajes-content');
const promotoresElement = document.getElementById('promotores');


//fetch a db json de los viajes recomendados
fetch('../../db/recomendados.json')
    .then(data => data.json())
    .then(cities => {
        console.log(cities);
        for (const city of cities) {
            recomendados.innerHTML += `
                <div class="recomendacion">
                    <div class="recomendacion-imagen">
                        <img src="${city.imagen}" alt="">
                    </div>
                    <div class="recomendacion-descripcion">
                        <h3>${city.ciudad}</h3>
                        <p>${city.descripcion}</p>
                    </div>
                </div>
        `
        }
    })
//fetch a db json de los viajes como productos disponnibles
    fetch('../../db/viajes.json')
    .then(data => data.json())
    .then(viajes => {
        console.log(viajes);
        for (const viaje of viajes) {
            viajesElement.innerHTML += `
            <div class="viaje">
                <div class="viaje-imagen">
                    <img src="${viaje.imagen}"
                        alt="">
                </div>
                <div class="viaje-descripcion">
                    <div class="viaje-head">
                        <div>
                            <h3>${viaje.ciudad}</h3>
                        </div>
                        <p>${viaje.descripcion}</p>
                    </div>
                    <ul class="viaje-items">
                        <li>u$s${viaje.precio}</li>
                        <li>${viaje.estadia + 1} diás y ${viaje.estadia} noches.</li>
                    </ul>
                </div>
            </div> 
        `
        }
    })

//fetch a db json de los promotores y dueños del proyecto
fetch('../../db/promotores.json')
.then(data => data.json())
.then(lista => {
    for (const item of lista) {
        promotoresElement.innerHTML += `
            <div class="promotor">
                <div class="promotor-imagen">
                    <img src="${item.imagen}" alt="">
                </div>
                <div>
                    <h3>${item.nombre} ${item.apellido}</h3>
                    <p>Promotor de la provincia de ${item.provincia}</p>
                    <p>${item.profesion}</p>
                </div>
                <div>
                <a href="#info">
                    <button class="contactarme" id="contactarme" name="${item.nombre}" onclick="setSelect(this.name)" >Contactarme</button>    
                </a>
                </div>
            </div>
    `
    }
})
function setSelect(nombre){
    let nombreSelect = nombre.toLowerCase()
    formSelect.value = nombreSelect
}
formSubmit.addEventListener('click', function (event) {
    datosRegistro.nombre = formNombre.value
    datosRegistro.apellido = formApellido.value
    datosRegistro.email = formEmail.value
    if (!datosRegistro.nombre ||
        !datosRegistro.apellido ||
        !datosRegistro.email) {
        formWarning.innerHTML = `
            <i class="bi bi-dash-circle-fill"></i>
            <strong class="red-warning">Registro incorrecto. Existen campos sin completar.</strong>`
    } else {
        formWarning.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            <strong class="green-check">Registro correcto. Revisa tu email.</strong>`
        datosRegistro.nombre = ""
        datosRegistro.apellido = ""
        datosRegistro.email = ""
    }
})

function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
