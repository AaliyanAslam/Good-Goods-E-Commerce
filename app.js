let cartCount1 = 0;
let cartCount2 = 0;

const cartCountElement = document.querySelector('.cart-count');
const cartCountElement2 = document.querySelector('.cart-count-2');
const alertPopup = document.querySelector('.alert-popup');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');


addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount1++;
    cartCountElement.textContent = cartCount1;
    showAlertPopup();
  });
});
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount2++;
    cartCountElement2.textContent = cartCount2;
    showAlertPopup();
  });
});

function showAlertPopup() {
  alertPopup.classList.add('show');
  setTimeout(() => {
    alertPopup.classList.remove('show');
  }, 2000);
}


// gif js

const gif = document.getElementById('gif');
const img = document.getElementById('img');

// Add an event listener for the 'click' event
gif.addEventListener('click', function () {
  img.style.display = 'none';
  gif.style.display = 'none';

});






