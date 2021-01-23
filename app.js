const request=require('postman-request');

const apiKey='45ebafde24446bfce18bb93590afc1df'
const city='Bangalore'
const api=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`


request(api, function (error, response, bodyJson) {
    let body;
    console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', bodyJson); // Print the HTML for the Google homepage.
  
  if(bodyJson){
    body=JSON.parse(bodyJson)
    console.log(body)
  }
});