import { Router } from 'express';
import { publicacionesController } from '../controllers/publicacionesController';


class PublicacionesRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/', publicacionesController.createPublicacion);
        this.router.get('/', publicacionesController.getPublicaciones);
        this.router.get('/:id', publicacionesController.getPublicacionPorUsuario);
        this.router.get('/juego/:id', publicacionesController.getPublicacionPorJuego);
    }

}

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;