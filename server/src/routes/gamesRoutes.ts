import { Router } from 'express';

class GamesRoutes {
    
    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    config(): void {
        this.router.get('/', (req, res) => res.send('Hello'));
    }

}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;