//elementos del formulario suscripcion
const formNombre = document.getElementById('nombre');
const formApellido = document.getElementById('apellido');
const formEmail = document.getElementById('email');
const formSubmit = document.getElementById('enviar');
const formWarning = document.getElementById('warning');

//elementos del formulario contacto
const formInfo = document.querySelector('.formulario-content-info');
const nombreContacto = document.getElementById('nombre-info');
const apellidoContacto = document.getElementById('apellido-info');
const emailContacto = document.getElementById('email-info');
const telefonoContacto = document.getElementById('telefono-info');
const promotorContacto = document.getElementById('select-promotor');
const submitContacto = document.getElementById('enviar-info');
const warningInfo = document.getElementById('warning-info');
const tarjetaInfo = document.getElementById('tarjeta-info');
const info = document.getElementById('info');

const formSelect = document.getElementById('select-promotor');

let datosSuscripcion = {}
let datosContacto = {}
const recomendados = document.querySelector('.recomendaciones-content');
const viajesElement = document.querySelector('.viajes-content');
const promotoresElement = document.getElementById('promotores');

const myNav = document.querySelector('header');
window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200  ) {
        myNav.classList.add("header-con-color");
        myNav.classList.remove("header-transparente");
    } 
    else {
        myNav.classList.add("header-transparente");
        myNav.classList.remove("header-con-color");
    }
};

