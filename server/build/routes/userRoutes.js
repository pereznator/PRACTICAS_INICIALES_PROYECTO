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
        this.router.get('/:id', usersController_1.usersController.buscarUsuario);
    }
}
exports.userRoutes = new UserRoutes();
