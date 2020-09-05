require('dotenv').config()

var express = require('express');
var app = express();
var morgan = require('morgan');

const Tutorial = require('./models/tutorial')

const cors = require('cors');
app.use(cors())


morgan.token('id', function (req, res) { return JSON.stringify(req.body) });
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :id '))

app.use(express.static('./client/build'))
app.use(express.json());

app.get('/api/tutorials', (request, response) => {
    const { title } = request.query;
    Tutorial.find({}).then(tutorials => {
    if(title){
    let array = tutorials.filter(tutorial => tutorial.title.toUpperCase().includes(title.toUpperCase()))
    response.json(array)
    } else {
    response.json(tutorials)
    }
})
    })

app.get('/api/tutorials/published', (request, response, next) => {
    Tutorial.find({published: true}).then(tutorials => {
    response.json(tutorials)
    })
    .catch(error => {
      next(error)
    })
})

app.get('/api/tutorials/:id', (request, response, next) => {
Tutorial.findById(request.params.id)
.then(tutorial => {
    if(tutorial)
    {
      response.json(tutorial)
    } else {
      response.status(404).end();
    }
})
    .catch(error => {
      next(error)
    })
})

app.post('/api/tutorials', (request, response) => {
const body = request.body
const date = new Date();
date.setHours(date.getHours() + 3);
  const tutorial = new Tutorial({
    title: body.title,
    content: body.content,
    date: date.toISOString().substr(0, 19).replace('T', ', '),
    published: false,
  })

    tutorial.save().then(savedTutorial => {
    response.json(tutorial)
  })
})


app.delete('/api/tutorials/:id', (request, response, next) => {
    Tutorial.findByIdAndRemove(request.params.id)
    .then(tutorial => {
      response.send(`Tutorial has been deleted!`).end
    })
    .catch(error => next(error))
})

app.delete('/api/tutorials', (request, response, next) => {
    Tutorial.deleteMany({})
    .then(tutorial => {
      response.send(`All the tutorials are successfully deleted!`)
    })
    .catch(error => next(error))
})


app.put('/api/tutorials/:id/publish', (request, response, next) => {
const date = new Date();
date.setHours(date.getHours() + 3);
  const body = request.body
  const tutorial = {
  title: body.title,
  content: body.content,
  date: date,
  published: true,
  }

  Tutorial.findByIdAndUpdate(request.params.id, tutorial, { new: true })
    .then(updatedTutorial => {
      response.json(updatedTutorial)
    })
    .catch(error => next(error))
})


app.put('/api/tutorials/:id', (request, response, next) => {

  const body = request.body
  const tutorial = {
    title: body.title,
    content: body.content,
    date: new Date().toISOString().substr(0, 19).replace('T', ', '),
  }
  Tutorial.findByIdAndUpdate(request.params.id, tutorial, { new: true })
    .then(updatedTutorial => {
      response.json(updatedTutorial)
    })
    .catch(error => next(error))
})



app.get('/api/tutorials', (request, response) => {
    const { title } = request.query;
    Tutorial.find({}).then(tutorials => {
    if(title){
    let array = tutorials.filter(tutorial => tutorial.content.toUpperCase().includes(title.toUpperCase()))
    response.json(array)
    } else {
    response.json(tutorials)
    }
})
    })

// ====================/////////////////////////==============

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