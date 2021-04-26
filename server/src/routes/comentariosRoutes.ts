import { Router } from 'express';
import { usersController } from '../controllers/usersController';

class ComentariosRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', usersController.createUser);
        this.router.post('/:id', usersController.login);
    }

}

const comentariosRoutes = new ComentariosRoutes();
export default comentariosRoutes.router;