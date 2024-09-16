require('dotenv').config();
const express=require("express")
const connectToDB = require("./config/db");
const bodyParser = require('body-parser');

const app=express()
const port = process.env.PORT

app.use(bodyParser.json());
app.use(express.json())

app.use('/api', require('./routes/productRoutes'));
app.use('/api', require('./routes/cartRoutes'));
app.use('/api', require('./routes/discountRoutes'));
app.use('/api', require('./routes/checkoutRoutes'));
app.listen(port,async(req,res)=>{
    await connectToDB()
    console.log("server started and connect to db")
})