const mongoose=require("mongoose");
const replySchema=new mongoose.Schema({
  commentId:{
    type:mongoose.Schema.Types.ObjectId, 
    ref: 'Comment'
  },
  description:{
    type:String
  },
  replyId:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Reply'
  },
  level:{
    type:Number,
    default:0
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  }
},{timestamps: true})

module.exports=mongoose.model("Reply",replySchema);