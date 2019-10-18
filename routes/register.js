'use restrict';
const Router = require("express").Router();
const UserCtrl = require('../app/database/controllers/user')
const Bcrypt = require('../app/authentication/bcrypt')
const { registerValidation } = require('../app/authentication/validation')

Router.route('/register')
    .post(async (req, res) => {
        try {
            // validate the data
            const {error} = registerValidation(req.body)
            if (error)
                return await res.status(400).send(error.details[0].message)

            // checking user is already in database
            const emailExist = await UserCtrl.getAllUserProfile({ 'email': req.body.email })
            if (emailExist.length != 0)
                return await res.status(400).send("email already exist in database")

            let userData = req.body;
            userData.password = await Bcrypt.encryptData(userData.password)
            let response = await UserCtrl.createUserProfile(userData);
            res.json("User created successfully")

        } catch (err) {
            console.log("Error in /register post", err)
            res.status(400).json({ "message": "Problem in creating user or the email/username already exists." })

        }
    })

module.exports = Router