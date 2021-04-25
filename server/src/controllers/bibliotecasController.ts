import { Request, Response } from 'express';
import pool from '../database';


class BibliotecasController {

    public async createBiblioteca(req: Request, res: Response): Promise<any> {
        const respuesta = await pool.query('INSERT INTO biblioteca SET ?', [req.body]);
        if (respuesta.affectedRows === 1) {
            res.json({mensaje: 'Exito'});
        }else {
            res.json({mensaje: 'Error'});
        }
    }
    
    public async getBiblioteca(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const respuesta = await pool.query('SELECT * FROM biblioteca WHERE id_biblioteca = ?', [id]);
        if (respuesta.length === 1) {
            res.json({mensaje: 'Exito', biblioteca: respuesta[0]});
        } else {
            res.status(404).json({mensaje: 'Error'});
        }
    }

    public async getBibliotecas(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const bibliotecas = await pool.query('SELECT * FROM biblioteca WHERE id_usuario = ?', [id]);
        res.json({mensaje: 'Exito', bibliotecas: bibliotecas});
    }

}

export const bibliotecasController = new BibliotecasController();