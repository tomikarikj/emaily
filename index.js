const express = require('express');
require('./services/passport');
const chalk = require('chalk');

const app = express();

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.cyan('The server has successfully connected...'));
});
