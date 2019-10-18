// Validation
const Joi = require('@hapi/joi')

// Register Validation
function registerValidation(data) {
	const schema = {
    	name: Joi.string()
    		.min(6)
    		.required(),
    	email: Joi.string()
    		.min(6)
    		.required()
    		.email(),
    	password: Joi.string()
    		.min(6)
    		.required()
	}
	
	// validate the data
	return Joi.validate(data, schema)
}

// Login Validation
function loginValidation(data) {
	const schema = {
    	email: Joi.string()
    		.min(6)
    		.required()
    		.email(),
    	password: Joi.string()
    		.min(6)
    		.required()
	}
	
	// validate the data
	return Joi.validate(data, schema)
}

module.exports = {
	registerValidation,
	loginValidation
}