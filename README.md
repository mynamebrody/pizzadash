![Pizza Dash](http://i.imgur.com/DD944Cz.jpg)
PizzaDash
====
This is a node.js application that "hacks" your Amazon Dash Button to order you a Domino's pizza!
I was inspired by [this article by Edward Bensen](https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8).
I am using a few npm modules to listen for the button press and place the order: [RIAEvangelist](https://github.com/RIAEvangelist)'s [dominos](https://github.com/RIAEvangelist/node-dominos-pizza-api) and also [hortinstein](https://github.com/hortinstein)'s [Node-Dash-Button](https://github.com/hortinstein/node-dash-button).

One idea would be to run this via a local server such as a Raspberry Pi and have on demand pizza ordering whenever you just need a pizza!

Requirements
====
`pcap`
If you are running ubuntu you will need to run ` sudo apt-get install libpcap0.8-dev `

Contributing
====

1. Pull or Fork code.
2. Do cool stuff.
3. Submit a PR.

Setup/Run
====
1. Run ` npm install ` the first time so all npm requirements will be installed.
2. Find Closest Store
  - Run ` node findStore.js ` and input your 5 digit zipcode, this will return closest store info (Store ID) and their menu.
3. Find Dash Button
  - Run ` sudo node node_modules/node-dash-button/bin/findbutton ` and press the button
4. Edit the `app.js` file.
  - Add your store from step 2
  - Edit your address and personal/customer information
  - Edit your order using menu from step 2
  - Add credit card information
  - Add your Amazon Dash Button's address from step 3
5. Run ` sudo node app.js ` press your Dash Button that you have set up and BAM pizza will be coming soon!

#### To do
- Smooth things out and make a setup script for first time users that will create an `app.js` file automatically for them
- Coupon support
- Other ideas?

#### License

The MIT License (MIT)

Copyright (c) 2015 Alex Hortin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
