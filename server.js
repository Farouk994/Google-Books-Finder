const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://farouk:kisuule@cluster0.idbjf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser : true, useCreateindex : true,useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo Database has been connected");
});

app.get("/",(req,res)=>{
    res.send("Welcome to Queens");
});

app.listen(PORT,()=>{
    console.log("Listening to PORT " + PORT);
});


