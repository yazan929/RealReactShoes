require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");


connectDB();

const app = express();

app.use(express.json());

app.use('/api/products',productRoutes)

const PORT = process.env.PORT || 3001;


app.listen(PORT, ()=> {
    console.log('listen on port:', PORT )
})
















// app.set('view engine', 'ejs')
// app.use('/', require('/routes/shoes'))

// app.use('/api/', require('./routes/shoes'))
// app.get('/', (req, res)=> {
//     res.send('bla bla bla')
// })