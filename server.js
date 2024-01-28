const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT;
const entries = require('./src/routes/entries')
const connectDB = require('./config/db');

connectDB();
const app = express();




app.use(express.json());
app.use('/api/v1/entries', entries);
if (process.env.NODE_ENV === 'development') {
   
    app.use(morgan('dev'));
}


const server = app.listen(port, () => {
    console.log(`server running on port ${port}`.yellow.bold)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red);
     server.close(() => process.exit(1));
})