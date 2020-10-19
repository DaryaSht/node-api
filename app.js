const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const cors = require('cors');
// const MongoStore = require('connect-mongo')(expressSession);
const passport = require('passport');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
// const morgan = require('morgan');
// const boolParser = require('express-query-boolean');

dotenv.config();

const app = express();

require('./database/index');
// require('./api/passport');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const server = app.listen(process.env.PORT, () => {
    console.log(`[*] Server started on port ${server.address().port}`);
});