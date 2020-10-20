const mongoose = require('mongoose');
const chalk = require('chalk');

const {
    DATABASE_NAME,
    DATABASE_CONNECTION_STRING,
} = process.env;

mongoose.connect(`${DATABASE_CONNECTION_STRING}/${DATABASE_NAME}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, () => {
    console.log(chalk.bold.blue(`[*] Connected to database ${DATABASE_NAME}`));
});