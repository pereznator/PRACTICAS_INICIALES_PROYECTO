import { Request, Response } from 'express';
import pool from '../database'

class GamesController {


    public async createJuego(req: Request, res: Response): Promise<any> {
        console.log('Entra a createJuego');
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
            const consola = await pool.query('SELECT * FROM consola WHERE id_consola = ?', [respuesta[0].id_consola]);
            respuesta[0]['consola'] = consola[0];
            res.json({mensaje: 'Exito', juego: respuesta[0]});
        } else {
            res.status(404).json({mensaje: 'Error'});
        }
    }

    public async getJuegos(req: Request, res: Response): Promise<any> {
        const juegos = await pool.query('SELECT * FROM juego');
        let arreglo: any = [];
        juegos.forEach( async (juego: any) => {
            let jbody = juego;
            const consola = await pool.query('SELECT * FROM consola WHERE id_consola = ?', [juego.id_consola]);
            jbody['consola'] = consola[0];
            arreglo.push(jbody);
        });
        console.log(arreglo);
        res.json({mensaje: 'Exito', juegos: arreglo});
    }

}

export const gamesController = new GamesController();