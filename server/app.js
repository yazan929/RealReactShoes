require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.set('view engine', 'ejs')
// app.use('/', require('/routes/shoes'))

app.use('/api/', require('./routes/shoes'))
app.get('/', (req, res)=> {
    res.send('bla bla bla')
})


const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> {
    console.log('listen on port:', PORT )
})
