import express from "express";
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import connectDB from "./src/config/monogo.config.js"
import short_url from "./src/routes/short_url.route.js"
import user_routes from "./src/routes/user.routes.js"
import auth_routes from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cors from "cors"
import { attachUser } from "./src/utils/attachuser.js";
import cookieParser from "cookie-parser"

dotenv.config("./.env")

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://url-shortner-1-pwka.onrender.com"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use(attachUser)

app.use("/api/user",user_routes)
app.use("/api/auth",auth_routes)
app.use("/api/create",short_url)
app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000,()=>{
    connectDB()
    console.log("Server is running on http://localhost:3000");
})
