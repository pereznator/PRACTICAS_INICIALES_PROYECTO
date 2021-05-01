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

    public async getJuegoPorBusqueda(req: Request, res: Response): Promise<any> {
        let patron = '%';
        const { busqueda } = req.params;
        patron = patron + busqueda + '%';
        const respuesta = await pool.query('SELECT * FROM juego WHERE nombre LIKE ?;', [patron]);
        for (const juego of respuesta){
            const consola = await pool.query('SELECT * FROM consola WHERE id_consola = ?', [juego.id_consola]);
            juego['consola'] = consola[0];
        }
        res.json({mensaje: 'Exito', juegos: respuesta});
        /*if (respuesta.length === 1) {
            const consola = await pool.query('SELECT * FROM consola WHERE id_consola = ?', [respuesta[0].id_consola]);
            respuesta[0]['consola'] = consola[0];
        } else {
            res.status(404).json({mensaje: 'Error'});
        }*/
    }
    
    public async getJuegos(req: Request, res: Response): Promise<any> {
        const juegos = await pool.query('SELECT * FROM juego');
        let arreglo: any = [];
        for (const juego of juegos) {
            let jbody = juego;
            const consola = await pool.query('SELECT * FROM consola WHERE id_consola = ?', [juego.id_consola]);
            jbody['consola'] = consola[0];
            arreglo.push(jbody);
        }
        res.json({mensaje: 'Exito', juegos: arreglo});
    }
    
    public async updateJuego(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const respuesta = await pool.query('UPDATE juego SET ? WHERE id_juego = ?', [req.body, id]);
        console.log(respuesta);
        if (respuesta.affectedRows === 1){
            res.json({mensaje: 'Exito'});
        }else {
            res.json({mensaje: 'Error'});
        }
        /*if (respuesta.length === 1) {
        } else {
            res.status(404).json({mensaje: 'Error'});
        }*/
    }

}

export const gamesController = new GamesController();