![Pizza Dash](http://i.imgur.com/DD944Cz.jpg)
PizzaDash
====
[![Join the chat at https://gitter.im/bhberson/pizzadash](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/bhberson/pizzadash?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This is a node.js application that "hacks" your [Amazon Dash Button](http://www.amazon.com/dashbutton) to order you a [Domino](https://www.dominos.com/)'s pizza!
I was inspired by [this article by Edward Bensen](https://medium.com/@edwardbenson/how-i-hacked-amazon-s-5-wifi-button-to-track-baby-data-794214b0bdd8).
I am using a few npm modules to listen for the button press and place the order: [RIAEvangelist](https://github.com/RIAEvangelist)'s [dominos](https://github.com/RIAEvangelist/node-dominos-pizza-api) and also [hortinstein](https://github.com/hortinstein)'s [Node-Dash-Button](https://github.com/hortinstein/node-dash-button).

One idea would be to have this [always running](#always-running) via a local server such as a Raspberry Pi and have on demand pizza ordering whenever you just need a pizza!

I wrote a blog post about my experience here on [Medium](https://medium.com/@brody_berson/hacking-amazon-s-5-dash-button-to-order-domino-s-pizza-9d19c9d04646)!

Requirements
====
__pcap__
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
4. Edit the ` app.js ` file.
  - Add your store from step 2
  - Edit your address and personal/customer information
  - Edit your order using menu from step 2
  - Add credit card information
5. Create your ` .env ` environmental variable file
  - Add your Amazon Dash Button's address from step 3
  - You can add as much personal information from Step 4 into this file as you want if it makes you more comfortable, just would require some logic changes in the ` app.js ` file.
6. Run` npm start ` and press your Dash Button that you have set up and BAM pizza will be coming soon!

Issues
====
If you run into any issues with Socket Watcher please try this: Looks like socketwatcher was using the legacy "node" command instead of nodejs. It is solved on ubuntu by installing nodejs-legacy that clears up those conflicts.
`sudo apt-get install nodejs-legacy`


Always Running
----
This [article](http://weworkweplay.com/play/raspberry-pi-nodejs/) shows you what you can do with a [Raspberry Pi](https://www.raspberrypi.org/) to set this up as a node server running all the time on your network and it literally would be the press of a button *whenever* you wanted!

To do
----
- Smooth things out and make a setup script for first time users that will create an ` .env ` file automatically for them
- Other ideas?
