// Copyright (c) 2012 Toby Ealden.
// Copyright (c) 2014 Martin Man.
// vim: ts=2 sw=2 et

#include "socket_watcher.hpp"
#include <string.h>

using namespace v8;

Persistent<String> callback_symbol;
Persistent<Function> constructor;

// mman, why is this here?
// Handle<Value> Calleback(const Arguments& args) {
//     return Undefined();
// };

SocketWatcher::SocketWatcher() : poll_(NULL), fd_(0), events_(0)
{
}

void SocketWatcher::Initialize(Handle<Object> exports)
{
  NanScope();

  Local<FunctionTemplate> t = NanNew<FunctionTemplate>(New);

  t->SetClassName(NanNew("SocketWatcher"));
  t->InstanceTemplate()->SetInternalFieldCount(1);

  NODE_SET_PROTOTYPE_METHOD(t, "set", SocketWatcher::Set);
  NODE_SET_PROTOTYPE_METHOD(t, "start", SocketWatcher::Start);
  NODE_SET_PROTOTYPE_METHOD(t, "stop", SocketWatcher::Stop);

  exports->Set(NanNew("SocketWatcher"), t->GetFunction());
  NanAssignPersistent(constructor, t->GetFunction());
  NanAssignPersistent(callback_symbol, NanNew("callback"));
}

NAN_METHOD(SocketWatcher::Start)
{
  NanScope();
  SocketWatcher *watcher = ObjectWrap::Unwrap<SocketWatcher>(args.This());
  watcher->StartInternal();
  NanReturnUndefined();
}

void SocketWatcher::StartInternal()
{
  if (poll_ == NULL) {
    poll_ = new uv_poll_t;
    memset(poll_,0,sizeof(uv_poll_t));
    poll_->data = this;
    uv_poll_init_socket(uv_default_loop(), poll_, fd_);

    Ref();
  }

  if (!uv_is_active((uv_handle_t*)poll_)) {
    uv_poll_start(poll_, events_, &SocketWatcher::Callback);
  }
}

void SocketWatcher::Callback(uv_poll_t *w, int status, int revents)
{
  NanScope();

  SocketWatcher *watcher = static_cast<SocketWatcher*>(w->data);
  assert(w == watcher->poll_);

  Local<String> symbol = NanNew(callback_symbol);
  Local<Value> callback_v = NanObjectWrapHandle(watcher)->Get(symbol);
  if(!callback_v->IsFunction()) {
    watcher->StopInternal();
    return;
  }

  Local<Function> callback = Local<Function>::Cast(callback_v);

  const unsigned argc = 2;
  Local<Value> argv[argc]= { NanNew(revents & UV_READABLE ? NanTrue() : NanFalse()),
                             NanNew(revents & UV_WRITABLE ? NanTrue() : NanFalse()) };

  NanMakeCallback(NanObjectWrapHandle(watcher), callback, argc, argv);
}

NAN_METHOD(SocketWatcher::Stop)
{
  NanScope();
  SocketWatcher *watcher = ObjectWrap::Unwrap<SocketWatcher>(args.This());
  watcher->StopInternal();
  NanReturnUndefined();
}

void SocketWatcher::StopInternal() {
  if (poll_ != NULL) {
    uv_poll_stop(poll_);
    Unref();
  }
}

NAN_METHOD(SocketWatcher::New)
{
  NanScope();
  if (args.IsConstructCall()) {
    // Invoked as constructor: `new MyObject(...)`
    SocketWatcher *s = new SocketWatcher();
    s->Wrap(args.This());
    NanReturnValue(args.This());
  } else {
    // Invoked as plain function `MyObject(...)`, turn into construct call.
    Local<Function> cons = NanNew<Function>(constructor);
    NanReturnValue(cons->NewInstance());
  }
}

NAN_METHOD(SocketWatcher::Set)
{
  NanScope();
  SocketWatcher *watcher = ObjectWrap::Unwrap<SocketWatcher>(args.This());

  if(!args[0]->IsInt32()) {
    NanThrowTypeError("First arg should be a file descriptor.");
    NanReturnUndefined();
  }
  int fd = args[0]->Int32Value();

  int events = 0;
  if(!args[1]->IsBoolean()) {
    NanThrowTypeError("Second arg should boolean (readable).");
    NanReturnUndefined();
  }
  if(args[1]->IsTrue()) events |= UV_READABLE;

  if(!args[2]->IsBoolean()) {
    NanThrowTypeError("Third arg should boolean (writable).");
    NanReturnUndefined();
  }
  if (args[2]->IsTrue()) events |= UV_WRITABLE;

  assert(watcher->poll_ == NULL);

  watcher->fd_ = fd;
  watcher->events_ = events;
  NanReturnUndefined();
}


void Init(Handle<Object> exports)
{
  SocketWatcher::Initialize(exports);
}

NODE_MODULE(socketwatcher, Init)
