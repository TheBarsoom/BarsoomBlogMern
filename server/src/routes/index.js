import express from "express";
import authRoute from "../routes/authR.js"

const router = express.Router();


router.use("/auth", authRoute);


export default router;