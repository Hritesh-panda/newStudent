import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/studentRout.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 3001;
const URL = process.env.MONGOURL;

mongoose
  .connect(URL)
  .then(() => {
    console.log("Db connect success");
    app.listen(PORT, () => {
      console.log(`server conneect successfully:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api", route);
