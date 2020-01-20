const express=require("express");
const router=express.Router();
const {user}=require("../controllers");
router.put("/",user.createOrUpdateUser);
module.exports=router;