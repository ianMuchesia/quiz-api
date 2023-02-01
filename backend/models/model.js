import mongoose from "mongoose";

const Post = new mongoose.Schema(
        
        [{
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
            },
            tags:[],
            type:String,
            regions:[],
            isNiche:Boolean,
            date:{
                type:Date,
                default:Date.now()
              }
      }], 
      
      

 
   
  
);

const PostSchema = mongoose.model("Post", Post);

export default PostSchema;
