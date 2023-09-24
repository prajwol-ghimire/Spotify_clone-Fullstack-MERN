const express = require('express')
const app = express()
require('dotenv').config();
const port = 3000

// 6r#uOL7JH4T@

// connect mongodb to node
const mongoose = require('mongoose');

// 2 arguments: url of mongodb, options
mongoose
    .connect(
            "mongodb+srv://"+ 
            process.env.MONGO_USER + ":"+ 
            process.env.MONGO_PASSWORD +
            "@spotifyclone.zmgosus.mongodb.net/?retryWrites=true&w=majority",
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log('MongoDB Connected')
    })
    .catch(err => {
        console.log("While connection : " + err)
    });


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))