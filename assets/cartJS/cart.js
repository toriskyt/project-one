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
    }
   
   document.getElementById('cart-subtotal').innerHTML = "Item Total: $" + totalDue.toFixed(2);
  
}