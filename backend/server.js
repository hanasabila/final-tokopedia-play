require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.db_url;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.once('connected', ( ) => {
    console.log('Database Connected');
})


const app = express();
const videoRouter = require('./routes/videoRoutes');
const commentRouter = require('./routes/commentRoutes');
const productRouter = require('./routes/productRoutes');

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

// routes
app.use('/tokplay',videoRouter);
app.use('/tokplay', commentRouter);
app.use('/tokplay', productRouter);

app.listen(process.env.PORT, () => {
  console.log('Server is running on port', process.env.PORT);
});