const express = require("express");
const { connection } = require("./db");
require('dotenv').config();
const cors = require("cors");
const { userRoute } = require("./Routes/user.route");
const { doctorRoute } = require("./Routes/doctor.route");


const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoute);
app.use("/", doctorRoute);




app.listen(process.env.PORT || 3000 , async() => {
   try{

    await connection;
    console.log("Connected to the DB");
    console.log(`Running at ${process.env.PORT} port`);

   }catch(err){
    console.log(err);
   }
})