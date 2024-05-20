const express = require('express');

const app = express();

//routes
const message = "WELCOME TO MY APP"
app.use('/', (req, res) => {
    console.log(message);
    res.json({ message })
})

const port = process.env.PORT || 10000;

app.listen(port, () => {
    console.log('app corriendo en el puerto: ', port);
})


