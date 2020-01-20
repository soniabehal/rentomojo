const mongoose=require("mongoose");
const { comment } = require("../models");
module.exports = {
  async getComments(req, res) {
    try {
      let comments = await comment.find({ topicId: req.params.topicId });
      res.json({
        success: true,
        comments
      });
    }
    catch (err) {
      console.error("Error in fetching comments ", err);
      res.json({
        success: false,
        error: err
      });
    }
  },
  async createOrUpdateComments(req, res) {
    try {
      let id = req.body._id;
      if (!id) {
        id = new mongoose.mongo.ObjectID();
      }
      else delete req.body._id;
      let cmt = await comment.findOneAndUpdate({ _id: id }, req.body, { upsert: true, new: true ,setDefaultsOnInsert:true});
      res.json({
        success: true,
        comment: cmt
      });
    }
    catch (err) {
      console.error("Error in creating or updating comments ", err);
      res.json({
        success: false,
        error: err
      });
    }
  }
}