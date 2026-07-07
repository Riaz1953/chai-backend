import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dns from "node:dns";
import dotenv from "dotenv";
import connectDb from "./db/index.js";
import connectDB from "./db/index.js";
import { error } from "node:console";
dotenv.config({
  path: "./.env",
});
dns.setServers(["1.1.1.1", "1.0.0.1"]);
const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB Connection Failed", error);
  });

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
