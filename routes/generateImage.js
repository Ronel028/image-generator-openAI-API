const express = require('express');
const { Configuration, OpenAIApi } = require("openai");
const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_KEY
})

const openai = new OpenAIApi(config)

router.post('/generateImage', async(request, response) =>{
    try {
        const generate = await openai.createImage({
            prompt: request.body.imageName,
            n: 1,
            size:"512x512"
        })
        response.json({
            success: true,
            data: generate.data.data[0].url
        })
    } catch (error) {
        response.json({
            error: error
        })
    }
})

module.exports = router;