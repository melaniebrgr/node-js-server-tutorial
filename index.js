// index.js


//Simple HTTP server
/* const http = require('http')  
const port = 3000

const requestHandler = (request, response) => {  
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
}) */


// Simple Express server
const express = require('express')  
const app = express()  
const port = 3000

app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})

app.use((request, response, next) => {  
  request.chance = Math.random()
  next()
})

// whenever get route '/' send response
app.get('/', (request, response) => {  
  // response.send('Hello from Express!')
  response.json({
    chance: request.chance
  })
  // throw new Error('oops')
})

app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
