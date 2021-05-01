"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comentariosController_1 = require("../controllers/comentariosController");
class ComentariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', comentariosController_1.comentariosController.createComentario);
        this.router.get('/:id', comentariosController_1.comentariosController.getComentarios);
    }
}
const comentariosRoutes = new ComentariosRoutes();
exports.default = comentariosRoutes.router;
