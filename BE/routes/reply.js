const express=require("express");
const router=express.Router();
const {reply}=require("../controllers");
router.get("/:commentId",reply.getReplies);
router.put("/",reply.createOrUpdateReply);

module.exports=router;