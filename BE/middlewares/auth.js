const { user } = require("../models");
module.exports= function auth() {
  return async function (req, res, next) {
    let us = await user.findOne({ githubHandle: req.headers.handle });
    if (us) next();
    else res.json({ success: false, error: 'You are not authenticated for the operation' });
  }
}