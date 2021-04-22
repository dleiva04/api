import express from "express";
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword"
import Session from "supertokens-node/recipe/session"
import User from "../models/User";


const signUp = async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        await ThirdPartyEmailPassword
            .signUp(email, password)
            .then(u => {
                new User({
                    _id: u.id,
                    fullName,
                    email: u.email,
                }).save().then(doc => {
                    Session
                        .createNewSession(res, u.id)
                        .then(token => {
                            console.log(token)
                            res.json(doc)
                        })
                })
            })
    } catch (err) {
        res.status(500).json(err)
    }
}

const signIn = (req, res) => {
    const { email, password } = req.body
    try {
        ThirdPartyEmailPassword
            .signIn(email, password)
            .then(u => {
                console.log(u)
                res.json(u)
            }).catch(e => {
                res.status(500).json(e)
            })
    } catch (error) {
        res.status(500).json(error)
    }
}

const logout = (req, res) => {

}
const signInUp = (req, res) => {

}

const me = (req, res) => {
    let userId = req.session.getUserId();
    console.log(userId)

}

export default { signUp, signIn, logout, signInUp, me }