const {user}=require("../models");
module.exports={
  async createOrUpdateUser(req,res){
    try{
      let us=await user.findOneAndUpdate({githubHandle:req.body.githubHandle},req.body,{upsert:true,new: true});
      res.json({
        success:true,
        us
      });
    }
    catch(err){
      console.error("Error in creating or updating user ",err);
      res.json({
        success:false,
        error:err
      });
    }
  }
}