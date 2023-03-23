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

app.get('/puppy', (req, res) => {
    console.log('boop')
    let puppy = 'http://cdn.shopify.com/s/files/1/0054/2569/2758/articles/Puppy_Big_Wide_World.jpg?v=1611665413'
    rollbar.info('sent the puppy')
    res.status(200).send(puppy)
})

app.listen(4000, () => {
    console.log('listening on 4000')
})