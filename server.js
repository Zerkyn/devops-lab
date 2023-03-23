const express = require('express')

const app = express()

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
    accessToken: '7fbfe36f62ec43ed86a1f3ce2bfd0326',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.listen(4000, () => {
    console.log('listening on 4000')
})