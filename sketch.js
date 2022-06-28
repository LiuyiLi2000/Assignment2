

let dataServer;
let pubKey = "pub-c-7b25d17a-dd59-4c86-a215-84bb6d305ee7";
let subKey = "sub-c-52f810be-3301-4c36-b6d2-0a35ca82ed2a";
let secretKey = "sec-c-NGIyYzhlYTEtMmM3Ni00ZTc0LTgwNTUtOWIzYjcyZjMzNGNh";

let occupancy = 0; 

let channelName = "presenceTest";

let allowMessage = false;

  
function setup() {

    createCanvas(windowWidth, windowHeight);

    dataServer = new PubNub({
      subscribeKey: subKey,
      publishKey: pubKey,
      uuid: "Liuyi",
      secretKey: secretKey,
      heartbeatInterval: 0,
    });

     // listen for messages coming through the subcription feed on this specific channel. 

    dataServer.subscribe({ channels: [channelName],   withPresence: true });
    dataServer.addListener({ message: readIncoming, presence: whoisconnected });
   
  
  }
  
function draw() {
 


 if (occupancy > 10) {
  background(255);
  text("We got 10 people!", windowWidth/2, windowHeight/2);

  allowMessage = false;

 } else if (occupancy =1) {

  background(255);
  text("Someone entered the chat", windowWidth/1.2, windowHeight/2);

 }else if (occupancy =2) {

    background(255);
    text("Second one entered the chat", windowWidth/1.2, windowHeight/2);

  
 } else {
  background(255);
  text("waiting for someone", windowWidth/1.2, windowHeight/1.2); 
  allowmessage = false;

  }
}
  // PubNub logic below
function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases
  dataServer.publish({
    channel: channelName,
    message: {
      x: mouseX,
      y: mouseY
    },
  });
}

function readIncoming(inMessage) {

  if (allowMessage == true) { // if there is less than 10 people on the page draw circles then show the messages that are sent. 
 
    if (inMessage.channel == channelName) {
        console.log(inMessage);
    }

    noStroke();
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(inMessage.message.x, inMessage.message.y, 50, 50);

  } 
}

function whoisconnected(connectionInfo) {
  console.log(connectionInfo);

  occupancy = connectionInfo.occupancy;

  console.log(occupancy);

}