const mongoose = require("mongoose");
const { reply, comment } = require("../models");
module.exports = {
  async getReplies(req, res) {
    try {
      let replies = await reply.aggregate([
        {
          $match: {
            commentId: mongoose.Types.ObjectId(req.params.commentId)
          }
        },
        {
          $group: {
            _id: "$level",
            count: { $sum: 1 },
            data: { $push: "$$ROOT" }
          }
        },
        { $sort: { _id:1 }}
      ]
      );
      res.json({
        success: true,
        replies
      })
    }
    catch (err) {
      console.log("Error in fetching replies ", err);
      res.json({
        success: false,
        error: err
      })
    }
  },
  async createOrUpdateReply(req, res) {
    try {
      let id = req.body._id;
      if (!id) {
        id = new mongoose.mongo.ObjectID();
      }
      else delete req.body._id;
      if (req.body.replyId) {
        let parentReply = await reply.findOne({ _id: req.body.replyId });
        req.body.level = parentReply.level + 1;
      }
      let rp = await reply.findOneAndUpdate({ _id: id }, req.body, { upsert: true, new: true, setDefaultsOnInsert: true });
      await comment.findOneAndUpdate({ _id: req.body.commentId }, { $inc: { replyCount: 1 } })
      res.json({
        success: true,
        reply: rp
      })
    }
    catch (err) {
      console.log("Error in creating or updating reply ", err);
      res.json({
        success: false,
        error: err
      })
    }
  }
}