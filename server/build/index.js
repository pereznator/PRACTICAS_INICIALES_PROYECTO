"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const userRoutes_1 = require("./routes/userRoutes");
const consolasRoutes_1 = __importDefault(require("./routes/consolasRoutes"));
const bibliotecasRoutes_1 = __importDefault(require("./routes/bibliotecasRoutes"));
const publicacionesRoutes_1 = __importDefault(require("./routes/publicacionesRoutes"));
const comentariosRoutes_1 = __importDefault(require("./routes/comentariosRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/usuarios', userRoutes_1.userRoutes.router);
        this.app.use('/juegos', gamesRoutes_1.default);
        this.app.use('/consolas', consolasRoutes_1.default);
        this.app.use('/bibliotecas', bibliotecasRoutes_1.default);
        this.app.use('/publicaciones', publicacionesRoutes_1.default);
        this.app.use('/comentarios', comentariosRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
