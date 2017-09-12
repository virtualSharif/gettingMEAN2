# Final Project 

-------------------------------------------------------------
MEAN - MongoDB, Express, Angular, Node

Added ng-app(HelloWorld app) with backend express app

## Step 1: Install the packages which are required by backend app and frontend app
    npm install && npm --prefix ./ng-app install ./ng-app

## Step 2: Start the server (starts the server with the frontend and backend)
    npm start

## Step 3: Output
    goto browser: http://localhost:19991  for required
    goto http://localhost:19991/api/users for RESTful webservices responses    

![Alt text](./screenshots/screenshot1.png?raw=true "Optional Title")

Hurray!

NOTE: 
    npm start is the npm script which is added in the package.json file. 
    Internally following things happen:
    a. moves to the directory 'ng-app'
    b. npm install : which install all the dependency for angular app
    c. ng build: this command builds the project and dist directory is created which is used as public directory in express app.


-------------------------------------------------------------
    
