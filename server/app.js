const express = require('express');
app = express()
const connectDB = require('./config/db') 
require('dotenv').config()

connectDB();

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

// app.listen(PORT , console.log('server started on port ',PORT));
