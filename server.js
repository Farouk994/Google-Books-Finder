const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const Book = require("./backend/models/bookModel");
console.log(Book)

const booksRouter = require("./routes/bookRoutes");


const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

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


app.get('/add',(req,res) =>{
    const book = new Book({
        title : 'Subtle Ways of not giving a fuck'
    });
    console.log(book)
    book.save()
     .then(result => {
         res.send(result);
     })
     .catch(err=>{
         console.log('Err '+ err);
     });
});

app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});
