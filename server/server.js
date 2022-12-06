const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server'));

app.listen(port, () => {
    console.log('listening on port', port);
})