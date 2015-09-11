{
  "targets": [
    {
      "target_name": "socketwatcher",
      "sources": [ "socket_watcher.cpp" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}
