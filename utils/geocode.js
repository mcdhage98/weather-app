const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibWNkaGFnZSIsImEiOiJja2tiMnN6N3IwMmNiMnBzN2RkOGhsd3A4In0.s4vGOl49XiXyUC0MhMqfUw&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log(error);
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode