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
class ComentariosController {
    createComentario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('INSERT INTO comentario SET ?', [req.body]);
            if (respuesta.affectedRows === 1) {
                res.json({ mensaje: 'Exito' });
            }
            else {
                res.json({ mensaje: 'Error' });
            }
        });
    }
    getComentarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const comentarios = yield database_1.default.query('SELECT * FROM comentario WHERE id_publicacion = ?', [id]);
            res.json({ mensaje: 'Exito', comentarios: comentarios });
        });
    }
}
exports.comentariosController = new ComentariosController();
