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

# Code Organization

# Testing

# Future Considerations







