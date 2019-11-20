# actionLibrary
This is a Nodejs project with the basic backbone of an action library class/API. Currently the API has two functions:
1. addAction return error - function accepts a serialized string of the format {"action":"<action>", "time":<time>} and maintains the average time.
2. getStats() return string - Returns the serialized json array of the average time for each action. 

This api is included in a basic NodeJS express application, and by calling the appropriate API the library/API can be used. 

# Installation and Setup
This code/API requires the use of NodeJS, specifically NodeJS with Typescript. To install this project:
Assumptions of machine running code:
1. Ubuntu 16.04

Installation instruction:
1. `curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -`
2. `sudo apt-get install -y nodejs`
3. `git clone https://github.com/TiffanyKalin/actionLibrary.git` (or ssh version)
4. `cd <project directory>`
5. `npm install`

# Intended Uses
After successful installation as described above, to run the code:

`npm start`

And this will start the server. 

To add an action, make a POST request to http://localhost:3000/addAction with the POST body in the format of {"action":"<action>", "time":<time>}

To get stats, make a GET request to http::/localhost:3000/getStats

# Code Organization
Other than the usual NodeJS and Typescript configuration at the root of the project directory, code is organized as follows in actionLibrary/src
1. index.ts - creates the app, configures routes, starts the server.
2. route.ts - stores the array of routes. Each route has a type (GET, POST, etc), the path of the API, the controller, and the action to use from the controller.
3. controller/ActionController.ts - this file/class holds the functions/actions that is called by index.ts given by the routes. 
4. library/ActionLibrary.ts - holds the functions requested. 

The code was organized in this way to facilitate testing and concurrency. NodeJS usually acts as a web server, so using the basic framework of index,routes,controller made sense to create the project that will use the library. We also make use of the async/await functionalty of NodeJS to make use of NodeJS's concurrency properties. 

# Testing
Testing was done by calling the APIs appropriately as described above in Intended Uses. We used Postman to accomplish manual testing, the collections used are in <project directory root>/testing. By importing these collections into Postman, you can test the APIs. 

# Future Considerations
Some future considerations for this work:
1. Add a database backbone to store actions and averages. This way the ActionLibrary can also be made into a normal class and not a static class. 
2. Add more functionality to the ActionLibrary, such as reset average, getTotals, get number, etc. 
3. Add more error code types or a custom error class to the addAction piece. 
4. Configure the environment (port, url, etc.) to run in a chosen production environment. 







