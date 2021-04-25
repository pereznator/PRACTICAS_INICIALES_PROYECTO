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
class BibliotecasController {
    createBiblioteca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('INSERT INTO biblioteca SET ?', [req.body]);
            if (respuesta.affectedRows === 1) {
                res.json({ mensaje: 'Exito' });
            }
            else {
                res.json({ mensaje: 'Error' });
            }
        });
    }
    getBiblioteca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM biblioteca WHERE id_biblioteca = ?', [id]);
            if (respuesta.length === 1) {
                res.json({ mensaje: 'Exito', biblioteca: respuesta[0] });
            }
            else {
                res.status(404).json({ mensaje: 'Error' });
            }
        });
    }
    getBibliotecas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const bibliotecas = yield database_1.default.query('SELECT * FROM biblioteca WHERE id_usuario = ?', [id]);
            res.json({ mensaje: 'Exito', bibliotecas: bibliotecas });
        });
    }
}
exports.bibliotecasController = new BibliotecasController();
