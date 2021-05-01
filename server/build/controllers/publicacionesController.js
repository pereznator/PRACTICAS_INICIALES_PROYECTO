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
            const { id } = req.params;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicacion WHERE id_juego = ?', [id]);
            res.json({ mensaje: 'Exito', publicaciones: publicaciones });
        });
    }
    getPublicacionPorUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const publicaciones = yield database_1.default.query('SELECT * FROM publicacion WHERE id_usuario = ?', [id]);
            for (const pub of publicaciones) {
                const juego = yield database_1.default.query('SELECT * FROM juego WHERE id_juego = ?', [pub.id_juego]);
                pub['juego'] = juego[0];
            }
            res.json({ mensaje: 'Exito', publicaciones: publicaciones });
        });
    }
    getPublicaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publicaciones = yield database_1.default.query('SELECT * FROM publicacion');
            for (const pub of publicaciones) {
                const usu = yield database_1.default.query('SELECT * FROM usuario WHERE id = ?', [pub.id_usuario]);
                pub['usuario'] = usu[0];
                const juego = yield database_1.default.query('SELECT * FROM juego WHERE id_juego = ?', [pub.id_juego]);
                pub['juego'] = juego[0];
                const comentarios = yield database_1.default.query('SELECT * FROM comentario WHERE id_publicacion = ?', [pub.id_publicacion]);
                pub['comentarios'] = comentarios;
                for (const com of comentarios) {
                    const usuario = yield database_1.default.query('SELECT * FROM usuario WHERE id = ?', com.id_usuario);
                    com['usuario'] = usuario[0];
                }
            }
            res.json({ mensaje: 'Exito', publicaciones: publicaciones });
        });
    }
}
exports.publicacionesController = new PublicacionesController();
