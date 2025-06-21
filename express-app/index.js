const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const logger = require('./middleware/logger');

// Init middleware
//app.use(logger);

// set static folderr
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
