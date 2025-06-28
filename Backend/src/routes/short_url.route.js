// import express from "express";
// import { createshorturl } from "../controller/shorturl.controller.js";
// const router = express.Router();

// router.post("/",createshorturl);


// export default router;
import express from 'express';
import { createShortUrl } from '../controller/short_url.controller.js';
const router = express.Router();

router.post("/",createShortUrl);

export default router;