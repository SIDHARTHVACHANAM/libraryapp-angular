const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Labraryapp');
const Schema = mongoose.Schema;

var NewLabrarySchema = new Schema({
      name : String,
      born : Number,
      genre : String,
    imageUrl : String
});

var Labrarydata = mongoose.model('author', NewLabrarySchema);                        //UserData is the model and NewBookData is the schema

module.exports = Labrarydata;