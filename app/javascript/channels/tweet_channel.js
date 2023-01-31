import consumer from "./consumer"

consumer.subscriptions.create("TweetChannel", {
  connected() {
    console.log("Connected to tweet channel...");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});
