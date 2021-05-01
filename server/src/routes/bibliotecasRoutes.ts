import { Router } from 'express';
import { bibliotecasController } from '../controllers/bibliotecasController';

class BibliotecasRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', bibliotecasController.createBiblioteca);
        this.router.get('/:idBiblioteca', bibliotecasController.getBiblioteca);
        this.router.patch('/:idBiblioteca', bibliotecasController.updateBiblioteca);
        this.router.get('/usuario/:idUsuario', bibliotecasController.getBibliotecas);
        this.router.post('/usuario', bibliotecasController.checkBiblioteca);
    }

}

const bibliotecasRoutes = new BibliotecasRoutes();
export default bibliotecasRoutes.router;