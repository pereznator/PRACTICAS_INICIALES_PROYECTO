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
class GamesController {
    createJuego(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Entra a createJuego');
            const respuesta = yield database_1.default.query('INSERT INTO juego set ?', [req.body]);
            if (respuesta.affectedRows === 1) {
                res.json({ mensaje: 'Exito' });
            }
            else {
                res.json({ mensaje: 'Error' });
            }
        });
    }
    getJuego(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM juego WHERE id_juego = ?', [id]);
            if (respuesta.length === 1) {
                const consola = yield database_1.default.query('SELECT * FROM consola WHERE id_consola = ?', [respuesta[0].id_consola]);
                respuesta[0]['consola'] = consola[0];
                res.json({ mensaje: 'Exito', juego: respuesta[0] });
            }
            else {
                res.status(404).json({ mensaje: 'Error' });
            }
        });
    }
    getJuegos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const juegos = yield database_1.default.query('SELECT * FROM juego');
            let arreglo = [];
            juegos.forEach((juego) => __awaiter(this, void 0, void 0, function* () {
                let jbody = juego;
                const consola = yield database_1.default.query('SELECT * FROM consola WHERE id_consola = ?', [juego.id_consola]);
                jbody['consola'] = consola[0];
                arreglo.push(jbody);
            }));
            console.log(arreglo);
            res.json({ mensaje: 'Exito', juegos: arreglo });
        });
    }
}
exports.gamesController = new GamesController();
