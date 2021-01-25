const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    console.log(latitude,longitude)
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=45ebafde24446bfce18bb93590afc1df`
    request({ url: url, json: true }, (error, response,body) => {
        if (error) {
            console.log(error+"\n"+ response)
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `Todays temperature is ${(body.main.temp / 10).toFixed(2)}, weather is ${body.weather[0].main} with ${body.weather[0].description}`)
        }
    })
}

module.exports = forecast