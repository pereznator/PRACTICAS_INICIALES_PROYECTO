import { Router } from 'express';
import { comentariosController } from '../controllers/comentariosController';

class ComentariosRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', comentariosController.createComentario);
        this.router.get('/:id', comentariosController.getComentarios);
    }

}

const comentariosRoutes = new ComentariosRoutes();
export default comentariosRoutes.router;