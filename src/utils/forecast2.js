const request = require('request')



//query


const forecast = (location, callback ) => {
    //weatherstack request base url
    const weatherstackBaseURL = 'http://api.weatherstack.com/current'

    //access key
    const wsKey = '28884348d5ca9149b951e1dd695a5278'

    const weatherUrl = weatherstackBaseURL + '?access_key=' + wsKey + '&query=' + location

    request({ url: weatherUrl, json: true }, (error, response) => {
        if(error) {
            // there was an error
            //console.log('There was an error')
            callback( 'Unable to connect to weather service', undefined)

        }else if(response.body.error){
            //console.log(response.body)
            //connection error
            //console.log('Could not connect to server')
            callback(error, undefined)
        }else {
            //everything is ok
            console.log(response.body)

            callback(undefined, response)

        }

    } )


}

// forecast(-75.7088, 44.1545, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
// })

module.exports = forecast

//exports.forecast = forecast

