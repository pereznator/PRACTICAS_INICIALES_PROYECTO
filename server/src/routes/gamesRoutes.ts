import { Router } from 'express';
import { gamesController } from '../controllers/gamesController'

class GamesRoutes {
    
    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config(): void {
        
        this.router.get('/mejores-juegos', gamesController.mejoresJuegos);
        this.router.get('/juegos-fecha', gamesController.juegosPorFecha);
        this.router.post('/', gamesController.createJuego);
        this.router.get('/', gamesController.getJuegos);
        this.router.get('/:id', gamesController.getJuego);
        this.router.get('/search/:busqueda', gamesController.getJuegoPorBusqueda);
        this.router.patch('/:id', gamesController.updateJuego);
        
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;