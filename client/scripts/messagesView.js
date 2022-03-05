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
    Messages.all().forEach(function (message) {
      MessagesView.renderMessage(message);
    });

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    $(`<div class='message'><span class="username">${message.username}</span><span class='text'>:${message.text}</span></div>`).appendTo($('#chats')); //colon in text field
  },

  handleClick: function(event) {
    $('#chats').on('click', '.username', (e) => {
      Friends.toggleStatus($(e.target).text());
    });
  }

};