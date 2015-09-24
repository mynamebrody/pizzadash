
var pcap = require('pcap')

function bufferToHardwareAddress (buffer) {
  var hexString = buffer.toString('hex')
  var hexArray = hexString.split('')

  return hexArray[0] + hexArray[1] + ':' +
  hexArray[2] + hexArray[3] + ':' +
  hexArray[4] + hexArray[5] + ':' +
  hexArray[6] + hexArray[7] + ':' +
  hexArray[8] + hexArray[9] + ':' +
  hexArray[10] + hexArray[11]
}

function bufferToProtocolAddress(buffer) {
  return buffer.readUIntBE(0, 1) + '.' + buffer.readUIntBE(1, 1) + '.' + buffer.readUIntBE(2, 1) + '.' + buffer.readUIntBE(3, 1)
}

function listen (interface, arpPacketListener) {

  var pcapSession = pcap.createSession(interface, 'arp')

  pcapSession.on('packet', function(rawPacket) {

    var packet = pcap.decode.packet(rawPacket).payload.payload;

    packet.sender_ha = bufferToHardwareAddress(new Buffer(packet.sender_ha.addr))
    packet.target_ha = bufferToHardwareAddress(new Buffer(packet.target_ha.addr))

    arpPacketListener(packet)


  })

}

module.exports = listen