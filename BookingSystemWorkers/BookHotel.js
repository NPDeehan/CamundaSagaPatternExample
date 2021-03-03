const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");

// configuration for the Client:
//  - 'baseUrl': url to the Workflow Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger, asyncResponseTimeout:50000, maxTasks:1 };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("BookHotel", async function({ task, taskService }) { 
  // Put your business logic
  
  // complete the task
 const processVariables = new Variables();
  processVariables.set("HotelBookingStatus", "Confirmed");
  processVariables.set("HotelBookingID", create_UUID());

  await taskService.complete(task, processVariables);
});

client.subscribe("CancelHotelBooking", async function({ task, taskService }) { 
  const processVariables = new Variables();
  processVariables.set("HotelBookingStatus", "Canceled");
  await taskService.complete(task, processVariables);
});


function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}