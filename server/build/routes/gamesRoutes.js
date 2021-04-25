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
        this.router.post('/juegos', gamesController_1.gamesController.createJuego);
        this.router.get('/juegos', gamesController_1.gamesController.getJuegos);
        this.router.get('/juegos/:id', gamesController_1.gamesController.getJuego);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
