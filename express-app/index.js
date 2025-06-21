const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const logger = require('./middleware/logger');

// Init middleware
//app.use(logger);

//Body parser middleware for post req
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folderr
app.use(express.static(path.join(__dirname, 'public')));

//members api routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
