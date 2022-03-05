// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    RoomsView.handleClick();
    RoomsView.handleChange();
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    for (let room in Rooms._data) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    let isSelected = Rooms.selected === roomname ? 'selected' : '';
    $(`<option value="${roomname}" ${isSelected}>${roomname}</option>`).appendTo($('#rooms select'));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    RoomsView.$select.change(function(e) {
      Rooms.selected = $(e.target).val();
      App.fetch(function() {
        Rooms.updateList();
        RoomsView.render();
        MessagesView.render();
      });
    });

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    RoomsView.$button.click(function(e) {
      let newRoom = window.prompt();
      Rooms.add(newRoom);
      Rooms.selected = newRoom;
      RoomsView.render();
    });
  }
};
