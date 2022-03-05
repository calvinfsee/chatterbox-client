// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function (roomname) {
    if (!Rooms._data[roomname]) {
      Rooms._data[roomname] = roomname;
    }
  },
  updateList: function () {
    for (let i = 0; i < Messages._data.length; i++) {
      Rooms.addRoom(Messages._data[i].roomname);
    }
  },
  selectRoom: function () {},
  selected: 'fab'

};

class Room {
  constructor(name) {
    this.name = name;
  }
}