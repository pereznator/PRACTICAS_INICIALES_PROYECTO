"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consolasController_1 = require("../controllers/consolasController");
class ConsolasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', consolasController_1.consolasController.createConsola);
        this.router.get('/', consolasController_1.consolasController.getConsolas);
        this.router.get('/:id', consolasController_1.consolasController.getConsola);
    }
}
const consolasRoutes = new ConsolasRoutes();
exports.default = consolasRoutes.router;
