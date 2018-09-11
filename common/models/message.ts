export default (Message) => {
  Message.greet  = (msg, cb) => {
    process.nextTick( () => {
      msg = msg || 'hello';
      cb(null, 'Sender says ' + msg + ' to receiver');
    });
  };
};
