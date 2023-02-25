require('dotenv').config()
const express = require('express')
const app = express()

const PORT = process.env.PORT || '8080';

const path = require('path');
app.set('view engine', 'express');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}));


app.get('/', (req,res)=>{
    res.render('about.ejs')
})
app.get('/contact', (req,res)=>{
    res.render('contact.ejs')
})
app.get('/projects', (req,res)=>{
    res.render('projects.ejs')
})

app.listen(PORT, () => console.log( 'Listening on port:', PORT));