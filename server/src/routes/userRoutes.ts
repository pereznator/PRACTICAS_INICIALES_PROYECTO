import { Router } from 'express';
import { usersController } from '../controllers/usersController';

class UserRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/register', usersController.createUser);
        this.router.post('/login', usersController.login);
        this.router.get('/:id', usersController.buscarUsuario);
    }

}

export const userRoutes = new UserRoutes();