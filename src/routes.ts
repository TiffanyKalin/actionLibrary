import {Router, Request, Response} from "express";
import {ActionController} from "./controller/ActionController";

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
