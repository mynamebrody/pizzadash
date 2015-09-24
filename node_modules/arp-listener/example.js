
var arpListener = require('./')

arpListener('wlan0', function(arpData) {
  console.log(arpData)
})