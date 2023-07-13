const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const ModeloController = require('./adapters/controllers/ModeloController');
const StarWarsController = require('./adapters/controllers/StarWarsController');
const ModeloService = require('./Application/ModeloService');
const StarWarsService = require('./Application/StarWarsService');
const ModeloRepository = require('./adapters/database/ModeloRepository');
const app = express();

// Middlewares
app.use(bodyParser.json());


// Dependency injection
const modeloRepository = new ModeloRepository();
const modeloService = new ModeloService(modeloRepository);
const starWarsService = new StarWarsService();
const modeloController = new ModeloController(modeloService);
const starWarsController = new StarWarsController(starWarsService);

// Routes
app.get('/modelo', modeloController.getAllModelos.bind(modeloController));
app.post('/modelo', modeloController.createModelo.bind(modeloController));
app.get('/starwars/characters', starWarsController.getStarWarsCharacters.bind(starWarsController));
app.listen(3000, () => {
  console.log('API listening on port 3000');
});

module.exports.handler = serverless(app);