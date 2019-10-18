'use strict';
const Express = require('express')
const Port = process.env.port || 5000;
const BodyParser = require("body-parser");
const Mongoose = require("mongoose");
const App = Express();
const cors = require('cors');

require('dotenv').config()

// Connect to mongoose database
Mongoose.connect(process.env.DB_Connect,{ useNewUrlParser: true ,useUnifiedTopology: true})
.then((success)=>{
	console.log('Db connected successfully')
})
.catch(e=>{
	console.log('Problem while connecting to DB')
})

// Middlewares
App.use(cors());
App.use(BodyParser.urlencoded ({
    extended: false
}));
App.use(BodyParser.json());

// Use API routes in the app
require('./routes')(App)

// Start the Server
App.listen(Port, ()=>{
	console.log(`surver running on port ${Port}`)
})

module.exports = {
	App
}