// import mongoose from 'mongoose';

// const ShortUrlSchema = new mongoose.Schema({
//   longUrl: {
//     type: String,
//     required: true,
//   },
//   shortUrl: {
//     type: String,
//     required: true,
//     index:true,
//     unique:true,
//   },
//   clicks: {
//     type: Number,
//     required: true,
//     default: 0,
//   },
//   user:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"User",
//   }
// });

// const ShortUrl = mongoose.model('ShortUrl', ShortUrlSchema);
// export default ShortUrl;
import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({

  full_url: {
    type: String,
    required: true,
  },
  short_url: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }
});

const shortUrl = mongoose.model("shortUrl", shortUrlSchema);

export default shortUrl;