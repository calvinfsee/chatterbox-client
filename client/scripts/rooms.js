// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  add: function (roomname) {
    if (!Rooms._data[roomname]) {
      Rooms._data[roomname] = roomname;

    }
  },
  updateList: function () {
    for (let i = 0; i < Messages._data.length; i++) {
      Rooms.add(Messages._data[i].roomname);
    }
  },
  selected: null //Some dastardly individual is sending messages to the roomname NULL

};