'use strict'

const Router = require("express").Router();
const UserCtrl = require('../app/database/controllers/user');


Router.route('/user')
    .post(async function (req, res) {
        try {
            let response = await UserCtrl.createUserProfile(req.body);
            res.json(response);
        
        } catch (err) {
            console.log("Error in /user post", err)
            res.status(400).json({ "message": "Problem in creating user or the email/username already exists." })
            
        }
    })

    .get(async (req, res) => {
        try {
            const allData = await UserCtrl.getAllUserProfile()
            res.json(allData);

        } catch (err) {
            console.log("Error in /user get", err)
            res.status(400).json({ "message": "Problem in fetching user." })
        }
    })

///-----------Profile Update API and Get Any User Profile By Id---------///

Router.route('/user/:id')
    .get(async(req, res) =>{
        try {
            const response = await UserCtrl.getUserProfile(req.params.id)
            if (response.is_login)
                res.json(response);
            else
                res.send('please login')

        } catch(err) {
            console.log("Error in /user/:id get", err)
            res.status(400).json({ "message": "Problem in fetching User Profile By Id." })
        }
    })

    .put(async (req, res) => {
        try {
            const response = await UserCtrl.updateUserProfile(req.params.id, req.body)
            res.json(response);

        } catch (err) {
            console.log("Error in /user/:id put", err)
            res.status(400).json({ "message": "Problem in updating User Profile By Id." })
        }
    })



module.exports = Router


