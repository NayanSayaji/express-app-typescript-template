import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { ExcludedRoutes } from "../routes/routes.types";
import { authResponses } from "../auth/auth.responses";

export const validateToken = (excludedRoutes: ExcludedRoutes) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            if (excludedRoutes.find(route => route.path(req.path) && route.method === req.method)) {
                return next();
            }
            const token = req.headers.authorization;

            if (!token) throw authResponses.UNAUTHORISED_ACCESS_DENIED;

            const { JWT_ACCESS_TOKEN } = process.env;
            const payload = verify(token, JWT_ACCESS_TOKEN);

            req.payload = payload;
            
            next()
        } catch (e) {
            next(authResponses.UNAUTHORISED_ACCESS_DENIED)
        }
    }



type Role = 'user' | 'admin' | 'supervisor';
type Roles = Role[]

const permit = (roles: Roles) =>
    (req: Request, res: Response, next: NextFunction) => {
        if (!roles.includes(req.payload.role)) throw authResponses.UNAUTHORISED_ACCESS_DENIED;
    }