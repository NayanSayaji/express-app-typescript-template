import authRoutor from '../auth/auth.routes'
import { ExcludedRoutes } from "./routes.types";
import { match } from 'path-to-regexp'


export const routes = [
    authRoutor,
]

export const excludedRoutes: ExcludedRoutes = [{
    path: match("/auth/user/:id"),
    method: 'GET'
},
{
    path: match("/auth/register"),
    method: 'POST'
},
{
    path: match("/auth/login"),
    method: 'POST'
}];
