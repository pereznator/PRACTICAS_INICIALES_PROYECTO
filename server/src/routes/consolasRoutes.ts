import { Router } from 'express';
import { consolasController } from '../controllers/consolasController';

class ConsolasRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', consolasController.createConsola);
        this.router.get('/', consolasController.getConsolas);
        this.router.get('/:id', consolasController.getConsola);
    }

}

const consolasRoutes = new ConsolasRoutes();
export default consolasRoutes.router;