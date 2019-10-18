'use strict'

const Router = require("express").Router();
const LogoutCtrl = require('../app/database/controllers/user');
const UserCtrl = require('../app/database/controllers/user')


Router.route('/logout/:id')
    .get(async (req, res)=> {
        const response = await UserCtrl.updateUserProfile(req.params.id, {'is_login':0})
        res.send("logged out succesfully")      
    })


module.exports = Router


