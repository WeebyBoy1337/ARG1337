//oiii!!! Defuk u doin in here mate -_- fu. Do not cheat. bich!

const textInput = document.getElementById('text-input')

textInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter'){
        console.log(textInput.value)
    if (textInput.value == "rasengan\n"){
        alert("copy & paste the link ''")
    }
    else if (textInput.value  != "rasengan\n"){
        alert('Hahaha, lol worng baka, try again')
    }
    textInput.value = ""
}

})
