/// <reference path="../../../typings/index.d.ts" />

import * as Hapi from "hapi";
import BaseController from './basecontroller';
import * as Models from '../../models';
import * as Core from '../../core';

class UserController extends BaseController {

    public static GetUser(request: Hapi.Request, reply: Hapi.IReply) {
        Core.Logger.info("Requested:" + request.url.path);
        
        reply(null);
    }
}

export {
    UserController
}