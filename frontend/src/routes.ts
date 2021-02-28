
import { Login } from "./views/Login/Login"
import Landing from "./views/Landing/Landing"
import { Register } from "./views/Register/Register"
import Profile from "./views/Profile/Profile"
import React from 'react'



type Route = {
    name: string,
    path: string,
    component?: React.ComponentType<any>,
    roles?: string[],
    routes?: Route[],
}

const routes : Array<Route> = [
    {
        'name': 'landing',
        'path': '/',
        'component': Landing,
    },
    { 
        'name': 'login',
        'path': '/login',
        'component': Login,
    },
    { 
        'name': 'register',
        'path': '/register',
        'component': Register,
    },
    { 
        'name': 'profile',
        'path': '/profile',
        'component': Profile,
        'roles': ['ROLE_USER']
    },

]
/*
const compile = (parentRoute: Route, subRoutes: Array<Route>): Route[] => {
    return subRoutes.flatMap(subRoute => {
        const newRoute: Route = {
            'name': subRoute.name,
            'path': parentRoute.path + subRoute.path,
            'component': subRoute.component,
            'roles': (parentRoute.roles || []).concat((subRoute.roles || [])),
        };
        return (subRoute.routes) ? [...compile(newRoute, subRoute.routes)] : newRoute;
    });
 }
 
 export const getRoutes = () => {
    const parentRoute = {
        'name': '',
        'path': '',
    };
    const flatRoutes = compile(parentRoute, routes);
    return flatRoutes;
 }
 */