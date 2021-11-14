
const mongoose = require('mongoose')

const url = Buffer.from(`bW9uZ29kYitzcnY6Ly9hZG1pbjE6YWRtaW4xQGNsdXN0ZXIwLnBwZm5xLm1vbmdvZGIubmV0L0NsdXN0ZXIwP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eQ==`, "base64").toString();

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })