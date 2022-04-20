const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: "Karim", email: "karim@gmail.com", phone: "01717967854"},
    {id: 2, name: "Rahim", email: "rahim@gmail.com", phone: "01717967854"},
    {id: 3, name: "Jabbar", email: "jabbar@gmail.com", phone: "01717967854"},
    {id: 4, name: "Mahmud", email: "mahmud@gmail.com", phone: "01717967854"},
    {id: 5, name: "Rafayet", email: "rafayet@gmail.com", phone: "01717967854"},
    {id: 6, name: "Jakir", email: "jakir@gmail.com", phone: "01717967854"},
    {id: 7, name: "Kalam", email: "kalam@gmail.com", phone: "01717967854"},
]

app.get('/', (req, res) => {
    res.send("This is my second time creating node");
})

// app.get('/users', (req, res) => {
//     res.send(users);
// })

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/about', (req, res) => {
    res.send("This is about us node");
})

app.listen(port, () => {
    console.log('listening to port', port);
})