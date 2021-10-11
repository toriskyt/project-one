// $("<h1>")


$(document).ready(function() {

    /* Set rates + misc */
    var taxRate = 0.06;
    var fadeTime = 300;
  
    $('.pass-quantity input').change(function() {
      updateQuantity(this);
    });
  
    $('.remove-item button').click(function() {
      removeItem(this);

    });
  
  
    /* Recalculate cart */
    function recalculateCart() {
      var subtotal = 0; //need to find a way to select the product price and 
      //calculate the subtotal based on the amount of tickets 
      
      // $(this).value();
      // console.log(subtotal);
  
      /* Sum up row totals */
      $('.item').each(function() { 
        // console.log(subtotal);
        parseFloat ( $(this).children('.product-line-price').text());
        console.log(subtotal);
      });
  
      /* Calculate totals */
      var tax = subtotal * taxRate;
      var total = subtotal + tax;
      console.log(total);
  
      /* Update totals display */
      $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('.cart-total').html(total.toFixed(2));
        if (total == 0) {
          $('.checkout').fadeOut(fadeTime);
        } else {
          $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
      });
    }
  
    /* Update quantity */
    function updateQuantity(quantityInput) {
      /* Calculate line price */
      var productRow = $(quantityInput).parent().parent();
      var price = parseFloat(productRow.children('.product-price').text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;
  
      /* Update line price display and recalc cart totals */
      productRow.children('.product-line-price').each(function() {
        $(this).fadeOut(fadeTime, function() {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });
    }
  
    /* Remove item from cart */
    function removeItem(removeButton) {
      /* Remove row from DOM and recalc cart total */
      var productRow = $(removeButton).parent().parent();
      productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
      });
    }
  
  });
  