/*var products = [
  {
    id: 1,
    name: "Cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];*/

//If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

//const jsonProducts = JSON.stringify(products); //(move this variable "products" to a json)

let products = [];
fetch("./js/products.json")
  .then((response) => response.json())
  .then((data) => {
    products = data; // asigno la variable data a la variable products para que las funiones puedan trabajar con el array
    //console.log(products); //Comprobación de que se ha importado correctamente.
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON", error);
  });

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

//var total = 0;

// Exercise 1git
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      cartList.push(products[i]);
      console.log(cartList);
    }
  }
}

// Exercise 2
function cleanCart() {
  cartList = [];
  console.log(cartList);
}

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array
  var total = 0;
  for (let i = 0; i < cartList.length; i++) {
    total += cartList[i].price;
  }
  console.log(total);
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
  for (let i = 0; i < cartList.length; i++) {
    //Per cada element de cartList, hem de validar si existeix en el array cart:
    let exist = false;
    for (let j = 0; j < cart.length; j++) {
      //Si ja existeix aquest producte al carretó…
      if (cartList[i].id === cart[j].id) {
        //haurem d'incrementar el camp quantity.
        cart[j].quantity++;
        //Se crea la propiedad "subtotal"
        cart[j].subtotal = cartList[i].price * cart[j].quantity;
        exist = true;
      }
    }
    //En cas que no existeixi…
    if (!exist) {
      // l'afegim a l'array cart (compte, que no se t'oblidi agregar la propietat quantity amb valor 1 al producte abans de fer push).
      cart.push({
        name: cartList[i].name,
        id: cartList[i].id,
        price: cartList[i].price,
        type: cartList[i].type,
        quantity: 1,
      });
    }
  }
  console.log(cart);
}

// Exercise 5
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) {
    let ofert1=cart[i].price;
    if (cart[i].id === 1 && cart[i].quantity >=3) {
      ofert1=cart[i].price =10;
      cart[i].subtotalWithDiscount=ofert1 * cart[i].quantity;
    }  
  }
  for (let i = 0; i < cart.length; i++) {
    let ofert2=cart[i].price;
    if (cart[i].id ===3 && cart[i].quantity >=10) {
      cart[i].price=(cart[i].price * (2/3)).toFixed(2);
      ofert2=cart[i].price;
      cart[i].subtotalWithDiscount=(ofert2 * cart[i].quantity).toFixed(2);
    }  
  }
  console.log(cart);
}
// Exercise 6
function printCart(cart) {
  // Fill the shopping cart modal manipulating the shopping cart dom
  let totalCart=0;
  let table=document.getElementById("cart_list");
  table.innerHTML="";
  for (let i = 0; i < cart.length; i++) {
    let totalProduct=cart[i].price * cart[i].quantity;
    totalCart += totalProduct;
    document.getElementById("total_price").innerHTML=totalCart;

    let row=table.insertRow(0);
    let cell1=row.insertCell(0);
    let cell2=row.insertCell(1);
    let cell3=row.insertCell(2);
    let cell4=row.insertCell(3);
  
    cell1.innerHTML = cart[i].name;
    cell2.innerHTML = cart[i].price;
    cell3.innerHTML = cart[i].quantity;
    cell4.innerHTML = `$${totalProduct.toFixed(2)}`;
  }
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal");
  printCart(cart);
}
