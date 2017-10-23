const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const axios = require('axios')
const config = require('./config')

const port = 3000;
const app = express()

//console.log('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + config.privateKey)



app.use(cors())
app.use(bodyParser.json())
app.use("/", express.static(__dirname + '/public/build'));

app.get('/api/weather', (req, res)=> {
  console.log('server')
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + req.query.city + '&units=imperial&APPID=' + config.privateKey).then(response=>{
    return res.send(response.data)
  }).catch(console.log)
})



app.listen(port, function() {
  console.log(`"suhhh doooo", ${port}`)
})


// ea965f179ad1e6699892de44d8c5fe9c
