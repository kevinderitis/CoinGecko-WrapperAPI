const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/coins', require('./routes/coins'));

// Starting server
app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});

