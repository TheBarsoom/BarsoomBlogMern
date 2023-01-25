// import { Router } from 'express'
// const router = new Router()
import express from "express";

import { getMe, login, register } from "../controllers/auth.js";
import { authMid } from "../middlewares/authMid.js";

const router = express.Router({ mergeParams: true });
// Register
// http://localhost:6000/api/v1/auth/register
router.post('/register', register)

// Login
// http://localhost:6000/api/v1/auth/login
router.post('/login', login)


// Get Me
//http://localhost:6000/api/v1/auth/me
router.get('/me', authMid, getMe)

export default router