/* array tapeo*/
let ricas_tapas= [{

    id:1,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0457-750x501.jpg',
    title:'Ensalsa Huerta',
    price:'8.00'

},
{
    id:2,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0817-750x501.jpg',
    title:'Lasaña  la Ecologica',
    price:'9.90'

},
{
    id:3,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0475-750x501.jpg',
    title:'Ensalda Ecologica',
    price:'9.20'

},
{
    id:4,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0802-750x501.jpg',
    title:'Pollo Crispy a la mostaza',
    price:'11.15'

},
{
    id:5,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0793-750x501.jpg',
    title:'Ensalda Cañada',
    price:'12.30'

},
{
    id:6,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0774-750x501.jpg',
    title:'Rollito de Quesos',
    price:'7.50'

},
]

/*array pizzas*/
let pizza_eco= [{
    id:1,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0714-750x501.jpg',
    title:'Rucula',
    price:'11.00'

},
{
    id:2,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0528-750x501.jpg',
    title:'Hervideros',
    price:'12.25'

},
{
    id:3,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0723-750x501.jpg',
    title:'Cañadas',
    price:'10.15'

},
{
    id:4,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0650-750x501.jpg',
    title:'Lanzarote',
    price:'9.90'

},
{
    id:5,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0599-750x501.jpg',
    title:'La Graciosa',
    price:'12.00'

},
{
    id:6,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0528-750x501.jpg',
    title:'Teide',
    price:'10.50'

},
]

/*postres*/
let postres_eco= [
{
    id:1,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0815-750x501.jpg',
    title:'Tarta Lemon',
    price:'4.50'

}, 
{
    id:2,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO06941-750x501.jpg',
    title:'Tarta choco-white',
    price:'4.50'

}, 
{
    id:3,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO06941-750x501.jpg',
    title:'Tarta de nueces',
    price:'4.50'

}, 
{
    id:4,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO08162-750x501.jpg',
    title:'Tarta Surf',
    price:'4.50'

}, 
{
    id:5,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO0815-750x501.jpg',
    title:'Tarta Bisco',
    price:'4.50'

}, 
{
    id:6,
    img:'http://la-ecologica.es/wp-content/uploads/2016/01/ECO06941-750x501.jpg',
    title:'Tarta Club',
    price:'4.50'

}, 
]

/*empezamos con las funciones*/

let ricas_tapas_container=document.querySelector('#ricas_tapas')
let pizza_eco_container=document.querySelector('#pizza_eco')
let postres_eco_container=document.querySelector('#postres_eco')

function cards(array_data,container) {
    array_data.forEach(element => {
        let div= document.createElement('div');
        console.log(container);
        container.appendChild(div);
        div.innerHTML= `
        <div class="card border boder-0 ms-1 mt-3" style="width: 18rem;">
            <img src="${element.img}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.price}</p>
        </div>
    </div>
    `
    })
}

/*llamemos a la funcion*/
cards(ricas_tapas,ricas_tapas_container)
cards(pizza_eco,pizza_eco_container)
cards(postres_eco,postres_eco_container)