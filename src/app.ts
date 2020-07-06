import express from 'express';
import {Express} from 'express';
import * as bodyParser from "body-parser";
import errorHandler from './middlewares/errorHandler';
import helloRoute from './routes/helloRoute';

class App {
    public app: Express;

    constructor(){
        this.app = express();
        this.Config();
        this.MongoSetUp();
        this.MiddlewaresSetUp();
        this.Routes();
    }

    private Config():void {
        this.app.use(bodyParser.json());
    }

    private MongoSetUp(): void {
    }

    private MiddlewaresSetUp(): void {
        this.app.use(errorHandler);
    }

    private Routes(): void {
        this.app.use('/hello', helloRoute);
    }
}

export default new App().app