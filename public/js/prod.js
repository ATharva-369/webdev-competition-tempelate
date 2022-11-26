import products from './products.js';
const card = document.getElementById('product-container');
var category = "all";


for (var i = 0; i < products.length; i++) {
	var cardItem = document.createElement('div');
	cardItem.className="product"
	cardItem.innerHTML = `
	<img src="${products[i].image}" alt="">
	<p class="product-description"><b class="header">${products[i].name}</b> <br>${products[i].description}</p>
	<div class="desc">
		<span>School</span>
		<h5>${products[i].name}</h5>
		<h4>₹${products[i].price}</h4>
	</div>
	<button class="cart-btn" data-id="${[i]}" data-price="${products[i].price}" data-title="${products[i].name}"><i data-id="${[i]}" data-price="${products[i].price}" data-title="${products[i].name}" class="fa-solid fa-shopping-cart my-cart"></i></button>`
	console.log(cardItem.innerHTML);
	card.appendChild(cardItem);
}


const addToCartButtons = document.getElementsByClassName('cart-btn')
let count = 0;
	let sum = 0;
	let cart = {};

	if (localStorage.getItem("count")) {
		count = parseInt(localStorage.getItem("count"));
	}

	if (localStorage.getItem("sum")) {
		sum = parseInt(localStorage.getItem("sum"));
	}

	if (localStorage.getItem("cart")) {
		cart = JSON.parse(localStorage.getItem("cart"));
	}

for(let i=0; i < addToCartButtons.length; i++) {
addToCartButtons[i].addEventListener('click', (e) => add(e));
}

function add(event) {
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        title: title,
        price: price,
        qty: 1
    };
    cart[id] = cartItem
}

    count++;
    sum += price;

    localStorage.setItem("cart", JSON.stringify(cart));
    // updateCart();
}

let loggedIn = false
if (localStorage.getItem("loggedIn")) {
	loggedIn = localStorage.getItem("loggedIn")
}
if(loggedIn) {
	const list = document.getElementById("login")
	list.innerHTML = `<i class="fa-solid fa-user"></i>`
}

// function updateCart() {
//     localStorage.setItem("sum", sum);
//     localStorage.setItem("count", count);
// }



