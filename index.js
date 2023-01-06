const express = require('express');
const path = require('path')
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const app = express()

// serve static files
app.use('/js', express.static(path.join(__dirname, 'public/js')))
app.use('/style', express.static(path.join(__dirname, 'public/css')))
app.use('/images', express.static(path.join(__dirname, 'public/img')))

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// using routes
app.use('/openai', require('./routes/generateImage'));
app.use('/', require('./routes/pages/page'))

app.listen(PORT, () =>{
    console.log("server running")
})