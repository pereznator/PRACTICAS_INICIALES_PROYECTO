import { Router } from 'express';
import { bibliotecasController } from '../controllers/bibliotecasController';

class BibliotecasRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/biblioteca', bibliotecasController.createBiblioteca);
        this.router.get('/biblioteca/:id', bibliotecasController.getBiblioteca);
        this.router.post('/biblioteca/:id', bibliotecasController.getBibliotecas);
    }

}

const bibliotecasRoutes = new BibliotecasRoutes();
export default bibliotecasRoutes.router;