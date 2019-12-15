const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageHigh = document.querySelector('#tempHigh')
const messageLow = document.querySelector('#tempLow')


weatherForm.addEventListener('submit',(e) => {
    messageOne.textContent = 'Loading'
    messageTwo.textContent = ''
    messageThree.textContent = ''
    messageHigh.textContent = ''
    messageLow.textContent = ''

    e.preventDefault()
    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) =>{
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                messageThree.textContent = 'Current Temperature is ' + data.temperature
                messageHigh.textContent = 'High Temperature For Today is ' + data.temperatureHigh
                messageLow.textContent = 'Low Temperature For Today is ' + data.temperatureLow
            }
        })
    })
})