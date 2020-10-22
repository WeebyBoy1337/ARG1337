const textInput = document.getElementById('text-input')

textInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter'){
        console.log(textInput.value)
    if (textInput.value == "rainbowcat\n"){
        alert("copy & paste the link ''")
    }
    else if (textInput.value  != "rainbowcat\n"){
        alert('Hahaha, lol worng baka, try again')
    }
    textInput.value = ""
}

})
console.log()