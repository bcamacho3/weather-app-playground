const request = require('request')

const forecast = (latitude, longitude, callback) => {
    //const url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'
    //weatherstack request base url
    const weatherstackBaseURL = 'http://api.weatherstack.com/current'

    //access key
    const wsKey = '28884348d5ca9149b951e1dd695a5278'
    
    //location
    const location = latitude + ', ' + longitude

    //temperature units
    const units = '&units=f'

    //full combined weatherUrl
    const weatherUrl = weatherstackBaseURL + '?access_key=' + wsKey + '&query=' + location + units

    request({ url: weatherUrl, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast