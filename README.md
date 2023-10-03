# To Do website - Full Stack project - part 1/2 Back End

Providing CRUD (create, read, update, delete) functionality via REST API calls which the Front End [(part 2/2)](https://github.com/mbborromeo/todoapp-fullstack-frontend) of this project makes, which therein call the corresponding functions on the Mongo Database.

# Node.js Back End

This project was built with Node.js, MongoDB and Express.

# System Dependencies

Node v16.17.1\
NPM v8.15.0\
MongoDB v6.0.10

You will need your own .env file in the root folder, and define the following:\
PORT=\
DB_PASS=\
DB_HOST=\
DB_USER=\
so that it corresponds to the correct backend API call to your MongoDB database,
eg. ="mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority"

To get the MongoDB connection string used in database/conn.js, go to Database > select cluster > Connect from:
[https://cloud.mongodb.com](https://cloud.mongodb.com)

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install the project and system dependencies.

### `npm start`

Runs the app in the development mode.

If PORT not specified in .env file, server will default to [http://localhost:8080](http://localhost:8080)).

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Running Linters

Check ES syntax, Node.js code, and report/fix bugs.

### `npm run lint`

Will report and auto-fix issues

### `npm run lint:check`

Will report issues without auto-fixing

## Prettier Format Checker

Check code format such as single-quotes, comma-dangle, indentation, etc.

### `npm run format`

Will check format and auto-fix issues

### `npm run format:check`

Will check format without auto-fixing
