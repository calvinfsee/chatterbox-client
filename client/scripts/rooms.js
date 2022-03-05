// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: { fab: 'fab' },

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  addRoom: function () {},
  updateList: function () {
    //Send get request to API endpoint
    //with data we recieve as a result, iterate through
  },
  selectRoom: function () {},
  selected: 'fab'

};

class Room {
  constructor(name) {
    this.name = name;
  }
}