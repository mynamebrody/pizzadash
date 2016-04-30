//Get Menu for Store #4336
var pizzapi = require('dominos'); // or without payment option use require('pizzapi');
var myStore = new pizzapi.Store(3302);

myStore.getMenu(
    function(storeData){
        console.log(storeData);
    }
);