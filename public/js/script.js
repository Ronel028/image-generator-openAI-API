console.log('connected')

const form = document.querySelector("#form")
const inputText = document.querySelector("#input-text")
const generatedImage = document.querySelector("#generated-image")
const loaderContainer = document.querySelector("#loader")

form.addEventListener('submit', async(e) =>{
    e.preventDefault()

    generatedImage.src = ""

    if(inputText.value === ""){
        alert("Please describe your image!")
        return
    }

    try {
        showLoader()
        const generateImage = await fetch('/openai/generateImage', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imageName: inputText.value
            })
        })
        const response = await generateImage.json()
        if(response.error){
            throw new Error("Image can't Generate")
        }
        else{
            hideLoader();
            generatedImage.src = response.data
            inputText.value = ""
        }
    } catch (error) {
        hideLoader()
        inputText.value = ""
        alert(error)
    }
})

const showLoader = () =>{
    loaderContainer.classList.remove('hide')
}
const hideLoader = () =>{
    loaderContainer.classList.add('hide')
}
