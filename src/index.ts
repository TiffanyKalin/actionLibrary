import express from "express";
import {Request, Response} from "express";
import {Routes} from "./routes";
import * as bodyParser from "body-parser";

//setup app
const app = express();
const port = 3000;
app.use(bodyParser.json());

//register expresss routes from defined application routes
Routes.forEach(route => {
    (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
        const result = (new (route.controller as any))[route.action](req, res, next);
        if (result instanceof Promise) {
            result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);
        } else if(result !== null && result !== undefined) {
            res.json(result);
        }
    });
});

//start app
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }

    return console.log("Express server has started on port 3000");
});



