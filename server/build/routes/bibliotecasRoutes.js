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
        this.router.post('/biblioteca', bibliotecasController_1.bibliotecasController.createBiblioteca);
        this.router.get('/biblioteca/:id', bibliotecasController_1.bibliotecasController.getBiblioteca);
        this.router.post('/biblioteca/:id', bibliotecasController_1.bibliotecasController.getBibliotecas);
    }
}
const bibliotecasRoutes = new BibliotecasRoutes();
exports.default = bibliotecasRoutes.router;
