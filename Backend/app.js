// import express from "express";
// const app = express();
// import cors from "cors";
// import {nanoid} from "nanoid";
// import connectDb from "./src/config/mongo.config.js";
// import ShortUrl from "./src/models/shorturl.models.js";
// import router from "./src/routes/shorturl.routes.js";
// import dotenv from 'dotenv';
// import { attachuser } from "./src/utils/attachuser.js";
// import auth from "./src/routes/auth.routes.js";
// import cookieParser from 'cookie-parser';

// import { redirectfromshorturl } from "./src/controller/shorturl.controller.js";
// import { errorHandler } from "./src/utils/errorhandler.js";

// dotenv.config("./.env");

// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
// app.use(cookieParser())
// app.use(attachuser)

// app.use("/api/create",router);
// app.use("/api/auth",auth);
// app.get("/:shorturl",redirectfromshorturl)
// app.use(errorHandler)

// app.listen(3000,()=>{
//   connectDb();
//   console.log("server is running on port 3000")
// })
import express from "express";
import {nanoid} from "nanoid"
import dotenv from "dotenv"
import connectDB from "./src/config/monogo.config.js"
import short_url from "./src/routes/short_url.route.js"
import user_routes from "./src/routes/user.routes.js"
import auth_routes from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors"
import { attachUser } from "./src/utils/attachUser.js";
import cookieParser from "cookie-parser"

dotenv.config("./.env")

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // your React app
    credentials: true // 👈 this allows cookies to be sent
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
