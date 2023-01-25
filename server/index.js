import express from "express";
import dbConnect from "./src/config/dbConfig.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import fileUpload from "express-fileupload";
import routes from"./src/routes/index.js";

mongoose.set("strictQuery", true);
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.static("uploads"))
app.use(express.urlencoded({extended: true}))

//Routes
app.use("/api/v1", routes);


;(async function server() {
  try {
    dbConnect();
    app.listen(process.env.PORT || 7000, () => {
      console.log(`Server is running on Port #${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`server Error ${error}`);
  }
})();
