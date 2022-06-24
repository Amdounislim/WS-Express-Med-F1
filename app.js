const express = require('express')

const app = express()

app.use(express.json())

let users = [
    { name: "Khaldoun", email: "Kh@gmail.com", id: 1 },
    { name: "Taha", email: "taha@gmail.com", id: 2 },
    { name: "Rayen", email: "rayen@gmail.com", id: 3 }
]


app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id', (req, res) => {
    let id = +req.params.id
    // console.log(id)
    let user = users.find(el => el.id === id)
    // console.log(user)
    res.send(user)
})

app.post('/users', (req, res) => {
    let newUser = { ...req.body, id: Math.random() }
    console.log(newUser)
    users.push(newUser)
    res.status(200).json({ mgs: "User added with success", users })
})


app.delete("/users/:id", (req, res) => {
    let id = +req.params.id
    users = users.filter(el => el.id !== id)
    res.status(200).json({ mgs: "User deleted with success", users })
})

app.put("/users/:id", (req, res) => {
    let id = Number(req.params.id)
    users = users.map(el => el.id === id ? { ...el, ...req.body } : el)
    res.status(200).json({ mgs: "User updated with success", users })
})

const port = process.env.PORT || 7000
app.listen(port, err => {
    err ? console.log(err) : console.log(`The server is running on port ${port}`)
})