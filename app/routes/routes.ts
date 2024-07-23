import { Application, json, NextFunction, Request, Response, } from "express";
import { routes } from './routes.data'
import { ResponseHandler } from "../utils/response.handler";
import {excludedRoutes} from './routes.data'
import { validateToken } from "../utils/authorizations";
import cors from 'cors'

export const registerMiddlewares = (app: Application) => {
    app.use(json())
    app.use(cors())

    app.use(validateToken(excludedRoutes))

    for (let route of routes) {
        app.use(route.path, route.router)
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction) => {
        res.status(err.statusCode || 500).send(
            new ResponseHandler(null, err)
        )
    })
}