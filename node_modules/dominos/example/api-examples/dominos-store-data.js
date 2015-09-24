var pizzapi = require('../../dominos-pizza-api');

//Get stores by postal code, distance is not as accurate this way
pizzapi.Util.findNearbyStores(
    '63102',
    'Delivery',
    function(storeData) {
        var Store = new pizzapi.Store(
            {
                ID: storeData.result.Stores[0].StoreID
            }
        );

        console.log('\n\n##################\nFirst Store Object\n##################\n\n',Store);

        //Get Info for first store
        Store.getInfo(
            function(storeData) {
                console.log('\n\n##################\nFirst Store Info\n##################\n\n',storeData.result);
            }
        );
    }
);
