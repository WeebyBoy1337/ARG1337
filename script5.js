const textInput = document.getElementById('text-input')

textInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter'){
        console.log(textInput.value)
    if (textInput.value == "demon slayer\n"){
        alert("copy & paste the link 'http://weebyboy1337.tk/video'")
    }
    else if (textInput.value  != "demon slayer\n"){
        alert('Hahaha, lol worng baka, try again')
    }
    textInput.value = ""
}

})
console.log()