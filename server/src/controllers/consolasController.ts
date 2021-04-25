import { Request, Response } from 'express';
import pool from '../database';


class ConsolasController {

    public async createConsola(req: Request, res: Response): Promise<any> {
        const respuesta = await pool.query('INSERT INTO consola set ?', [req.body]);
        if (respuesta.affectedRows === 1) {
            res.json({mensaje: 'Exito'});
        } else {
            res.json({mensaje: 'Error'});
        }
    }

    public async getConsola(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM consola WHERE id_consola = ?', [id]);
        if (respuesta.length === 1) {
            res.json({mensaje: 'Exito', consola: respuesta[0]});
        } else {
            res.status(404).json({mensaje: 'Error'});
        }
    }

    public async getConsolas(req: Request, res: Response): Promise<any> {
        const consolas = await pool.query('SELECT * FROM consola');
        res.json({mensaje: 'Exito', consolas: consolas});
    }

}

export const consolasController = new ConsolasController();