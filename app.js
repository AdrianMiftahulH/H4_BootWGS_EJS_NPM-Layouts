const express = require('express')
const app = express();
var expressLayouts = require('express-ejs-layouts');
const port = 3000;

// const fs = require('fs');
const { dirname } = require('path');
const path = require('path')

app.set('view engine', 'ejs')
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

app.get('/', (req, res) => {
    res.render('index', {
        title: "Home Page",
        layout: 'layout/main'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Page",
        layout: 'layout/main'
    })
})
app.get('/contact', (req, res) => {
    cont = [
        {
            nama: "adrian",
            email: 'adrian@gmail.com',
        },
        {
            nama: "adriana",
            email: 'adriana@gmail.com',
        },
        {
            nama: "adrianaa",
            email: 'adrianaa@gmail.com',
        },
    ]

    res.render('contact', {
        title: "Contact Page",
        layout: 'layout/main',
        cont,
    })
})
app.get('/menu', (req, res) => {
    res.render('menu', {
        nama: 'adrian',
        title: "Menu",
        layout: 'layout/main'
    })
    // var mascots = [
    //     { name: 'Sammy' }
    // ];
    // var tagline = "No programming concept is complete without a cute animal mascot.";

})
// Untuk memanggil sebuah id
app.get(('/product/:id/'), (req, res) => {
    res.send(`product id : ${req.params.id}, id category ${req.query.idCategory}`)
    // res.send('product id : ' + req.params.id + 'id category' + req.params.idCategory)
})
app.use('/', (req, res) => {
    res.status(404)
    res.send(`page not found`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})