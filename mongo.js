const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const url = process.env.MONGODB_URI;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const tutorialSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Tutorial = mongoose.model('Tutorial', tutorialSchema)

const tutorial = new Tutorial({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

tutorial.save().then(result => {
  console.log('person saved!')
  mongoose.connection.close()
})


Tutorial.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})

