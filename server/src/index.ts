import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import gamesRoutes from './routes/gamesRoutes';
import { userRoutes } from './routes/userRoutes';
import consolasRoutes from './routes/consolasRoutes';
import bibliotecasRoutes from './routes/bibliotecasRoutes';
import publicacionesRoutes from './routes/publicacionesRoutes';


class Server {
    
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/users', userRoutes.router);
        this.app.use('/juegos', gamesRoutes);
        this.app.use('/consolas', consolasRoutes);
        this.app.use('/bibliotecas', bibliotecasRoutes);
        this.app.use('/publicaciones', publicacionesRoutes);
        this.app.use('/comentarios', userRoutes.router);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();