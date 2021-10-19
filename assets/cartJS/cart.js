// <<<<<<< HEAD
// // $("<h1>")

// var eventName = document.getElementById("event-name");
// var ticket = document.getElementById("num-tickets");
// var date = document.getElementById("date");
// var saveButton = document.getElementById("save");
// var savedName = document.getElementById("saved-name");

//saveButton.addEventListener("click", function(event) {
//event.preventDefault();


// var event = {
// eventname: event.value,
// date: date.value,
// numTickets: numTickets.value.trim()
// };
// var events = JSON.parse(localStorage.getItem("events"));
// console.log......
// events.push(event)
// localStorage.setItem("events", JSON.stringify(events));
// renderMessage();

// });

// function renderMessage() {
//   var lastGrade = JSON.parse(localStorage.getItem("event"));
//   if (lastGrade !== null) {
//     document.querySelector(".message").textContent = lastGrade.student + 
//     " received a/an " + lastGrade.grade
//   }
// }
// 1. GET INSIDE LOCAL STORAGE AND SAV INTO EMPTY VAR ( AN ARRAY OF OBJECTS WHIXH IS YOUR TICKETS.)
// 2.PUSH NEW TIOCKET TO ARRAY WITH OLD TICKETS. AFTER THAT, TAKE ARRAY AND SAVE INTO LOCAL STORAGE (THE ARRAY).


var ticket = document.querySelector("#purchase");
ticket.addEventListener('click', addToCart)
function addToCart (event){
  console.log("we got here")
  var date = document.querySelectorAll(".date-field");
  var numTickets = document.querySelectorAll(".quantity-field");
  var name = document.querySelectorAll(".name-field");
  var cost = document.querySelectorAll(".cost-field");

  for(var i = 0; i < name.length; i++) {
    var concert = {
      eventName: name[i].value,
      eventDate: date[i].value,
      valueNumTickets : numTickets[i].value.trim(),
      eventCost: cost[i].value,
    };
    var events = JSON.parse(localStorage.getItem("events"))||[];
    events.push(concert)
    localStorage.setItem("events", JSON.stringify(events));
  }


  
  
  renderMessage();

  

// 







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
//       })}});


//       function calculateTotal() {
//   // assign each value by id 
//  var item = [ Number(document.getElementById('product-price').value),
//               ,
//               Number(document.getElementById('product-price').value)];
//   // Multiply each input and add it to the value
//   var subTotal = [ document.getElementById('product-line-price').value * 50,
//                 ,
//                 document.getElementById('product-line-price').value * 45];
//   // declare 
//   var totalDue = 0;

//   // loop through each item and add to the list item 
//   for (var i = 0; i < item.length; i++){
//       countItem += item[i];
//   }

//     // get total by call each item from the list
//     for (var j = 0; j < subTotal.length; j++){
//       totalDue += total[j];
//     }
   
//    document.getElementById('cart-subtotal').innerHTML = "Item Total: $" + totalDue.toFixed(2);
//     }

var removeCartItemBtn = document.getElementsByClassName('remove-product')
console.log(removeCartItemBtn);
for (var i = 0; i < removeCartItemBtn.lenght; i++){ 
  var button = removeCartItemBtn[i]
  button.addEventListener('click', function(event) {
  var removeButtonClicked = event.target;
  removeButtonClicked.parentElement.parentElement.remove()
  
  })

}
}
