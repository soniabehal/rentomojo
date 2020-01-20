const mongoose=require("mongoose");
const userSchema= mongoose.Schema({
  name:{
    type:String
  },
  githubHandle:{
    type:String
  },
  rating:{
    type:Number,
    default:0
  }
},{timestamps: true})

module.exports=mongoose.model("User",userSchema);