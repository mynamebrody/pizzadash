Vars to script in:
  * Street
  * City
  * Region
  * Zipcode
  * firstName
  * lastName
  * phone
  * email
  * items
  * cardNumber, Expiration, SecurityCode, PostalCode

Other restaurants:
* https://developers.delivery.com
* https://github.com/travist/makemeasandwich.js
* Randomly order favorite meal saved?

Use dominos/example/commandlinepizza for order saving and Setup


Design:
  Make button: Input name, mac address, type, and optional json order file
    type: Dominos, Jimmy Johns, Yo, easily extensible
    Set button order
      Based on type, sets up your order or command for the button
      Verify order is valid now. Saves order to file with node button
  Activate: when the button is pressed, call this function to order based on
    the type of the button. i.e. price, validate, make post request.
    Activate just switches which function to call based on the order type
  OrderPizza(order)
  OrderSandwich(order)
  SendYo(id)