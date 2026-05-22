require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');

//protocolo de comunicacão entre apis e outros serviços cors
//CORS: autoriza para qualquer tipo de serviço (front-end, outras apis,etc)
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3000;


//importações das rotas
const proprietario = require('../controllers/ProprietarioControlls.js');
const veiculo = require('../controllers/VeiculoControlls.js');

//Rotas
app.use(bodyParser.json());

//Função CORS para a autorização do uso da API
app.use(cors())
app.get('/', (req, res)=> res.send('Estou aqui'))
app.use('/proprietario', proprietario);
app.use('/veiculo', veiculo);
app.listen(port, '0.0.0.0', () => console.log(`Servidor rodando porta ${port}!`))




