import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dns from "node:dns";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
  path: "./.env",
});
dns.setServers(["1.1.1.1", "1.0.0.1"]);
const app = express();

connectDB();

/*
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
