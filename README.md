![Pizza Dash](http://i.imgur.com/mv1imGZ.jpg?1)
PizzaDash
====
This is a node.js application that "hacks" your Amazon Dash Button to order you a Domino's pizza!
I am using a few npm modules to listen for the button press and place the order: riaevangelist's ` pizzapi ` hortinstein's ` node-dash-button ` [Node-Dash-Button](https://github.com/hortinstein/node-dash-button). [See the pretty PizzaPI documentation](http://riaevangelist.github.io/node-dominos-pizza-api/)

Contributing
====

1. Pull or Fork code.
2. Do cool stuff.
3. Submit a PR.

Find Closest Store
====
Simpley run ` node findStore.js ` and input your 5 digit zipcode, this will return closest store info (Store ID) and their menu.

Find Dash Button
====
Hortinstein has an example of how to [Find a Dash Button](https://github.com/hortinstein/node-dash-button/blob/master/README.md#find-a-dash)

Run
====
1. Find Closest Store
2. Find Dash Button
3. Edit the `app.js` file and edit your customer, store, and default order
4. Run ` node app.js ` press your Dash Button that you have set up and BAM (actual ordering coming soon)

#### To do
- Make Actual Order be able to be placed (payments)

#### License

The MIT License (MIT)

Copyright (c) 2015 Alex Hortin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.