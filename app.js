const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const cors = require('cors')

const app = express();

const adminRoutes = require('./routes/admin');

app.use(cors());
app.use(bodyParser.json({ extended: false }));

app.use('/admin', adminRoutes);

sequelize.sync().then(result => {
  app.listen(3000);
  console.log('server started on port 3000')

}).catch(err => {
  console.log(err);
})

