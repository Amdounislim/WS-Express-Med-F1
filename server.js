// 1 - import express
const express = require('express')

// 2 - init express
const app = express()

// Create middelware
function logger(req, res, next) {
    // console.log("method", req.method)
    // console.log("path", req.url)
    if (5 > 10) {
        next()
    }
    else {
        res.send("Ouuuuuuuuuuuuuuups")
    }
}

app.use(logger)

// 3 - create your endpoint
app.get('/', (req, res) => {
    res.send("Welcom to WS-Express")
})
app.get('/bonjour', (req, res)=>{
    res.send("Bonjouuuuur")
})

// app.get("/", (req, res)=>{
//     // res.sendFile(__dirname + "/public/")
//     res.sendFile(__dirname + "/public/contact.html")
// })

// app.use(express.static(__dirname + '/public'))

// 4 - run server
app.listen(5000, err => {
    err ? console.log(err) : console.log(`The server is running on port 5000`)
})