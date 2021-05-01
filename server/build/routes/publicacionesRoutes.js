"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const publicacionesController_1 = require("../controllers/publicacionesController");
class PublicacionesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', publicacionesController_1.publicacionesController.createPublicacion);
        this.router.get('/', publicacionesController_1.publicacionesController.getPublicaciones);
        this.router.get('/:id', publicacionesController_1.publicacionesController.getPublicacionPorUsuario);
        this.router.get('/juego/:id', publicacionesController_1.publicacionesController.getPublicacionPorJuego);
    }
}
const publicacionesRoutes = new PublicacionesRoutes();
exports.default = publicacionesRoutes.router;
