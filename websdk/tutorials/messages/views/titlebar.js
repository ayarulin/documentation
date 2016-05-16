'use strict';
/**
 * The Titlebar View class simply renders the participant names of the selected Conversation.
 * @type {Object}
 */
(function() {
  var layerSampleApp = window.layerSampleApp;
  layerSampleApp.Titlebar = Backbone.View.extend({
    el: '.conversation-header',

    /**
     * Render the title for the current Conversation.
     * Use the Identity Object's displayName to turn userIds
     * into displayable names.
     */
    render: function(conversation) {
      var title;

      if (conversation) {
        title = betterTitle(conversation.participants);
      } else {
        var user = layerSampleApp.client.user;
        var img = '<img src="' + user.avatarUrl + '"/>';
        title = img + 'Logged in as: ' + user.displayName;
      }

      this.$el.html('<div class="title">' + title + '</div>');
    }
  });

  function betterTitle(participants) {
    return participants.map(function(userId) {
      return layerSampleApp.client.getIdentity(userId).displayName;
    }).join(', ');
  }
})();