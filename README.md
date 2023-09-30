# To Do website - Full Stack project - part 1/2 Back End

Providing CRUD (create, read, update, delete) functionality via API calls to Mongo Database which the Front End [(part 2/2)](https://github.com/mbborromeo/todoapp-fullstack-frontend) of this project calls.

# Project created with

Node.js

# System Dependencies

Express.js v4.18.2\
MongoDB\
Mongoose v7.3.2 (library for MongoDB)\
Morgan v1.10.0\
Nodemon v3.0.1\
Node v16.17.1\
NPM v8.15.0\
Dotenv v16.3.1\
Cors v2.8.5\

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

You will need your own .env file in the root folder, and define a number for PORT=,
or the server will default to
[http://localhost:8080](http://localhost:8080).

Also in the .env file, you will need to define a database password in DB_PASS=. To get the MongoDB connection string used in database/conn.js, go to Database > select cluster > Connect from:
[https://cloud.mongodb.com](https://cloud.mongodb.com)

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Running Linters

Check ES syntax, Node.js code, and report/fix bugs.

### `npm run lint`

Will report and auto-fix issues

### `npm run lint:check`

Will report issues without auto-fixing
