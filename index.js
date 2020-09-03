require('dotenv').config()

var express = require('express');
var app = express();
var morgan = require('morgan');

const Tutorial = require('./models/tutorial')

const cors = require('cors')
app.use(cors())


morgan.token('id', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :id '))

app.use(express.static('./client/build'))
app.use(express.json());

app.get('/api/tutorials', (request, response) => {
    Tutorial.find({}).then(tutorials => {
    response.send(tutorials)
})
    })

app.get('/api/tutorials/:id', (request, response) => {
Tutorial.findById(request.params.id)
.then(tutorial => {
    if(tutorial)
    {
      response.send(tutorial)
    } else {
      response.send('Contact is not found!').end
    }
})
    .catch(error => {
      next(error)
    })
})

app.post('/api/tutorials', (request, response) => {
const body = request.body
  if (body.name == "" || body.number == "") {
    return response.send(`Either name or number of the contact is missing!`)
  }

  const tutorial = new Tutorial({
    name: body.name,
    number: body.number,
  })

    tutorial.save().then(savedTutorial => {
    response.send(`Contact ${body.name} has been added!`)
  })
})


app.delete('/api/tutorials/:id', (request, response) => {
    Tutorial.findByIdAndRemove(request.params.id)
    .then(tutorial => {
      response.send(`Contact ${tutorial.name} has been deleted!`).end
    })
    .catch(error => next(error))
})

app.put('/api/tutorials/:id', (request, response, next) => {

  const body = request.body
  const tutorial = {
    name: body.name,
    number: body.number,
  }
  Tutorial.findByIdAndUpdate(request.params.id, tutorial, { new: true })
    .then(updatedTutorial => {
      response.send(`Contact ${body.name} has been updated!`)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

//========================================