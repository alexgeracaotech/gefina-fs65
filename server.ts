import express from 'express';

const app = express();

app.get('/api/health', (req, res) => res.status(200).json({ success: {
    status: 200,
    message: 'Servidor em execução.'
}}));

app.use((req, res) => res.status(404).json({ error: {
    status: 404,
    message: 'Recurso não encontrado.'
}}));

app.listen(3000);
