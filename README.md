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

To add an action, make a POST request to http://localhost:3000/addAction with the POST body in the format of {"action":"<action>", "time":<time>}.
Content-Type MUST BE application/json. As the assignment specified a JSON serialized string, we assumed application/json was acceptable as the content type. 


To get stats, make a GET request to http::/localhost:3000/getStats

# Code Organization
Other than the usual NodeJS and Typescript configuration at the root of the project directory, code is organized as follows in actionLibrary/src
1. index.ts - creates the app, configures routes, starts the server.
2. route.ts - stores the array of routes. Each route has a type (GET, POST, etc), the path of the API, the controller, and the action to use from the controller.
3. controller/ActionController.ts - this file/class holds the functions/actions that is called by index.ts given by the routes. 
4. library/ActionLibrary.ts - holds the functions requested. 

The code was organized in this way to facilitate testing and concurrency. NodeJS usually acts as a web server, so using the basic framework of index,routes,controller made sense to create the project that will use the library. We also make use of the async/await functionalty of NodeJS to make use of NodeJS's concurrency properties. 

# Testing
Testing was done by calling the APIs appropriately as described above in Intended Uses. We used Apache Jmeter (https://jmeter.apache.org/) to perform testing as it provides a good concurrency testing functionality. In the <root project directory>/testing folder, there is a testPlan.jmx that can be loaded into Apache Jmeter. In this test, three separate 'users' at the same time post to the addAction API. These users post the sample strings given in the assignment writeup. This tests the addAction function as well as its concurrency functionalty. 1 second after these users have completed, then we have three users at the same time call the getStats API. This tests the getStats functionality can have concurrent calls. We delay so as to have the posting finished so we can check that the data is consistent across the three getting users. 

After running in Jmeter, verify in the View Results tree all `Test addAction` have a response code of 200 and response data of `Successful add`. Verify that the `Test getStats` view result tree has three successful items and all three have response code of 200 and all three have response data equal to the one given in the assignment other than order. 

In addition to the test plan outlined above, we created a testPlan_error.jmx test plan to showcase common errors with the posting:
1. `Test wrong content type`: application/json not given as Content-Type. In the view results tree, it should have a response code of 400 and response data of ""Error occurred parsing post body"
2. `Test bad post format`: The POST body data is in the wrong format. In the view results tree, it should have a response code of 400 and response data of ""Error occurred parsing post body"
3. `Test no path given`: The path given is not /addAction or /getStats. In the view results tree, it should have a response code of 404 and response data of an HTML page saying the given path is not found. 

This can also be loaded into Apache Jmeter for error testing. Both plans allow for further testing items to be added. 


# Future Considerations
Some future considerations for this work:
1. Add a database backbone to store actions and averages. This way the ActionLibrary can also be made into a normal class and not a static class. 
2. Add more functionality to the ActionLibrary, such as reset average, getTotals, get number, etc. 
3. Add more error code types or a custom error class to the addAction piece. 
4. Configure the environment (port, url, etc.) to run in a chosen production environment. 
5. Expand POST addAction to accept text in the right format also. As the assignment specified a JSON serialized string, we assumed application/json was acceptable as the content type. 
6. Caching for getStats







