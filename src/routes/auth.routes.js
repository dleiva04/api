import express from "express";
import Session from "supertokens-node/recipe/session"
import authController from "../controllers/auth.controller"
const router = express.Router();

// Only Google
router.post('/signInUp', authController.signInUp)

// Register new user
router.post('/signup', authController.signUp)

// Login user
router.post('/signin', authController.signIn)

// Logout session
router.post('/logout', authController.logout)

// Get user information
router.get('/me', authController.me)

export default router