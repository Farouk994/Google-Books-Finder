const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
mongoose.set('useCreateIndex', true);
const cors = require("cors");
const app = express();

const Book = require("./backend/models/bookModel");
console.log(Book);

const booksRouter = require("./routes/bookRoutes");

const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const uri =
  "mongodb+srv://farouk:kisuule@cluster0.idbjf.mongodb.net/Google-Books-Finder?retryWrites=true&w=majority";
// process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateindex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo Database has been connected");
});

app.get("/books",(req,res)=>{
  Book.find()
     .then(books => {
       res.json(books)
     })
     .catch(err=>{
       res.status(400).json('Error ' + err)
     })
})

app.get('/book',(req,res)=>{
  Book.findById("60838043e244aa5eec8114e0")
    .then((result)=>{
      res.json(result)
    })
    .then(err=>{
      res.status(400).json(err)
    })
})

app.post("/add", (req, res) => {
  console.log(req.body);
  const newBook = new Book(req.body);
  newBook.save()
     .then(result=>{
       res.json(result)
     })
     .catch(err=>{
       res.status(400).json('Err ' + err)
     })
});

app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});
