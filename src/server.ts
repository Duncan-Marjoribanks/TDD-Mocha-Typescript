import express , {Application, Request, Response, NextFunction, response } from "express";

export default function createServer(){
    const app: Application = express();

    app.get("/", (req: Request, res: Response, next: NextFunction) => {
        res.send("hello world");
    })

    app.get("/healthcheck", (req: Request, res: Response, next: NextFunction) => {
        res.send("server ok");
    })

    return app;
};