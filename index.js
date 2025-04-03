import express from 'express';
import bodyParser from 'body-parser';

const app = express();

import usersRoutes from  './routes/usuarios.js';

app.use(bodyParser.json());

app.use("/usuarios", usersRoutes);

app.get("/", (req, res) => {
    res.send("Bem vindo a API de usuários")
} )
app.listen(3000, () => console.log("Servidor executando na porta 3000"))