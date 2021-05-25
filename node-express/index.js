const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const dishRouter  = require('./routes/dishRouter')
const leaderRouter  = require('./routes/leaderRouter')
const promoRouter  = require('./routes/promoRouter')

const hostname = 'localhost'
const port = 3000

const app = express()
//  once we do that express provides as a bunch of new things

app.use(morgan('dev'))
app.use(bodyParser.json())

// For routing dishes
app.use('/dishes', dishRouter)

// For routing leaders
app.use('/leaders', leaderRouter)

// For routing promotions
app.use('/promotions', promoRouter)

app.use(express.static( __dirname + '/public'))

app.use( (req, res, next) => {
    //console.log(req.headers)
    res.status = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>This is an Express Server</h1></body></html>')
})

const server = http.createServer(app)

server.listen(port , hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})