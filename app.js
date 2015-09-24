var dash_button = require('node-dash-button');
var pizzapi = require('dominos');

// Setup your Default Store
// 6371 = Lafayette, CO 80026
// Run `node findStore.js` and enter Zip Code
var myStore = new pizzapi.Store(
    {
        ID: 6371
    }
);

// Dummy Customer
var thePresident = new pizzapi.Customer(
    {
        firstName: 'Barack',
        lastName: 'Obama',
        address: '700 Pennsylvania Avenue, Washington, DC',
        email: 'barack@whitehouse.gov'
    }
);

var order = new pizzapi.Order(
    {
        customer: thePresident,
        storeID: myStore.ID
    }
);

// Setup your Default Order
// 14SCREEN = Large (14") Hand Tossed Pizza Whole: Cheese
order.addItem(
    new pizzapi.Item(
        {
            code: '14SCREEN',
            options: {},
            quantity: 1
        }
    )
);

var dash = dash_button("XX:3f:20:33:54:44"); //address from running `node node_modules/node-dash-button/bin/findbutton`
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
            console.log("Price is", result.result.Order.Amounts, "\nEstimated Wait Time",result.result.Order.EstimatedWaitMinutes, "minutes")
	    }
	);
	//Still need to setup payment information
	order.place(
	    function(result) {
	        console.log("Order placed!");
	    }
	);
});