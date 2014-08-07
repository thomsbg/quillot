(function() {
  var makeDelta, tandem;

  tandem = require('tandem-core');

  makeDelta = tandem.Delta.makeDelta;

  exports.type = {
    name: 'quill',
    uri: 'http://quilljs.com/types/quill',
    create: function(initialString) {
      return tandem.Delta.getInitial(initialString || '\n');
    },
    apply: function(snapshot, op) {
      return makeDelta(snapshot).compose(makeDelta(op));
    },
    transform: function(op1, op2, side) {
      return op1.transform(op2, side === 'left');
    },
    compose: function(op1, op2) {
      return op1.compose(op2);
    },
    deserialize: function(data) {
      return tandem.Delta.makeDelta(data);
    }
  };

}).call(this);
