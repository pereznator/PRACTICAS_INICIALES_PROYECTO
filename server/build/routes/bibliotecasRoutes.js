"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bibliotecasController_1 = require("../controllers/bibliotecasController");
class BibliotecasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', bibliotecasController_1.bibliotecasController.createBiblioteca);
        this.router.get('/:idBiblioteca', bibliotecasController_1.bibliotecasController.getBiblioteca);
        this.router.patch('/:idBiblioteca', bibliotecasController_1.bibliotecasController.updateBiblioteca);
        this.router.get('/usuario/:idUsuario', bibliotecasController_1.bibliotecasController.getBibliotecas);
        this.router.post('/usuario', bibliotecasController_1.bibliotecasController.checkBiblioteca);
    }
}
const bibliotecasRoutes = new BibliotecasRoutes();
exports.default = bibliotecasRoutes.router;
