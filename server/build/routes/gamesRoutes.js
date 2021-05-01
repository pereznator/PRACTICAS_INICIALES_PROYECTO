"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = require("../controllers/gamesController");
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', gamesController_1.gamesController.createJuego);
        this.router.get('/', gamesController_1.gamesController.getJuegos);
        this.router.get('/:id', gamesController_1.gamesController.getJuego);
        this.router.get('/search/:busqueda', gamesController_1.gamesController.getJuegoPorBusqueda);
        this.router.patch('/:id', gamesController_1.gamesController.updateJuego);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
