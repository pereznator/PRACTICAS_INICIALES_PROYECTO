import { Request, Response } from 'express';
import pool from '../database';


class PublicacionesController {

    public async createPublicacion(req: Request, res: Response): Promise<any> {
        const respuesta = await pool.query('INSERT INTO publicacion set ?', [req.body]);
        if (respuesta.affectedRows === 1) {
            res.json({mensaje: 'Exito'});
        }else {
            res.json({mensaje: 'Error'});
        }
    }

    public async getPublicacionPorJuego(req: Request, res: Response): Promise<any> {
        const { id_juego } = req.body;
        const publicaciones = await pool.query('SELECT * FROM publicacion WHERE id_juego = ?', [id_juego]);
        res.json({mensaje: 'Exito', publicaciones: publicaciones});
    }

    public async getPublicacionPorUsuario(req: Request, res: Response): Promise<any> {
        const { id_usuario } = req.body;
        const publicaciones = await pool.query('SELECT * FROM publicacion WHERE id_usuario = ?', [id_usuario]);
        res.json({mensaje: 'Exito', publicaciones: publicaciones});
    }

}

export const publicacionesController = new PublicacionesController();