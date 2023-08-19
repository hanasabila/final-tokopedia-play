require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to database
mongoose.connect(process.env.db_url)
.then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT)
    })
  })
  .catch((err) => {
    console.log(err)
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