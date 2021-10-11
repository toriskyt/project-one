// <<<<<<< HEAD
// // $("<h1>")


// $(document).ready(function() {

//     /* Set rates + misc */
//     var taxRate = 0.06;
//     var fadeTime = 300;
  
//     $('.pass-quantity input').change(function() {
//       updateQuantity(this);
//     });
  
//     $('.remove-item button').click(function() {
//       removeItem(this);

//     });
  
  
//     /* Recalculate cart */
//     function recalculateCart() {
//       var subtotal = 0; //need to find a way to select the product price and 
//       //calculate the subtotal based on the amount of tickets 
      
//       // $(this).value();
//       console.log(subtotal);
  
//       /* Sum up row totals */
//       $('.item').each(function() { 
//         // console.log(subtotal);
//         parseFloat ( $(this).children('.product-line-price').text());
//         console.log(subtotal);
//       });
  
//       /* Calculate totals */
//       var tax = subtotal * taxRate;
//       var total = subtotal + tax;
//       console.log(total);
  
//       /* Update totals display */
//       $('.totals-value').fadeOut(fadeTime, function() {
//         $('#cart-subtotal').html(subtotal.toFixed(2));
//         $('#cart-tax').html(tax.toFixed(2));
//         $('.cart-total').html(total.toFixed(2));
//         if (total == 0) {
//           $('.checkout').fadeOut(fadeTime);
//         } else {
//           $('.checkout').fadeIn(fadeTime);
//         }
//         $('.totals-value').fadeIn(fadeTime);
//       });
//     }
  
//     /* Update quantity */
//     function updateQuantity(quantityInput) {
//       /* Calculate line price */
//       var productRow = $(quantityInput).parent().parent();
//       var price = parseFloat(productRow.children('.product-price').text());
//       var quantity = $(quantityInput).val();
//       var linePrice = price * quantity;
  
//       /* Update line price display and recalc cart totals */
//       productRow.children('.product-line-price').each(function() {
//         $(this).fadeOut(fadeTime, function() {
//           $(this).text(linePrice.toFixed(2));
//           recalculateCart();
//           $(this).fadeIn(fadeTime);
//         });
//       });
//     }
  
//     /* Remove item from cart */
//     function removeItem(removeButton) {
//       /* Remove row from DOM and recalc cart total */
//       var productRow = $(removeButton).parent().parent();
//       productRow.slideUp(fadeTime, function() {
//         productRow.remove();
//         recalculateCart();
//       });
// =======
function calculateTotal() {
  // assign each value by id 
 var item = [ Number(document.getElementById('50.00').value),
              ,
              Number(document.getElementById('45.00').value)];
  // Multiply each input and add it to the value
  var subTotal = [ document.getElementById('50.00').value * 50,
                ,
                document.getElementById('45.00').value * 45];
  // declare 
  var totalDue = 0;
  // loop through each item and add to the list item 
  for (var i = 0; i < item.length; i++){
      countItem += item[i];
  }
    // get total by call each item from the list
    for (var j = 0; j < subTotal.length; j++){
      totalDue += total[j];
>>>>>>> 67e62dc1750ee8f398e5b14ef6c1064eff281c43
    }
   
   document.getElementById('cart-subtotal').innerHTML = "Item Total: $" + totalDue.toFixed(2);
  
}