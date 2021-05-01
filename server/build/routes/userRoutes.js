"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersController_1 = require("../controllers/usersController");
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/register', usersController_1.usersController.createUser);
        this.router.post('/login', usersController_1.usersController.login);
        this.router.post('/olvido-password', usersController_1.usersController.olvidoPassword);
        this.router.get('/mas-juegos', usersController_1.usersController.conMasJuegos);
        this.router.get('/mas-comentarios', usersController_1.usersController.conMasComentarios);
        this.router.get('/:id', usersController_1.usersController.buscarUsuario);
        this.router.patch('/:id', usersController_1.usersController.actualizarUsuario);
        this.router.get('/', usersController_1.usersController.obtenerUsuarios);
    }
}
exports.userRoutes = new UserRoutes();
