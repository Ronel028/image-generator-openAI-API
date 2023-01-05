const express = require('express');
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const app = express()

// using routes
app.use('/openai', require('./routes/generateImage'));

app.listen(PORT, () =>{
    console.log("server running")
})