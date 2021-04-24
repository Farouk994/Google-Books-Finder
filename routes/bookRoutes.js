// const express = require("express");
// const router = express.Router()
// const Books = require("../backend/models/bookModel");

// router.get('/books',(req,res)=>{
//     Books.find()
//        .then(books => res.json(books))
//        .catch(err => res.status(400).json("Error " + err))
// });

// router.route("/add").post((req,res)=>{
//     const newBook =  req.body.newBook
    
//     const newBooks = new Books({newBook});
//     console.log(newBook);
    
//     newBooks.save()
//         .then(()=> res.json('New Book Added'))
//         .catch(err => res.status(400).json('Err ' + err))
// });

// module.exports = router;