var dash_button = require('node-dash-button');
var pizzapi = require('dominos');
var orderconfig = require('./order.json');

//Input order from json
var order = new pizzapi.Order(
  orderconfig["order"]
);
//Add items to order
var items = orderconfig["items"];
for (var i=0; i<items.length; i++) {
  order.addItem(
    new pizzapi.Item(
      items[i]
    )
  );
}

// Setup your Credit Card Info
var cardInfo = new order.PaymentObject();
cardInfo.Amount = order.Amounts.Customer;
cardInfo.Number = orderconfig["cardNum"];
cardInfo.CardType = order.validateCC(orderconfig["cardNum"]);
cardInfo.Expiration = orderconfig["cardExp"];//  01/15 just the numbers "01/15".replace(/\D/g,'');
cardInfo.SecurityCode = orderconfig["cardSec"];
cardInfo.PostalCode = orderconfig["cardPost"]; // Billing Zipcode

order.Payments.push(cardInfo);

//TODO: if no mac address, find one and save it
var dash = dash_button(orderconfig["dashMacAddress"]);
dash.on("detected", function (){
    console.log("Dash Button Found");
	//Validate, price, and place order!
	order.validate(
	    function(result) {
	        console.log("Order is Validated");
	    }
	);
	order.price(
	    function(result) {
            console.log("Order is Priced");
	    }
	);
	order.place(
	    function(result) {
            console.log("Price is", result.result.Order.Amounts, "\nEstimated Wait Time",result.result.Order.EstimatedWaitMinutes, "minutes");
	        console.log("Order placed!");
	    }
	);
});