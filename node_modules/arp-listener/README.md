
# arp-listener

## Install Dependencies

    sudo apt-get install libpcap0.8-dev

## Install Module

    npm install arp-listener

## Example

```js
var arpListener = require('arp-listener')

arpListener('wlan0', function(arpData) {
  console.log(arpData)
})
```

## Licence

MIT