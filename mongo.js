const mongoose = require('mongoose')
require('dotenv').config()

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const url = process.env.MONGODB_URI;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const tutorialSchema = new mongoose.Schema({
title: String,
content: String,
date: String,
published: Boolean,
})

const Tutorial = mongoose.model('Tutorial', tutorialSchema)

const tutorial = new Tutorial({
title: 'Introduction to API',
content: 'blah blah blag',
date: new Date(),
published: true,
})

tutorial.save().then(result => {
  console.log('tutorial saved!')
  mongoose.connection.close()
})


Tutorial.find({}).then(result => {
  result.forEach(tutorial => {
  })
  mongoose.connection.close()
})

