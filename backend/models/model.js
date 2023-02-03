import mongoose from "mongoose";

const Post = new mongoose.Schema({
  question: [],
  date: {
    type: Date,
    default: Date.now(),
  },
  category:{
    type:String,
    required:true,
  }
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
