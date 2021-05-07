# react-blog
A simple blog created with react. [Json Server](https://www.npmjs.com/package/json-server) from NPM is used as the backend server.
<hr />

## Running the App

### Starting the JSON Server
The data for Json Server will be available in `data/posts.json`. The JSON Server automatically creates CRUD APIs (GET, PUT, POST, DELETE) for the entities available in the JSON file.

```json-server --watch data/posts.json --port 8000```



### Starting the React App
The below command starts the react application in port 3000 by default. 

`npm run start`

To override the port set `env:PORT`.

`PORT=8081 npm run start`
<hr />

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)