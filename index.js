console.log("start");
PusherClient = require("pusher-js");
new PusherClient("xxx-a-valid-key", {encrypted: true, cluster: "mt1"})
console.log("done");
