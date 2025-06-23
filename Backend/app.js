import express from "express";
const app = express();
import {nanoid} from "nanoid";
import connectDb from "./src/config/mongo.config.js";
import ShortUrl from "./src/models/shorturl.models.js";
import dotenv from 'dotenv';

dotenv.config("./.env");

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get("/:shorturl", async (req, res) => {
  const shorturl = req.params.shorturl;
  const url = await ShortUrl.findOne({ shortUrl: shorturl });
  if (url) {
      res.redirect(url.longUrl);
    } else {
      res.status(404).send("Not found");
    }
});

app.post("/api/create",(req,res)=>{
  const {url} = req.body;
  const shorturl = nanoid(7);
  ShortUrl.create({
    longUrl:url,
    shortUrl:shorturl
  })
  res.send("submited data");
});

app.listen(5000,()=>{
  connectDb();
  console.log("server is running on port 5000")
})