import {NextFunction, Request, Response} from "express";
import {ActionLibrary} from "../library/ActionLibrary";

/** Action controller class **/
export class ActionController {
    /** calls the library getStats function and returns to the API request **/
    async getStats(req: Request, res: Response, next: NextFunction) {
        try {
            let stats = await ActionLibrary.getStats();
            res.json(JSON.parse(stats));
        } catch(e) {
            console.log(e);
            res.status(400).send("Error occurred adding action");
        }
    }

    /** calls the library addAction function and adds to the action dictionary **/
    async addAction(req: Request, res: Response, next: NextFunction) {
        try {
            //Check if parsing is correct for the body's data
            if (req.body && (Object.keys(req.body).length == 2)) {
                let item = req.body;
                let status = await ActionLibrary.addAction(item);
                //If 200 is returned, then was successfully added
                if (status === 200) {
                    res.status(status).json("Successful add");
                }
                else {
                    res.status(status).json("Error occurred");
                }
            }
            else {
                console.log(req.body);
                res.status(400).json("Error occurred parsing post body");
            }
        } catch(e) {
            console.log(e);
            res.status(400).send("Error occurred adding action");
        }
    }

}

export default ActionController;
