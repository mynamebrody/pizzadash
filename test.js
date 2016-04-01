console.log("Hello World");
//Get Menu for Store #4336
var pizzapi = require('dominos'); // or without payment option use require('pizzapi');
var colors = require('colors');
colors.setTheme(
    {
        menuItem    : 'bgCyan',
        menuTitle   : 'bgBlue',
        store       : 'bgBlue',
        info        : 'cyan'
    }
);
var myStore = new pizzapi.Store(3302);
myStore.ID = 3302;
pizzapi.Util.findNearbyStores(
    '316 Congress St., Troy, NY, 12180',
    'Delivery',
    function(storeData) {
        // console.log(storeData.result.Stores)
    }
);

myStore.getMenu(
    function(storeData){
        console.log(storeData);
    }
);