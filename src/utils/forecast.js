const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/add4450f1d2adb2739321ac913d10f14/' + latitude + ',' + longitude
 
    request({url,json: true}, (error,{body}) => {
       if (error) {
          callback('Unable to connect to weather services!')
       } else if (body.error) {
          callback('Unable to find location. Try another search!')
       } else {
          callback(undefined, {
             summary: body.daily.data[0].summary,
             temprature: body.currently.temperature,
             rainchance: body.currently.precipProbability
          })
       }
    })
 }

 module.exports = forecast