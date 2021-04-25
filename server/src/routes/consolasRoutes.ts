import { Router } from 'express';
import { consolasController } from '../controllers/consolasController';

class ConsolasRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/consolas', consolasController.createConsola);
        this.router.get('/consolas', consolasController.getConsolas);
        this.router.get('/consolas/:id', consolasController.getConsola);
    }

}

const consolasRoutes = new ConsolasRoutes();
export default consolasRoutes.router;