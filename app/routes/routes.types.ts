import { Router } from "express";
import {MatchFunction} from "path-to-regexp"

type Methods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type ExcludedRoute = {
    path:MatchFunction;
    method:Methods;
}
export type ExcludedRoutes = ExcludedRoute[];

export class Route {
    static registeredRoutes: Route[] = [];

    constructor(
        public path: string,
        public router: Router
    ) {
        if (!path.startsWith('/')) {
            throw new Error("INVALID PATH")
        }
        if (Route.registeredRoutes.find((route) => route.path === this.path)) {
            throw new Error(`PATH: ${this.path} ALREADY EXISTS`);
        }

        Route.registeredRoutes.push(this);
    }
}

