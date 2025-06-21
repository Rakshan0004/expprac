const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const members = require('./Members');
const moment = require('moment');

const logger = (req, res, next) => {
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl
        }: ${moment().format()}`
    );
    next();
};

// Init middleware
app.use(logger);


//Get all members
app.get('/api/members', (req, res) =>{
    res.json(members);
});


// set static folderr
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
