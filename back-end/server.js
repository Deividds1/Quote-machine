import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';


const app = express();
app.use(cors());

app.get('/quotes', async (req, res) => {
    try {
        const response = await fetch('https://zenquotes.io/api/quotes/');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error al cargar datos:', error);
        res.status(500).json({ error: 'Error al cargar datos' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor intermedio en ejecución en el puerto ${PORT}`);
});