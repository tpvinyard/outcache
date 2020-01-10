const express = require('express')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const multer = require('multer')
const fs = require('fs')

const app = express();



const itemSchema = new Schema({
  itemName: { type: String, required: true},
  category: { type: String, required: true},
  price: { type: Number, required: true}, 
  img: String,
  userId: { type: String, required: true},
  userName:{ type: String, required: true},
  description: String 
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;