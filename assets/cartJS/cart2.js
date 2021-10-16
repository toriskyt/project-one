var removeCartItemBtn = document.getElementsByClassName('remove-product');
console.log(removeCartItemBtn);
for (var i = 0; i < removeCartItemBtn.lenght; i++){ 
  var button = removeCartItemBtn[i];
  button.addEventListener('click', function(event) {
  var removeButtonClicked = event.target
  removeButtonClicked.parentElement.parentElement.remove();
  updateCartTotal();
  })

}

function updateCartTotal() {
var cartItemContainer = document.getElementsByClassName('cart-container')[0];
var cartRows = cartItemContainer.getElementsByClassName('ticket-container');
for (var i = 0; i < cartRows.lenght; i++){ 
    var cartRow = cartRows[i];
    var priceEl = cartRow.getElementsByClassName('product-line-price');
    var quantityEl = cartRow.getElementsByClassName('pass-quantity')
    [0];
    console.log(priceEl, quantityEl);
}
}