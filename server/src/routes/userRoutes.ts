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
        this.router.post('/olvido-password', usersController.olvidoPassword);
        this.router.get('/mas-juegos', usersController.conMasJuegos);
        this.router.get('/mas-comentarios', usersController.conMasComentarios);
        this.router.get('/:id', usersController.buscarUsuario);
        this.router.patch('/:id', usersController.actualizarUsuario);
        this.router.get('/', usersController.obtenerUsuarios);
    }

}

export const userRoutes = new UserRoutes();