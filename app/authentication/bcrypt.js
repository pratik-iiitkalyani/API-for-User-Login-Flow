const Bcrypt = require('bcrypt')
const saltRounds = 10

async function encryptData(myPlaintextPassword) {

	salt = await Bcrypt.genSalt(saltRounds)
	hash = await Bcrypt.hash(myPlaintextPassword, salt)
	return hash
}

async function decryptData(myPlaintextPassword, hash) {
	res = Bcrypt.compare(myPlaintextPassword, hash)
	return res
}

module.exports = {
	encryptData,
	decryptData
}