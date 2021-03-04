# Camunda Saga Pattern Example

This is an example of how to model the Saga partter by taking a distributed group of microservices and have them orchestrated asyncronousely using Camunda and BPMN. 

It involves 3 groups of independend components. 
1. The Camunda Platform Run
1. A BPMN model created by the Camunda Modeler
1. JavaScript Microservice Workers

Camunda Run is at the center of everything. The modeles are deployed to it and the services are resigster for work to it.
![Overview](./img/Overview.png)

## Installation
As I mentioned there are three components and each needing to be installed (but it's all pretty easy)

### Intalling Camunda Platform Run 

You can choose here to either follow the instructions to [intall Camunda Platform Run ](https://docs.camunda.org/manual/latest/installation/camunda-bpm-run/)  on the docs page **OR** You can start is up using docker
 with the following command
```sh
docker pull camunda/camunda-bpm-platform:run-latest
docker run -d --name camunda -p 8080:8080 camunda/camunda-bpm-platform:run-latest 
```
### Deploying the process Modeles
The process models are part of this repo in the ``./Models/`` folder. You deploy them by downloading the [Camunda Modeler](https://camunda.com/download/modeler/), opening them up and useing the depoly button. if successful, you should see them in Camunda cockpit.


### Installing the Microservice Workers
There are 3 micoservices built using the offical [External Task Client](https://github.com/camunda/camunda-external-task-client-js). 

NodeJS >= v10 is required

```sh
npm install -s camunda-external-task-client-js
```

Or:

```sh
yarn add camunda-external-task-client-js
```

If successful you'll see the ``node_module`` folder appear.

### Running the Microservice Workers
For each of the services open up a terminal window in the directory containing the workers run the workers with node:

```sh
node ./BookHotel.js
```
```sh
node ./FlightBooking.js
```
```sh
node ./TrainBooking.js
```

