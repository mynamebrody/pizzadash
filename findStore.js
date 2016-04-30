var pizzapi = require('dominos');
var prompt = require('prompt');

var myStore;

prompt.start();

prompt.get(['zip'], function (err, result) {
    if (err) { return onErr(err); }
    //Get stores by postal code, distance is not as accurate this way
    pizzapi.Util.findNearbyStores(
        result.zip,
        'Delivery',
        function(storeData) {
            myStore = new pizzapi.Store(
                {
                    ID: storeData.result.Stores[0].StoreID
                }
            );

            //Get Info for first store
            myStore.getInfo(
                function(storeData) {
                    console.log('\n\n##################\nClosest Store Info\n##################\n\n',storeData.result);
                }
            );
            //Get Menu for first store
            myStore.getFriendlyNames(
                function(storeData) {
                    console.log('\n\n##################\nClosest Store Menu\n##################\n\n',storeData.result);
                }
            );
        }
    );
});

function onErr(err) {
    console.log(err);
    return 1;
}