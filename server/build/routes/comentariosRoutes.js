"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class ComentariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', usersController_1.usersController.createUser);
        this.router.post('/:id', usersController_1.usersController.login);
    }
}
const comentariosRoutes = new ComentariosRoutes();
exports.default = comentariosRoutes.router;
