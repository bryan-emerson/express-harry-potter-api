const mongoose = require('mongoose')
const Schema = mongoose.Schema


const charactersSchema = new Schema({
  _id: String,
    name: String,
    role: String,
    house: String,
    school: String,
    __v: Number,
    ministryOfMagic: Boolean,
    orderOfThePhoenix: Boolean,
    dumbledoresArmy: Boolean,
    deathEater: Boolean,
    bloodStatus: String,
    species: String
})

let charactersModel = mongoose.model('Character', charactersSchema)
module.exports = charactersModel