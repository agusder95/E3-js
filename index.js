const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */


if(localStorage.getItem('pizzaObj')){
  document.getElementById('card').style.display = 'flex'
  document.getElementById('error').style.display = 'none'
  showCard()
}else{
  document.getElementById('card').style.display = 'none'
  document.getElementById('error').style.display = 'flex'
}


document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault()
  this.reset()
})


function mainFunction (){
  const input = document.getElementById("nro").value
  
  if(input > 0){
    const validar = comprobarNro(input-1)
    validar ? showCard() : error('No se encuentra ese numero')
  
  }else{
    error('Nro invalido')
  }
}


function comprobarNro(nro){
  if (nro in pizzas){
    localStorage.setItem('pizzaObj', JSON.stringify(pizzas[nro]))
    return true
  }
}

/* ~~~~~~~~~~~ CARD ~~~~~~~~~~~~~~~ */

function showCard(){
  document.getElementById('card').style.display = 'flex'
  document.getElementById('error').style.display = 'none'
  
  const pizzaObjString = localStorage.getItem('pizzaObj')
  const pizzaObj = JSON.parse(pizzaObjString)

  document.getElementById('imgCard').src = pizzaObj.imagen
  document.getElementById('h3Card').innerHTML = pizzaObj.nombre
  document.getElementById('pCard').innerHTML = `$${pizzaObj.precio}`
  
}
/* ~~~~~~~~~~~ ERROR ~~~~~~~~~~~~~~ */

const error =(msg)=>{
  document.getElementById('card').style.display = 'none'
  document.getElementById('error').style.display = 'flex'
  localStorage.removeItem('pizzaObj')
  
  document.getElementById('p').innerHTML = msg

}
