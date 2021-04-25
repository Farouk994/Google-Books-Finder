const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
mongoose.set("useCreateIndex", true);
const cors = require("cors");
const app = express();

// Models
const Book = require("./backend/models/bookModel");
const User = require("./backend/models/userModel");
console.log(Book);

const booksRouter = require("./routes/bookRoutes");

const PORT = process.env.PORT || 3001;

app.use(morgan());

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Mongoose Connection on Local Robo3T
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/google-books",
  {
    useNewUrlParser: true,
    useCreateindex: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo Database has been connected");
});

app.get("/books", (req, res) => {
  Book.find()
    .then((books) => {
      res.json(books);
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
});

app.get("/user", (req, res) => {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(400).json("Error " + err);
    });
});

app.post("/addUser", (req, res) => {
  console.log(req.body);
  const newUser = new User(req.body);
  newUser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json("Err " + err);
    });
});


app.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .then((err) => {
      res.status(400).json(err);
    });
});

app.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .then((err) => {
      res.status(400).json(err);
    });
});

app.post("/add", (req, res) => {
  console.log(req.body);
  const newBook = new Book(req.body);
  newBook
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json("Err " + err);
    });
});

app.listen(PORT, () => {
  console.log("Listening to PORT " + PORT);
});
