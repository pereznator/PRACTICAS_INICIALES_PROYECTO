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
        const { idBiblioteca } = req.params;
        const respuesta = await pool.query('SELECT * FROM biblioteca WHERE id_biblioteca = ?', [idBiblioteca]);
        if (respuesta.length === 1) {
            res.json({mensaje: 'Exito', biblioteca: respuesta[0]});
        } else {
            res.status(404).json({mensaje: 'Error'});
        }
    }

    public async getBibliotecas(req: Request, res: Response): Promise<any> {
        const { idUsuario } = req.params;
        const bibliotecas = await pool.query('SELECT * FROM biblioteca WHERE id_usuario = ?', [idUsuario]);
        for (const bib of bibliotecas) {
            const juego = await pool.query('SELECT * FROM juego WHERE id_juego = ?', [bib.id_juego]);
            bib['juego'] = juego[0];
        }
        res.json({mensaje: 'Exito', bibliotecas: bibliotecas});
    }

    public async checkBiblioteca(req: Request, res: Response): Promise<any> {
        const { id_usuario, id_juego } = req.body;
        const respuesta = await pool.query('SELECT * FROM biblioteca WHERE id_usuario = ? AND id_juego = ?', [id_usuario, id_juego]);
        if (respuesta.length > 0) {
            res.json({mensaje: 'Exito', agregado: true, biblioteca: respuesta[0]});
        }else {
            res.json({mensaje: 'Exito', agregado: false});
        }
    }

    public async updateBiblioteca(req: Request, res: Response): Promise<any> {
        const { idBiblioteca } = req.params;
        const respuesta = await pool.query('UPDATE biblioteca SET ? WHERE id_biblioteca = ?', [req.body, idBiblioteca]);
        if (respuesta.affectedRows === 1){
            res.json({mensaje: 'Exito'});
        }else{
            res.json({mensaje: 'Error'});
        }
    }

}

export const bibliotecasController = new BibliotecasController();