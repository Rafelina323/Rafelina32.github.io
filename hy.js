let cart = [];
let total = 0;

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.style.display = cartElement.style.display === 'flex' ? 'none' : 'flex';
}

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    alert(`Gracias por tu compra. Total a pagar: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}



document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("search-input");
    if (!input) return;

    input.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const productos = document.querySelectorAll(".espacio");

        productos.forEach(function (prod) {
            const titulo = prod.querySelector(".titulo").textContent.toLowerCase();
            prod.style.display = titulo.includes(query) ? "block" : "none";
        });
    });
});

