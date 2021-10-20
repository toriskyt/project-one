function calculateTotal() {
  // assign each value by id 
  var item = [Number(document.getElementById('50.00').value),
    ,
  Number(document.getElementById('45.00').value)];
  // Multiply each input and add it to the value
  var subTotal = [document.getElementById('50.00').value * 50,
    ,
  document.getElementById('45.00').value * 45];
  // declare 
  var totalDue = 0;
  // loop through each item and add to the list item 
  for (var i = 0; i < item.length; i++) {
    countItem += item[i];
  }
  // get total by call each item from the list
  for (var j = 0; j < subTotal.length; j++) {
    totalDue += total[j];
  }

  document.getElementById('cart-subtotal').innerHTML = "Item Total: $" + totalDue.toFixed(2);

}

var addTicket = document.querySelector("#addTicket");
var cart = document.querySelector("#cart");
 

function newTicket() {
  // ticket section
  var ticketCon = document.createElement("section");
  ticketCon.setAttribute("class", "ticket-container item");
  cart.prepend(ticketCon);

  
  
  // event name section
  var eventNameArticle = document.createElement("article")
  eventNameArticle.setAttribute("class", "event-name");
  ticketCon.append(eventNameArticle);
  
  // number of tickets section
  var quantityArticle = document.createElement("article")
  quantityArticle.setAttribute("class", "pass-quantity");
  ticketCon.append(quantityArticle);

  // date section
  var dateArticle = document.createElement("article");
  dateArticle.setAttribute("class", "event-date");
  ticketCon.append(dateArticle);

  var removeBtnArticle = document.createElement("article");
  removeBtnArticle.setAttribute("class", "remove-item");
  ticketCon.append(removeBtnArticle);

  
  // event name label
  var nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name-field");
  nameLabel.innerHTML= "Enter Event Name";
  eventNameArticle.append(nameLabel); 

  // event name input
  var NameInput = document.createElement("input");
  NameInput.setAttribute("type", "text");
  NameInput.setAttribute("class", "form-control name-field");
  eventNameArticle.append(NameInput); 

  // event cost label
  var breakEl = document.createElement("br");
    eventNameArticle.append(breakEl);
  var costLabel = document.createElement("label");
  costLabel.setAttribute("for", "cost-field");
  costLabel.innerHTML= "Enter Event Cost";
  eventNameArticle.append(costLabel); 

  // event cost input
  var costInput = document.createElement("input");
  costInput.setAttribute("value", "0.00");
  costInput.setAttribute("type", "number");
  costInput.setAttribute("class", "form-control cost-field");
  eventNameArticle.append(costInput);

    // number of tickets label
    var quantityLabel = document.createElement("label");
    quantityLabel.setAttribute("for", "pass-field");
    quantityArticle.innerHTML= "Ticket Quantity";
    quantityArticle.append(quantityLabel); 

    // number of tickets input
    var ticketsInput = document.createElement("input");
    ticketsInput.setAttribute("min", "");
    ticketsInput.setAttribute("value", "0");
    ticketsInput.setAttribute("type", "number");
    ticketsInput.setAttribute("class", "form-control quantity-field");
    quantityArticle.append(ticketsInput);

    // event date label
    var eventDate = document.createElement("label");
    eventDate.setAttribute("for", "event-day");
    dateArticle.innerHTML= "Event Date:";
    dateArticle.append(eventDate); 

    // event date input
    var breakEl = document.createElement("br");
    dateArticle.append(breakEl);
    var dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("class", "form-control date-field");
    dateArticle.append(dateInput);

    // delete button 
    var deleteBtn =  document.createElement("button");
    deleteBtn.setAttribute("type", "button");
    deleteBtn.setAttribute("class", "remove-item");
    deleteBtn.innerHTML= "Delete";
    removeBtnArticle.append(deleteBtn)


}

addTicket.addEventListener('click', newTicket);

function removeItem () {
var removeBtn = document.querySelector("section");
removeBtn.remove();
}



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

    // var addItem = function (eventCost, valueNumTickets) {
    //   var currentTotal =  localStorage.getItem(eventCost);
    //   if(currentTotal)
    //   currentTotal = parseFloat(currentTotal) + (parseFloat(eventCost) *
    //   parseFloat(valueNumTickets));
    //   else
    //   currentTotal = parseFloat(eventCost) * parseFloat(valueNumTickets);
    //   localStorage.setItem(eventCost, currentTotal);
    // };
    // addItem(eventCost, valueNumTickets);
    // }

  }
}

var  requestTicket = document.querySelector(".request-ticket");



function getStorageItem () {
  var events = JSON.parse(localStorage.getItem(events))||[];
  document.getElementById('qty').value = events;
  
}

requestTicket.addEventListener('click', getStorageItem)

