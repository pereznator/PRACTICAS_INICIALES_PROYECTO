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

}

export const usersController = new UsersController();