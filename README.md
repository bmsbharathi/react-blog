# react-blog
A simple blog created with react. [Json Server](https://www.npmjs.com/package/json-server) from npm is used as the backend server. The data for Json Server will be available in `data/posts.json`.

<hr />

## Running the App

### Install the JSON Server

To install the Json Server from npm

```npm install -g json-server```

### Starting the JSON Server

The JSON Server automatically creates CRUD APIs (GET, PUT, POST, DELETE) for the entities available in the JSON file.

```json-server --watch data/posts.json --port 8000```

`Note:` If you don't want to load the inital data in the application. you can add/remove it from `posts.json`

### Starting the React App
The below command starts the react application in port 3000 by default. 

`npm run start`

To override the port set `env:PORT`

`PORT=8081 npm run start`
<hr />

Created with my learnings from this [Youtube tutorial](https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d). This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)