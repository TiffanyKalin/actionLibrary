import {Router, Request, Response} from "express";
import {ActionController} from "./controller/ActionController";

//routes for the application. One for addAction, one for getStats
export const Routes = [
{
    method: "post",
    route: "/addAction",
    controller: ActionController,
    action: "addAction"
},
{
    method: "get",
    route: "/getStats",
    controller: ActionController,
    action: "getStats"
}
];
