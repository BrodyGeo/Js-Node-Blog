/* Our Express app module */
const express = require('express');
const app = express();

/* Import the routes */
const pageRoutes = require('./routes/pages');
const blogRoutes = require('./routes/blogs');

/* Register our routes */
app.use('/', pageRoutes);
app.use('/blogs', blogRoutes);

/* Exporting the changes */
module.exports = app;