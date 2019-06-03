require('dotenv').config();

/* Connect to database */
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  useNewUrlParser: true
}).catch(error => 
  {
    console.log(`ERROR: ${error}`);
  }
  );

const express = require('express');

const app = express();

/* Body parse */
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


/* Get routing for pages */
const routes = require('./routes.js');
app.use('/', routes);

/* Set main path */
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

/* Give public paths for specific folders */
app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascripts'));
app.use('/images', express.static('assets/images'));

const port = (process.env.PORT || 4000);
app.listen(port, () => 
{
  console.log(`Listening on ${port}`)
});