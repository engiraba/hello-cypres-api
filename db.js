//db.js

const mongoose = require('mongoose')

const url = `mongodb+srv://admin1:admin1@cluster0.ppfnq.mongodb.net/Cluster0?retryWrites=true&w=majority`;

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