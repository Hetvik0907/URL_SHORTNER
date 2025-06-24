import express from "express";
import { createshorturl } from "../controller/shorturl.controller.js";
const router = express.Router();

router.post("/",createshorturl);

export default router;