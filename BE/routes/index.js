const express=require("express");
const comment=require("./comment");
const user=require("./user");
const reply=require("./reply");
const router=express.Router();
router.use("/comment",comment);
router.use("/user",user);
router.use("/reply",reply);
module.exports=router;