require('./connection.js')
let mongoose = require('mongoose')

let housesJson = require('../houses.json')
let housesModel = require('./housesModel.js')

let charactersJson = require('../characters.json')
let charactersModel = require('./housesModel.js')


// housesModel
//   .deleteMany({})
//   .then(()=> housesModel.create(housesJson))
//   .then(mongoose.disconnect)
//   .then(()=> console.log('done!'))




  // require('./database')
  // let mongoose = require('mongoose')
  // let characterModel = require('./character/model')
  // let characterData = require('./db/characters.json')
  // let houseModel = require('./house/model')
  // let houseData = require('./db/houses.json')

  // console.log(characterData.length)
  charactersModel.deleteMany({}).then(resp=>{
    charactersModel.create(charactersJson)
    .then(characters=>{
      console.log(characters.length, "created")
    })
  })

  housesModel.deleteMany({}).then(resp=>{
    console.log(resp)
    housesModel.create(housesJson).then(houses=>{
      console.log(houses.length, "created")
      houses.forEach(getHouseWithCharacters)
    })
  })

  function getHouseWithCharacters(house){
    console.log('\n\n\n\n',house)
    const id = house._id
    return housesModel.findById(id).populate('members').exec((err, member) => {
        //console.log("Populated Characters " + member);
      })
  }