const Mongoose = require('mongoose')

const userSchema = new Mongoose.Schema({
	name: {
		type : String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	device_token: {
		type: String
	},
	device_type: {
		type: String
	},
	is_login: {
		type: Number
	}

})

const user = Mongoose.model('user', userSchema)
module.exports = user