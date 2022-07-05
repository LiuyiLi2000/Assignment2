

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
 

  if (occupancy = 10) {
    background(255);
    text("We got 10 people!", 800,1200);
    textSize(25);
    textFont('Times New Roman');
  
    allowMessage = false;

 } if (occupancy =1) {
  background(255);
  text("Did someone entered the chat?", 800, 1200);

 }else if (occupancy =2) {

    background(255);
    text("Oh now the second one entered the chat!", 800, 1200);

  }else if (occupancy =3) {

    background(255);
    text("The third one entered the chat!", 800, 1200);
  }else if (occupancy =4) {

    background(255);
    text("The forth one entered the chat!", 800, 1200);
  }else if (occupancy =5) {

    background(255);
    text("The fifth one entered the chat!", 800, 1200);
  }else if (occupancy =6) {

    background(255);
    text("The sixth one entered the chat!", 800, 1200);
  }else if (occupancy =7) {

    background(255);
    text("The seventh one entered the chat!", 800, 1200);
  }else if (occupancy =8) {

    background(255);
    text("The eighth one entered the chat!", 800, 1200);
  }else if (occupancy =9) {

    background(255);
    text("The nineth one entered the chat!", 800, 1200); 
  }else if (occupancy =11) {

    background(255);
    text("The eleventh one entered the chat!", 800, 1200);
  }else if (occupancy =12) {

    background(255);
    text("The twelfth one entered the chat!", 800, 1200);
  }else if (occupancy =13) {

    background(255);
    text("The thirteenth one entered the chat!", 800, 1200);
  }else if (occupancy =14) {

    background(255);
    text("The forteenth one entered the chat!", 800, 1200);
  }else if (occupancy =15) {

    background(255);
    text("The fifteenth one entered the chat!", 800, 1200);
  }else if (occupancy =16) {

    background(255);
    text("The sixteenth one entered the chat!", 800, 1200);
  }else if (occupancy =17) {

    background(255);
    text("The seventeenth one entered the chat!", 800, 1200);
  }else if (occupancy =18) {

    background(255);
    text("The eighteenth one entered the chat!", 800, 1200);
  }else if (occupancy =19) {

    background(255);
    text("The nineteenth one entered the chat!", 800, 1200);
  }else if (occupancy =20) {

    background(255);
    text("The twentyth one entered the chat!", 800, 1200);

  
 } else if (occupancy =0){
  background(255);
  text("waiting for someone...", 800, 900); 
  allowmessage = false;

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
