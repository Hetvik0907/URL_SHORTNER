import express from "express";
const app = express();
import {nanoid} from "nanoid";
import connectDb from "./src/config/mongo.config.js";
import ShortUrl from "./src/models/shorturl.models.js";
import router from "./src/routes/shorturl.routes.js";
import dotenv from 'dotenv';
import { redirectfromshorturl } from "./src/controller/shorturl.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";

dotenv.config("./.env");

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/:shorturl",redirectfromshorturl)
app.use("/api/create",router);
app.use(errorHandler)

app.listen(3000,()=>{
  connectDb();
  console.log("server is running on port 3000")
})