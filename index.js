const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

//tell express that we want to use the www folder
//for our static assets
app.use(express.static(path.join(__dirname, 'build')));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));