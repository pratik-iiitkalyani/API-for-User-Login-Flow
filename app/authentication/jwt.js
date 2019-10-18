'use strict'

const Jwt = require('jsonwebtoken');
const config = require('config');

//creates a jwt token 
async function createToken(payload) {
    return new Promise((resolve, reject) => {
        try{
            const token = Jwt.sign(payload, process.env.TOKEN_SECRET)
            resolve(token)
        } catch(err){
            reject(err)
        }
    })
}

// verify if jwt token is valid or not
async function verifyToken(token, expiration=false) {
    return new Promise((resolve, reject) => {
        try{
            const verifyToken = Jwt.verify(token, process.env.TOKEN_SECRET)
            resolve(verifyToken)
        } catch(err) {
            reject(err)
        }

    })
}

module.exports = {
    createToken,
    verifyToken
}