import { Router } from 'express';
import { publicacionesController } from '../controllers/publicacionesController';


class PublicacionesRoutes {
    router: Router = Router();
    constructor() {
        this.config();
    }

    config(): void {
        this.router.post('/publicaciones', publicacionesController.createPublicacion);
        this.router.post('/publicaciones/usuario', publicacionesController.getPublicacionPorUsuario);
        this.router.post('/publicaciones/juego', publicacionesController.getPublicacionPorJuego);
    }

}

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;