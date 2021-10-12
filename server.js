const express = require('express');
require('dotenv').config({path: './config/config.env'});
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8100;

//Routes
const userRouter = require('./routes/users');
const scrumRouter = require('./routes/scrums');
const batchRouter = require('./routes/batchdata');
const teamRouter = require('./routes/teams');


const app = express();
//for JWT
app.use(cookieParser());
app.use(cors());

//body parser
app.use(express.urlencoded({extended: false}));-
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', batchRouter);
app.use('/api', teamRouter);
app.use('/api', scrumRouter);


app.listen(PORT, () => {
  console.log(`Listening at PORT:${PORT}`);
});
