const mongoose = require('mongoose')
const Schema = mongoose.Schema
let charactersSchema = require('./charactersModel')

const houseSchema = new Schema({
  id: String,
  name: String,
  mascot: String,
  headOfHouse: String,
  houseGhost: String,
  founder: String,
  __v: Number,
  school: String,
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  }],
  values: Array,
  colors: Array
})


let housesModel = mongoose.model('House', houseSchema)
module.exports = housesModel