console.log("start");
// PusherClient = require("pusher-js");
PusherClient = require("pusher-js/dist/web/pusher.min");
new PusherClient("xxx-a-valid-key", {encrypted: true, cluster: "mt1"})
console.log("done");
