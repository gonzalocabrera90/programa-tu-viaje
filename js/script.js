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

const promotores1 = [
    {
        nombre:"Daniel",
        apellido:"Scheurer",
        provincia:"Cordoba",
        profesion:"Licenciado en Adm. de Empresa",
        imagen: "https://threewill.com/wp-content/uploads/austin-ryan-full-resolution-office-365.jpg"
    },
    {
        nombre:"Melina",
        apellido:"Romero",
        provincia:"Catamarca",
        profesion:"Fotografa Profesional",
        imagen: "https://uploads-ssl.webflow.com/6321fa4eb9021afb4a237ebb/63518b3451899cb324570c0e_IMA0000460000046712.jpeg"
    
    },
    {
        nombre:"Gonzalo",
        apellido:"Cabrera",
        provincia:"Buenos Aires",
        profesion:"Lic. en Turismo",
        imagen: "https://pbs.twimg.com/profile_images/1485050791488483328/UNJ05AV8_400x400.jpg"
    }
]

const recomendado = [
    {
        ciudad: "Buenos Aires, Capital Federal",
        descripcion: "Recorre las principales atracciones durante 5 dias. Difruta de la gastronomia argentina, unica en el mundo.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI_TMk31oOuQJpF_uq4M1_-ckow5r7lms8nUL9CgdyuIyvrOumLG2Qrm-t5Mp7BlOaBk&usqp=CAU"
    },
    {
        ciudad: "Glaciar Perito Moreno",
        descripcion: "Comparti un viaje unico en la Patagonia Argentina. Region que cuenta con los paisajes más hermosos del mundo.",
        imagen: "https://ak-d.tripcdn.com/images/10081e000001fuo62152A_W_400_10000_R5_Q90.jpg"
    },
    {
        ciudad: "Cordoba de las Cascadas",
        descripcion: "Disfruta de hermosos paisajes a lo largo y ancho de la provincia. Alojate en hoteles con vista a las sierras cordobesas.",
        imagen: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1592489358884-49ddd6f3a48a"
    }
]

const viajes = [
    {
        ciudad: "Buenos Aires",
        descripcion: "Recorre las principales atracciones durante 5 dias. Difruta de una gastronomia unica en el mundo.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI_TMk31oOuQJpF_uq4M1_-ckow5r7lms8nUL9CgdyuIyvrOumLG2Qrm-t5Mp7BlOaBk&usqp=CAU",
        precio: 550,
        estadia: 5
    },
    {
        ciudad: "Cataratas de Iguazu",
        descripcion: "Recorre las principales atracciones durante 5 dias. Difruta de una gastronomia unica en el mundo.",
        imagen: "https://i.pinimg.com/236x/35/fb/9f/35fb9f19345f7548799a6429b0617442--voi-jehovah.jpg",
        precio: 800,
        estadia: 5
    },
    {
        ciudad: "Bariloche",
        descripcion: "Recorre las principales atracciones durante 5 dias. Difruta de una gastronomia unica en el mundo.",
        imagen: "https://http2.mlstatic.com/D_NQ_NP_838263-MLA52749180297_122022-O.jpg",
        precio: 1110,
        estadia: 5
    },
    {
        ciudad: "Ushuaia",
        descripcion: "Recorre las principales atracciones durante 5 dias. Difruta de una gastronomia unica en el mundo.",
        imagen: "https://pbs.twimg.com/media/FloCuZEWIAAGBx2.jpg",
        precio: 1000,
        estadia: 5
    },
    {
        ciudad: "Salta",
        descripcion: "Recorre las principales atracciones durante 5 dias. Difruta de una gastronomia unica en el mundo.",
        imagen: "https://www.laotravozdigital.com/altervox/wp-content/uploads/2012/04/arton2326.jpg",
        precio: 900,
        estadia: 5
    }
]


//fetch a db json de los viajes recomendados
// fetch('../db/recomendados.json')
//     .then(data => data.json())
//     .then(cities => {
        for (const city of recomendado) {
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
    // })
//fetch a db json de los viajes como productos disponnibles
    // fetch('../db/viajes.json')
    // .then(data => data.json())
    // .then(viajes => {
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
    // })

//fetch a db json de los promotores y dueños del proyecto
// fetch('../db/promotores.json')
// .then(data => data.json())
// .then(lista => {
    for (const promotores of promotores1) {
        promotoresElement.innerHTML += `
            <div class="promotor">
                <div class="promotor-imagen">
                    <img src="${promotores.imagen}" alt="">
                </div>
                <div>
                    <h3>${promotores.nombre} ${promotores.apellido}</h3>
                    <p>Promotor de la provincia de ${promotores.provincia}</p>
                    <p>${promotores.profesion}</p>
                </div>
                <div>
                <a href="#info">
                    <button class="contactarme" id="contactarme" name="${promotores.nombre}" onclick="setSelect(this.name)" >Contactarme</button>    
                </a>
                </div>
            </div>
    `
  }
// })
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

// function myMap() {
// var mapProp= {
//   center:new google.maps.LatLng(51.508742,-0.120850),
//   zoom:5,
// };
// var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
// }
