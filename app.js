const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

const url = Buffer.from(`bW9uZ29kYitzcnY6Ly9hZG1pbjE6YWRtaW4xQGNsdXN0ZXIwLnBwZm5xLm1vbmdvZGIubmV0L0NsdXN0ZXIwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eQ==`, "base64").toString();

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    
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
})
.catch( (err) => {
    console.error(`Error connecting to the database. \n${err}`);
})