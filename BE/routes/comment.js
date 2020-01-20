const express=require("express");
const router=express.Router();
const {comment} =require("../controllers");

router.get("/:topicId",comment.getComments);
router.put("/",comment.createOrUpdateComments);

module.exports=router;