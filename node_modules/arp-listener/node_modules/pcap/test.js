var pcap = require('pcap'), util = require('util'), EventEmitter = require('events').EventEmitter;

var pcap_session = pcap.createSession('en0', 'port 53');
pcap_session.on('packet', function (raw_packet) {
    var date = new Date();
    console.log('Time: '+date.toString());
    var packet = pcap.decode.packet(raw_packet);
    if (packet.link.ip.protocol_name === 'UDP'){
        if (packet.link.ip.udp.dns){
            var dns = packet.link.ip.udp.dns;
            console.log('Question: '+util.inspect(dns.question)+'\n Answer: '+util.inspect(dns.answer));
        }
    }
});