//fetch a db json de los viajes recomendados
fetch('../db/recomendados.json')
    .then(data => data.json())
    .then(cities => {
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
    fetch('../db/viajes.json')
    .then(data => data.json())
    .then(viajes => {
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
fetch('../db/promotores.json')
.then(data => data.json())
.then(lista => {
    for (const item of lista) {
        promotoresElement.innerHTML += `
            <div class="promotor">
                <div class="promotor-imagen">
                    <img src="${item.imagen}" alt="">
                </div>
                <div class="promotor-descripcion">
                    <h3>${item.nombre} ${item.apellido}</h3>
                    <p>Promotor de la provincia de ${item.provincia}</p>
                    <p>${item.profesion}</p>
                </div>
                <div class="info-button">
                <a href="#info">
                    <button class="contactarme" id="contactarme" name="${item.nombre} de ${item.provincia}" onclick="setSelect(this.name)" >Contactarme</button>    
                </a>
                </div>
            </div>
    `
    }
})
function setSelect(nombre){
    let nombreSelect = nombre
    formSelect.value = nombreSelect
}
formSubmit.addEventListener('click', function () {
    datosSuscripcion.nombre = formNombre.value
    datosSuscripcion.apellido = formApellido.value
    datosSuscripcion.email = formEmail.value
    let emailCheck = formEmail.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!datosSuscripcion.nombre ||
        !datosSuscripcion.apellido ||
        !datosSuscripcion.email) {
        formWarning.innerHTML = `
            <i class="bi bi-dash-circle-fill"></i>
            <strong class="red-warning">Registro incorrecto. Existen campos sin completar.</strong>`
    } else if (!datosSuscripcion.nombre ||
        !datosSuscripcion.apellido ||
        !emailCheck) {
            formWarning.innerHTML = `
            <i class="bi bi-dash-circle-fill"></i>
            <strong class="red-warning">Email invalido.</strong>`
    } else {
        formWarning.innerHTML = `
            <i class="bi bi-check-circle-fill"></i>
            <strong class="green-check">Registro correcto. Revisa tu correo.</strong>`
        datosSuscripcion = {}
        formNombre.value = ""
        formApellido.value = ""
        formEmail.value = ""
    }
})

const element = document.createElement('div')
element.setAttribute("class", "tarjeta-info")
function enviarConsulta () {
    const card = document.querySelector('.card')
    card.style.display = "none"

    element.innerHTML = `
    <i class="bi bi-check-circle-fill consulta-exitosa"></i>
    <p>Nos pondremos en contacto contigo.</p>
    `
        
}
submitContacto.addEventListener('click', function () {
    datosContacto.nombre = nombreContacto.value
    datosContacto.apellido = apellidoContacto.value
    datosContacto.email = emailContacto.value
    datosContacto.telefono = telefonoContacto.value
    datosContacto.promotor = promotorContacto.value
    let emailCheck = emailContacto.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!datosContacto.nombre ||
        !datosContacto.apellido ||
        !datosContacto.email ||
        !datosContacto.telefono ||
        !datosContacto.promotor) {
            warningInfo.innerHTML = `
            <i class="bi bi-dash-circle-fill"></i>
            <strong class="red-warning">Contacto incorrecto. Existen campos sin completar.</strong>`
    } else if (!datosContacto.nombre ||
        !datosContacto.apellido ||
        !datosContacto.telefono ||
        !datosContacto.promotor ||
        !emailCheck) {
            warningInfo.innerHTML = `
            <i class="bi bi-dash-circle-fill"></i>
            <strong class="red-warning">Email invalido.</strong>`
    } else {

        element.innerHTML = `
        <div class="card">
            <div class="icon">
                Nombre: ${datosContacto.nombre}
            </div>
            <div class="icon">
                Apellido: ${datosContacto.apellido}
            </div>
            <div class="icon">
                Email: ${datosContacto.email}
            </div>
            <div class="icon">
                Telefono: ${datosContacto.telefono}
            </div>
            <div class="icon">
                Promotor: ${datosContacto.promotor}
            </div>
            <div class="enviar-content">
                <button type="button" class="enviar" id="enviar-info" onclick="enviarConsulta(this)">Enviar</button>
            </div>
        </div>`
        formInfo.classList.toggle('formulario-info')
        formInfo.classList.toggle('formulario-content-info')
        info.appendChild(element)
        
        // warningInfo.innerHTML = `
        //     <i class="bi bi-check-circle-fill"></i>
        //     <strong class="green-check">Registro correcto. Revisa tu email.</strong>`
        // datosContacto.nombre = ""
        // datosContacto.apellido = ""
        // datosContacto.email = ""
    }

})

// function myMap() {
// var mapProp= {
//   center:new google.maps.LatLng(51.508742,-0.120850),
//   zoom:5,
// };
// var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }

const API = "https://api.weatherapi.com/v1/forecast.json?key=9a179446b6644d8ea15170701230604&q= argentina buenos aires&days=10&aqi=no&alerts=no"
const forecastElement = document.getElementById('pronostico')

const posibilidades = ["Patchy rain possible", "Clear", "Partly cloudy", "Cloudy", "Mist", "Overcast", "Sunny", "Light rain shower", "Heavy rain", "Moderate rain", "Fog","Moderate or heavy rain shower", "Patchy light drizzle", "Light rain shower"]
var dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
// var icons = ['brightness-high', 'cloud-lightning-rain', 'cloud-rain', 'cloud-rain-heavy', 'clouds', 'cloud-sun', 'cloud-moon', 'moon', 'wind', 'cloud-snow'];

const icons =  {
    "Patchy rain possible": "cloud-rain",
    "Clear": "brightness-high",
    "Partly cloudy": "cloud-sun",
    "Cloudy": "clouds",
    "Mist": "cloud-snow",
    "Overcast": "clouds",
    "Sunny": "brightness-high",
    "Light rain shower": "",
    "Heavy rain": "cloud-rain-heavy",
    "Moderate rain": "cloud-rain",
    "Fog": "cloud-snow",
    "Moderate or heavy rain shower": "",
    "Patchy light drizzle": "",
    "Light rain shower": "",
    "Heavy snow": "snow",
    "Patchy heavy snow":"snow",
    "Light sleet": "cloud-snow",
    "Freezing fog":"cloud-snow",
    "Light snow": "snow",
    "Patchy moderate snow": "snow",
    "Moderate or heavy snow showers": "cloud-rain-heavy"
}

const forecast = (api) => {
    fetch(api)
    .then(data => data.json())
    .then(info =>{
        let days = info.forecast.forecastday
        for (const dayIn in days) {
            let condition = days[dayIn].day.condition.text
            let date = new Date(days[dayIn].date)
            let dia = date.getUTCDay()
            let getIcon = icons[condition]
            forecastElement.innerHTML += `
            <div class="item" >
                <div class="day">
                    ${dayIn == 0 ? "Hoy" : dias[dia]}
                </div>
                <div class="icon">
                    <i class="bi bi-${getIcon}"></i>
                </div>
                <div class="temperatura">
                    <div class="description">
                        <p>Max</p>
                        <p>${days[dayIn].day.maxtemp_c}°</p>
                    </div>
                    <div class="description">
                        <p>Min</p>
                        <p>${days[dayIn].day.mintemp_c}°</p>
                    </div>
                </div>
                <div class="precipitacion" >
                    <i class="bi bi-umbrella"></i> 
                    <p>${days[dayIn].day.daily_chance_of_rain}%</p>
                </div>
            </div>
            `
        }
    })
}

forecast(API)
