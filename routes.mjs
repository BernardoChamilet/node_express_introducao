import express from 'express';
import * as inicioControllers from './src/controllers/inicioController.mjs';
import * as testeControllers from './src/controllers/testeController.mjs';
import { especificoDaTeste } from './src/middlewares/middlewares.mjs';

export const routes = express.Router();

routes.get('/', inicioControllers.carregarPaginaInicial);

routes.post('/', inicioControllers.enviarFormulario);

routes.get('/teste/:parametro1?/:parametro2', especificoDaTeste, testeControllers.teste);
