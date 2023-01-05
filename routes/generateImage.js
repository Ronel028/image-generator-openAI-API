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
            prompt: 'a white siamese cat',
            n: 1,
            size:"1024x1024"
        })
        response.json({
            success: true,
            generatedImage: generate.data.data[0].url
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;