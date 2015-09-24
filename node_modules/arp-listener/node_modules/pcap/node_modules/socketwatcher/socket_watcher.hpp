// Copyright (c) 2012 Toby Ealden.
// Copyright (c) 2014 Martin Man.
// vim: ts=2 sw=2 et

#ifndef SOCKETWATCHER_HPP
#define SOCKETWATCHER_HPP

#include <nan.h>
#include <uv.h>

class SocketWatcher : public node::ObjectWrap
{
  public:
    SocketWatcher();

    static void Initialize(v8::Handle<v8::Object> exports);

  private:
    uv_poll_t* poll_;
    int fd_;
    int events_;

    static NAN_METHOD(New);
    static NAN_METHOD(Set);
    static NAN_METHOD(Start);
    static NAN_METHOD(Stop);

    void StartInternal();
    void StopInternal();
    static void Callback(uv_poll_t *w, int status, int events);
};

#endif
