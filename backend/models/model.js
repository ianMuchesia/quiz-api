import mongoose from "mongoose";
import shuffle from "../trial.js";
const Post = new mongoose.Schema({
  date: {
    type: Date,
    deafaut: Date.now(),
  },
  questions: 
    {
      category: {
        type: String,
        required: false,
      },
      region: {
        type: String,
        required: false,
      },
      difficulty: {
        type: String,
        required: false,
      },

      id: {
        type: String,
        required: true,
      },
      incorrectAnswers: [String | Number],
      question: {
        type: String,
        required: true,
      },
      correctAnswer:{
        type: String,
        required: true,
      }
    },
  
});

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
