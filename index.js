const express = require('express');
const dotenv = require('dotenv').config();
const dbConnect = require('./config/dbConnect.js'); 
const authRoutes = require('./routes/authRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
dbConnect();

const app = express();


// midllewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes 
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
// start the server 
const PORT = process.env.PORT || 7002;
app.listen(PORT,()=>{
    console.log(`server is sprinting on ${PORT}`)
})