require("dotenv").config();
const bodyParser=require("body-parser");
const cors=require("cors");
const app=require("express")();
const auth=require("./middlewares/auth")();
require("./config/db").connect();
const routes=require("./routes");
app.use(bodyParser.json());
app.use(cors());
app.use("/",auth,routes);
const PORT=process.env.PORT || 3000;
  app.listen(PORT,(err)=>{
  if(err) console.log("error starting server");
  else console.log("server started successfully at port :",PORT);
});