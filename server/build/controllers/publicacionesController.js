"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class PublicacionesController {
    createPublicacion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('INSERT INTO publicacion set ?', [req.body]);
            if (respuesta.affectedRows === 1) {
                res.json({ mensaje: 'Exito' });
            }
            else {
                res.json({ mensaje: 'Error' });
            }
        });
    }
    getPublicacionPorJuego(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_juego } = req.body;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicacion WHERE id_juego = ?', [id_juego]);
            res.json({ mensaje: 'Exito', publicaciones: publicaciones });
        });
    }
    getPublicacionPorUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_usuario } = req.body;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicacion WHERE id_usuario = ?', [id_usuario]);
            res.json({ mensaje: 'Exito', publicaciones: publicaciones });
        });
    }
}
exports.publicacionesController = new PublicacionesController();
