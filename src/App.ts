import express from 'express';
import BasicScraperRouter from './routes/basic-scraper.router';

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.setDefaultPathRouter();
        this.routes();
    }

    private setDefaultPathRouter() {
        const router = express.Router();
        router.get("/", (_req, res) => {
            res.json({
                message: `Hello PPLA. test Web Scraper`
            });
        });
        this.app.use("/", router);
    }

    private routes(): void {

        const router = express.Router();
        const version = '/api/v1';
        this.app.use("/", router);

        this.app
            .use(`${version}/basic`, BasicScraperRouter)

    }

}

export default new App().app;
