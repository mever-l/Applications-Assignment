const express = require('express');
const app = express;
const dev_env = require('dev_env').config()
const port = process.env.PORT;

app.get('/', (req, res) => {
})

app.listen(port, () => console.log(`App is listening on port ${port} :)`)
)