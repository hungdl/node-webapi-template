/// <reference path="../../../typings/index.d.ts" />

import * as Hapi from "hapi";
import * as Controllers from '../controllers/index' 

export default function UserRoutes(server: Hapi.Server) {
    
    server.route({
        method: 'GET',
        path: '/api/users/{id}',
        handler: Controllers.UserController.GetUser
    });
}