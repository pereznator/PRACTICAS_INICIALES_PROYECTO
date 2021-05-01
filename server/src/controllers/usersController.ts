import { Request, Response } from 'express';
import pool from '../database';


class UsersController {

    public async createUser(req: Request, res: Response): Promise<any> {
        const { username, correo } = req.body;
        const usuarios = await pool.query('SELECT * FROM usuario WHERE username = ? or correo = ?', [username, correo]);
        if (usuarios.length > 0) {
            return res.json({mensaje: 'Error', descripcion: 'Ya existe un usuario con ese username o correo'});
        }
        const respuesta = await pool.query('INSERT INTO usuario set ?', [req.body]);
        if (respuesta.affectedRows === 1) {
            res.json({mensaje: 'Exito'});
        } else {
            res.json({mensaje: 'Error'});
        }
    }
    
    public async login(req: Request, res: Response): Promise<any> {
        const { username, password } = req.body;
        const respuesta = await pool.query('SELECT * FROM usuario WHERE username = ? and password = ?', [username, password]);
        if (respuesta.length === 1) {
            res.json({mensaje: 'Exito', usuario: respuesta[0]});
        } else {
            res.json({mensaje: 'Error'});
        }
    }

    public async buscarUsuario(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM usuario WHERE id = ?', [id]);
        if (respuesta.length === 1) {
            res.json({mensaje: 'Exito', usuario: respuesta[0]});
        } else {
            res.status(404).json({mensaje: 'Error'});
        }
    }

    public async obtenerUsuarios(req: Request, res: Response): Promise<any> {
        const respuesta = await pool.query('SELECT * FROM usuario');
        if (respuesta.length >= 0) {
            res.json({mensaje: 'Exito', usuarios: respuesta});
        } else {
            res.status(404).json({mensaje: 'Error'});
        }
    }

    public async actualizarUsuario(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const respuesta = await pool.query('UPDATE usuario SET ? WHERE id = ?', [req.body, id]);
        if (respuesta.affectedRows === 1) {
            res.json({mensaje: 'Exito'});
        } else {
            res.json({mensaje: 'Error'});
        }
    }

    public async olvidoPassword(req: Request, res: Response): Promise<any> {
        const { username, correo } = req.body;
        const respuesta = await pool.query('SELECT * FROM usuario WHERE username = ? and correo = ?', [username, correo]);
        if (respuesta.length === 1) {
            res.json({mensaje: 'Exito', valido: true, usuario: respuesta[0]});
        } else {
            res.json({mensaje: 'Exito', valido: false});
        }
    }

    

}

export const usersController = new UsersController();