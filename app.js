const express = require('express')
const app = express()
const port = 3000

/**
 * Clients 
 */

// Retrieve one client
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Retrieve all clients

// Add one client

// Edit one client 

/**
 * Requests 
 */

// Retrieve one request
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Retrieve all requests

// Add one request

// Edit one request


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})