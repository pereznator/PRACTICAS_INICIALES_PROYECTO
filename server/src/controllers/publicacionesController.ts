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
        const { id } = req.params;
        const publicaciones = await pool.query('SELECT * FROM publicacion WHERE id_juego = ?', [id]);
        res.json({mensaje: 'Exito', publicaciones: publicaciones});
    }

    public async getPublicacionPorUsuario(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const publicaciones = await pool.query('SELECT * FROM publicacion WHERE id_usuario = ?', [id]);
        for (const pub of publicaciones) {
            const juego = await pool.query('SELECT * FROM juego WHERE id_juego = ?', [pub.id_juego]);
            pub['juego'] = juego[0];
        }
        res.json({mensaje: 'Exito', publicaciones: publicaciones});
    }
    
    public async getPublicaciones(req: Request, res: Response): Promise<any> {
        const publicaciones = await pool.query('SELECT * FROM publicacion');
        for (const pub of publicaciones) {
            const usu = await pool.query('SELECT * FROM usuario WHERE id = ?', [pub.id_usuario]);
            pub['usuario'] = usu[0];
            const juego = await pool.query('SELECT * FROM juego WHERE id_juego = ?', [pub.id_juego]);
            pub['juego'] = juego[0];
            const comentarios = await pool.query('SELECT * FROM comentario WHERE id_publicacion = ?', [pub.id_publicacion]);
            pub['comentarios'] = comentarios;
            for (const com of comentarios) {
                const usuario = await pool.query('SELECT * FROM usuario WHERE id = ?', com.id_usuario);
                com['usuario'] = usuario[0];
            }
        }
        res.json({mensaje: 'Exito', publicaciones: publicaciones});
    }

}

export const publicacionesController = new PublicacionesController();