import { Schema, model } from "mongoose";
const PostSchema = new Schema({
  user_id: {
    type: Number,
  },
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  body: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = model("Post", PostSchema);

// This is Compound Index
PostSchema.index({user_id: 1, title: 1}) // 1 means ascending order

// This is Normal Index 
// PostSchema.index({user_id: 1}) 

export { Post };

// index is using B Tree internally, which have sorted order