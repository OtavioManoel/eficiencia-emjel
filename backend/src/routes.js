const express = require('express');

const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;