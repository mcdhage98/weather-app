const request = require('postman-request');

const apiKey = '45ebafde24446bfce18bb93590afc1df'
const city = 'Bangalore'
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`




request({ url, json: true }, function (error, response, body) {
  if (error) {
    console.log('Unable to connect to weather service!')
  } else if (response.body.error) {
    console.log('Unable to find location')
  }
  else {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    console.log(`Todays temperature is ${(body.main.temp / 10).toFixed(2)}, weather is ${body.weather[0].main} with ${body.weather[0].description}`)
  }
});

const geoCodeKey = 'pk.eyJ1IjoibWNkaGFnZSIsImEiOiJja2tiMnN6N3IwMmNiMnBzN2RkOGhsd3A4In0.s4vGOl49XiXyUC0MhMqfUw'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWNkaGFnZSIsImEiOiJja2tiMnN6N3IwMmNiMnBzN2RkOGhsd3A4In0.s4vGOl49XiXyUC0MhMqfUw&limit=1'
request({ url: geocodeURL, json: true }, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to location services!')
  } else if (body.message == "Not Found") {
    console.log('Unable to find location. Try another search.')
  } else {
    console.log(body)
    const latitude = body.features[0].center[1]
    const longitude = body.features[0].center[0]
    console.log(latitude, longitude)
  }


})