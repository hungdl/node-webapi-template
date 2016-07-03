/// <reference path="../../../typings/index.d.ts" />

import * as Hapi from "hapi";

export default class BaseController {
    
    constructor(server: Hapi.Server) {
        this.server = server;
    }

    protected server: Hapi.Server;
}
