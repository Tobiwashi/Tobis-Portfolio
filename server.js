require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || '8080';

app.set('view engine', 'express');
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res)=>{
    res.render('home.ejs')
})
app.get('/about', (req,res)=>{
    res.render('about.ejs')
})
app.get('/contact', (req,res)=>{
    res.render('contact.ejs')
})
app.get('/projects', (req,res)=>{
    res.render('projects.ejs')
})

app.listen(PORT, () => console.log( 'Listening on port:', PORT));