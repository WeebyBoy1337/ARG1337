//oiii!!! Defuk u doin in here mate -_- fu. Do not cheat. bich!

const textInput = document.getElementById('text-input')

textInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter'){
        console.log(textInput.value)
    if (textInput.value == "nikonikoni\n"){
        alert("copy & paste the link 'http://weebyboy1337.github.io/ARG1337/konosuba'")
    }
    else if (textInput.value  != "nikonikoni\n"){
        alert('Hahaha, lol worng baka, try again')
    }
    textInput.value = ""
}

})