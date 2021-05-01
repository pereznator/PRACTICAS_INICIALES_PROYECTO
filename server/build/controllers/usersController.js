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
class UsersController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, correo } = req.body;
            const usuarios = yield database_1.default.query('SELECT * FROM usuario WHERE username = ? or correo = ?', [username, correo]);
            if (usuarios.length > 0) {
                return res.json({ mensaje: 'Error', descripcion: 'Ya existe un usuario con ese username o correo' });
            }
            const respuesta = yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            if (respuesta.affectedRows === 1) {
                res.json({ mensaje: 'Exito' });
            }
            else {
                res.json({ mensaje: 'Error' });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = req.body;
            const respuesta = yield database_1.default.query('SELECT * FROM usuario WHERE username = ? and password = ?', [username, password]);
            if (respuesta.length === 1) {
                res.json({ mensaje: 'Exito', usuario: respuesta[0] });
            }
            else {
                res.json({ mensaje: 'Error' });
            }
        });
    }
    buscarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('SELECT * FROM usuario WHERE id = ?', [id]);
            if (respuesta.length === 1) {
                res.json({ mensaje: 'Exito', usuario: respuesta[0] });
            }
            else {
                res.status(404).json({ mensaje: 'Error' });
            }
        });
    }
    obtenerUsuarios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM usuario');
            if (respuesta.length >= 0) {
                res.json({ mensaje: 'Exito', usuarios: respuesta });
            }
            else {
                res.status(404).json({ mensaje: 'Error' });
            }
        });
    }
    actualizarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const respuesta = yield database_1.default.query('UPDATE usuario SET ? WHERE id = ?', [req.body, id]);
            if (respuesta.affectedRows === 1) {
                res.json({ mensaje: 'Exito' });
            }
            else {
                res.json({ mensaje: 'Error' });
            }
        });
    }
    olvidoPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, correo } = req.body;
            const respuesta = yield database_1.default.query('SELECT * FROM usuario WHERE username = ? and correo = ?', [username, correo]);
            if (respuesta.length === 1) {
                res.json({ mensaje: 'Exito', valido: true, usuario: respuesta[0] });
            }
            else {
                res.json({ mensaje: 'Exito', valido: false });
            }
        });
    }
}
exports.usersController = new UsersController();
