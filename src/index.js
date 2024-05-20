const express = require('express');

const app = express();

const message = "WELCOME TO MY APP";
app.get('/', (req, res) => {
    console.log(message);
    res.json({ message });
});

app.post('/test', (req, res) => {
    const data = req.body;
    console.log('Datos recibidos en la solicitud POST:', data);
    res.json({ message: 'Datos recibidos', data });
});


const port = process.env.PORT || 10000;

app.listen(port, () => {
    console.log('app corriendo en el puerto: ', port);
})


