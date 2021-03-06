import { Request, Response } from 'express';
import pool from '../database';


class ComentariosController {

    public async createComentario(req: Request, res: Response): Promise<any> {
        const respuesta = await pool.query('INSERT INTO comentario SET ?', [req.body]);
        if (respuesta.affectedRows === 1) {
            res.json({mensaje: 'Exito'});
        }else {
            res.json({mensaje: 'Error'});
        }
    }
    
    public async getComentarios(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const comentarios = await pool.query('SELECT * FROM comentario WHERE id_publicacion = ?', [id]);
        for (const com of comentarios) {
            const usuario = await pool.query('SELECT * FROM usuario WHERE id = ?', [com.id_usuario]);
            com['usuario'] = usuario[0];
        }
        res.json({mensaje: 'Exito', comentarios: comentarios});
    }

}

export const comentariosController = new ComentariosController();