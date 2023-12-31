const express = require ("express");

const app = express();

const path = require ('path');

const PORT = 3000;

app.listen(PORT, () => console.log("listening on port:", PORT));

app.get("/cart", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cart.html'))
})

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contact.html'))
})

app.get("/home", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'))
})

app.get("/productdetail", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/productdetail.html'))
})

app.get("/Register", (req, res) => {
    res.sendFile(path.join(__dirname, 'views/register.html'))
})

