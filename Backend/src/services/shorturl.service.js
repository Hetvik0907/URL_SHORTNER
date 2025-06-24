import { generatenanoid } from "../utils/helper.js";
import ShortUrl from "../models/shorturl.models.js";
import { saveshorturl } from "../dao/shorturl.js";

export const createshorturlwithoutuserservice = async (url) =>{
  const shorturl = generatenanoid(7);
  if(!shorturl) throw new Error ("Short url not generated")
  await  saveshorturl(url,shorturl)
  return shorturl
}

export const createshorturlwithuserservice = async (url,userid) =>{
  const shorturl = generatenanoid(7);
  await  saveshorturl(url,shorturl,userid);
  return shorturl
}