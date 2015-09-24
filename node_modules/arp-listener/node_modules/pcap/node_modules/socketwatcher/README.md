#SocketWatcher

SocketWatcher is a JavaScript binding for `uv_poll` based on code by [TobyEalden](https://github.com/TobyEalden) (with permission) for node_mdns. It's useful as a drop-in replacement for Node's old, private module `IOWatcher`.

More information on `uv_poll`:

- [libuv header (look for `uv_poll_t`)](https://github.com/joyent/libuv/blob/master/include/uv.h)
- [External I/O with polling (libuv docs)](http://nikhilm.github.io/uvbook/utilities.html#external-i-o-with-polling)
- [fs: remove fs.watchFile(), IOWatcher (Node.js bug #3348)](https://github.com/joyent/node/issues/3348)
- [IOWatcher broken since 0.7.9 (Node.js bug #4136)](https://github.com/joyent/node/issues/4136)

##Installation and use

```$ npm install socketwatcher```

```javascript
var SocketWatcher = require("socketwatcher").SocketWatcher;
var watcher = new SocketWatcher();
watcher.callback = function() { [...] };
watcher.set(fd, read_flag, write_flag);
watcher.start();
// watcher.stop();
```

Note: since version 0.2.0, you must use `require("socketwatcher").SocketWatcher`, instead of using the module object directly. Sorry for the inconvenience.

##Original work

The files contributed to node_mdns:

- [socket_watcher.hpp](https://github.com/agnat/node_mdns/blob/6dbd4619c2fe47a17cbc5d236a8e057eb08a1b41/src/socket_watcher.hpp)
- [socket_watcher.cpp](https://github.com/agnat/node_mdns/blob/6dbd4619c2fe47a17cbc5d236a8e057eb08a1b41/src/socket_watcher.cpp)

##License

MIT licensed, see LICENSE.
