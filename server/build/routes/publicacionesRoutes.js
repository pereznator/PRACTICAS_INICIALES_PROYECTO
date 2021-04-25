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
        this.router.post('/publicaciones', publicacionesController_1.publicacionesController.createPublicacion);
        this.router.post('/publicaciones/usuario', publicacionesController_1.publicacionesController.getPublicacionPorUsuario);
        this.router.post('/publicaciones/juego', publicacionesController_1.publicacionesController.getPublicacionPorJuego);
    }
}
const publicacionesRoutes = new PublicacionesRoutes();
exports.default = publicacionesRoutes.router;
