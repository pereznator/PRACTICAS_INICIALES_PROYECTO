import { Router } from 'express';
import { gamesController } from '../controllers/gamesController'

class GamesRoutes {
    
    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config(): void {
        
        this.router.post('/', gamesController.createJuego);
        this.router.get('/', gamesController.getJuegos);
        this.router.get('/:id', gamesController.getJuego);
        
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;