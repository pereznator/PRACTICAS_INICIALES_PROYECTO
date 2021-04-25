import { Router } from 'express';
import { gamesController } from '../controllers/gamesController'

class GamesRoutes {
    
    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config(): void {
        
        this.router.post('/juegos', gamesController.createJuego);
        this.router.get('/juegos', gamesController.getJuegos);
        this.router.get('/juegos/:id', gamesController.getJuego);
        
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;