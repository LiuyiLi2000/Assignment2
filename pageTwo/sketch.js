
let dataServer;
let pubKey = "pub-c-7b25d17a-dd59-4c86-a215-84bb6d305ee7";
let subKey = "sub-c-52f810be-3301-4c36-b6d2-0a35ca82ed2a";
let secretKey = "sec-c-NGIyYzhlYTEtMmM3Ni00ZTc0LTgwNTUtOWIzYjcyZjMzNGNh"; 


let occupancy;
let channelName = "presenceTest";
let nameInput 

let allowMessage = false;

/**You were missing this section of code that searched through the parameters */
var url = new URL(window.location.href);
var you = url.searchParams.get("you");
var redVal = url.searchParams.get("r");
var greenVal = url.searchParams.get("g");
var blueVal = url.searchParams.get("b");

console.log(you);

function setup() {

    createCanvas(windowWidth, windowHeight);

    dataServer = new PubNub({
      subscribeKey: subKey,
      publishKey: pubKey,
      uuid: you, // changed this to "you" which is passed in the parameters
      secretKey: secretKey,
      heartbeatInterval: 0,
    });

     // listen for messages coming through the subcription feed on this specific channel. 

    dataServer.subscribe({ channels: [channelName],   withPresence: true });
    dataServer.addListener({ message: readIncoming, presence: whoisconnected });
  
  }


function draw() {
  background(255);
  textSize(25);
  textFont('Times New Roman');
  
  if (occupancy > 0) {

    text("There are " +  occupancy + " people in my room now!", 1200, 820);
    text ("Nice to see you!" + you, 1200, 780);
  
   } else {
  
    text("There is no one online. QAQ", 1200, 820);
    text ("Nice to see you! " + you, 1200, 780);
  
   }
   
  }
  
  function mousePressed() {

    sendTheMessage();
  }
    // PubNub logic below
  function sendTheMessage() {
    // Send Data to the server to draw it in all other canvases
    dataServer.publish({
      channel: channelName,
      message: {
        test: "test"
      },
    });
  }
  
  function readIncoming(inMessage) {
      if (inMessage.channel == channelName) {
          console.log(inMessage);
      }
  }
  
  function whoisconnected(connectionInfo) {
    console.log(connectionInfo);
  
    occupancy = connectionInfo.occupancy;
  
    console.log(occupancy);
  }

  
