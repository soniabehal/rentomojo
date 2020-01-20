const mongoose=require("mongoose");
const commentSchema=new mongoose.Schema({
  topicId:{
    type:String
  },
  description:{
    type:String
  },
  replyCount:{
    type:Number,
    default: 0
  },
  createdBy:{
    type:mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  }
},{timestamps: true})

module.exports=mongoose.model("Comment",commentSchema);