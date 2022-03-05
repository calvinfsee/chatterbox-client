// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    MessagesView.handleClick();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    console.log('render the magic');
    if (typeof Rooms.selected === 'string') {
      MessagesView.$chats.html('');
      Messages.all().forEach(function (message) {
        if (message.roomname === Rooms.selected) {
          MessagesView.renderMessage(message);
        }
      });
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    let isFriend = Friends.status(message.username) ? 'friend' : '';
    $(`<div class='message'><span class="username ${isFriend}" >${message.username}</span><span class='text'>:${message.text}</span></div>`).appendTo($('#chats'));
  },

  handleClick: function(event) {
    $('#chats').on('click', '.username', (e) => {
      Friends.toggleStatus($(e.target).text());
    });
  }

};