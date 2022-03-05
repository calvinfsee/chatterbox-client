// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  all: function () {
    return Messages._data;
  },
  add: function (message) {
    Parse.create(message, function () {
      App.fetch();
    });
    return message;
  },
  build: function(username, text, roomname) {
    return {username, text, roomname};
  }

};