

let dataServer;
let pubKey = "pub-c-7b25d17a-dd59-4c86-a215-84bb6d305ee7";
let subKey = "sub-c-52f810be-3301-4c36-b6d2-0a35ca82ed2a";
let secretKey = "sec-c-NGIyYzhlYTEtMmM3Ni00ZTc0LTgwNTUtOWIzYjcyZjMzNGNh";

function createServer(y) {

  dataServer = new PubNub({
    subscribeKey: subKey,
    publishKey: pubKey,
    uuid: y,
    secretKey: secretKey,
    heartbeatInterval: 0,
  });

}

