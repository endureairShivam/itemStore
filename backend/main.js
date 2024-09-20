const cors = require('cors')
const express = require('express')

const app =express()
app.use(cors())



const port = 8080;
app.listen(port, () =>{
    console.log('App Listening.');
})

