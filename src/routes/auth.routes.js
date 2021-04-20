import express from "express";
const router = express.Router();

// Only Google
router.post('/signinup', (req, res) => {
    res.send("signinup")
})

router.post('/signup', (req, res) => {
    res.send("signup")
})

router.post('/signin', (req, res) => {
    res.send("signin")
})


export default router