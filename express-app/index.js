const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const members = require('./Members');

const logger = require('./middleware/logger');


// Init middleware
//app.use(logger);


//Get all members
app.get('/api/members', (req, res) =>{
    res.json(members);
});


// set static folderr
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
