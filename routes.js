const express = require('express');
const route = express.Router();

//funções de rota
const homeController = require('./src/controllers/homeController');



route.get('/home', homeController.index);