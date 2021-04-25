import { Request, Response } from 'express';
import pool from '../database'

class GamesController {


    public async createJuego(req: Request, res: Response): Promise<any> {
        const respuesta = await pool.query('INSERT INTO juego set ?', [req.body]);
        if (respuesta.affectedRows === 1) {
            res.json({mensaje: 'Exito'});
        }else {
            res.json({mensaje: 'Error'});
        }
    }

    public async getJuego(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM juego WHERE id_juego = ?', [id]);
        if (respuesta.length === 1) {
            res.json({mensaje: 'Exito', consola: respuesta[0]});
        } else {
            res.status(404).json({mensaje: 'Error'});
        }
    }

    public async getJuegos(req: Request, res: Response): Promise<any> {
        const juegos = await pool.query('SELECT * FROM juego');
        res.json({mensaje: 'Exito', juegos: juegos});
    }

}

export const gamesController = new GamesController();