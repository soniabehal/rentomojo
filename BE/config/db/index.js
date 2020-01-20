const mongoose=require("mongoose");
const env=require("dotenv");
module.exports={
  async connect(){
    try {
      await mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useFindAndModify: false });
      console.log("connection to DB successfull")
    } catch (error) {
      console.log("Error connecting to DB ",error);
    }
  }
}