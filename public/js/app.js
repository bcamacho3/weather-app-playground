const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault() //if the event does not get explicitly handled, its default action should not be taken as it normally would be.

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    //fetch('/weather?address=' + location).then((response) => {
    fetch('/weather?address=' + location).then((response) => { 

        response.json().then((data) => {
            if (data.error) {

                messageOne.textContent = data.error

            } else {

                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

            }
        })
    })
})