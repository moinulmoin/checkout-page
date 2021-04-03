var decrementButtonOne = document.querySelector("#decrement-one");
var incrementButtonOne = document.querySelector("#increment-one");
var quantityOne = document.querySelector("#quantity-one");
var priceOne = document.querySelector("#price-one");
var removeProductOne = document.querySelector("#remove-one");
var productRowOne = document.querySelector("#product-one")

var decrementButtonTwo = document.querySelector("#decrement-two");
var incrementButtonTwo = document.querySelector("#increment-two");
var quantityTwo = document.querySelector("#quantity-two");
var priceTwo = document.querySelector("#price-two");
var removeProductTwo = document.querySelector("#remove-two");
var productRowTwo = document.querySelector("#product-two")

var subTotal = document.querySelector("#subtotal");
var total = document.querySelector("#total");

var checkout = document.querySelector("#checkout");

const decrement = function () {
  var currentValue = parseInt(quantityOne.value);
  currentValue = currentValue > 0 ? currentValue -= 1: currentValue = 0;
  quantityOne.value = currentValue;
  decrementPrice();
};
const decrementTwo = function () {
  var currentValue = parseInt(quantityTwo.value);
  currentValue = currentValue > 0 ? currentValue -= 1: currentValue = 0;
  quantityTwo.value = currentValue;
  decrementPriceTwo();
};
function decrementPrice() {
  var currentPrice = priceOne.textContent;
  updatedPrice = currentPrice > 0 ? currentPrice - 1219 : currentPrice = 0;
  priceOne.textContent = updatedPrice;
}
function decrementPriceTwo() {
  var currentPrice = priceTwo.textContent;
  updatedPrice = currentPrice > 0 ? currentPrice - 59 : currentPrice = 0;
  priceTwo.textContent = updatedPrice;
}
decrementButtonOne.addEventListener("click", decrement);
decrementButtonTwo.addEventListener("click", decrementTwo);


const increment = function () {
  var currentValue = parseInt(quantityOne.value);
  currentValue++;
  quantityOne.value = currentValue;
  incrementPrice()
};
const incrementTwo = function () {
  var currentValue = parseInt(quantityTwo.value);
  currentValue++;
  quantityTwo.value = currentValue;
  incrementPriceTwo()
};
function incrementPrice() {
  var currentPrice = parseInt(priceOne.textContent);
  updatedPrice = currentPrice + 1219;
  priceOne.textContent = updatedPrice;
  totalAmount();
}

function incrementPriceTwo() {
  var currentPrice = parseInt(priceTwo.textContent);
  updatedPrice = currentPrice + 59;
  priceTwo.textContent = updatedPrice;
  totalAmount();
}

incrementButtonOne.addEventListener("click", increment);
incrementButtonTwo.addEventListener("click", incrementTwo);

const removeButton = function () {
  productRowOne.remove();
}
const removeButtonTwo = function () {
  productRowTwo.remove();
}
removeProductOne.addEventListener("click", removeButton)
removeProductTwo.addEventListener("click", removeButtonTwo);

const totalAmount = function () {
  totalAmountInNumber = parseInt(priceOne.textContent) + parseInt(priceTwo.textContent);
  subTotal.textContent = totalAmountInNumber;
  total.textContent = totalAmountInNumber;
}

checkout.addEventListener("click", function(){
  productRowOne.remove()
  productRowTwo.remove();
})