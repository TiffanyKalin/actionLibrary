import {NextFunction, Request, Response} from "express";
import {ActionLibrary} from "../library/ActionLibrary";

export class ActionController {
    private library = new ActionLibrary();
    async getStats(req: Request, res: Response, next: NextFunction) {
        try {
            let stats = await this.library.getStats();
            res.json(stats); 
        } catch(e) {
            console.log(e);
            res.status(400).send("Error occurred adding action");
        }
    }

    //TODO: implement
    async addAction(req: Request, res: Response, next: NextFunction) {
        try {
        } catch(e) {
            console.log(e);
            res.status(400).send("Error occurred adding action");
        }
    }

}

export default ActionController;
