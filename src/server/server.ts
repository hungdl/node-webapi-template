/// <reference path="../../typings/index.d.ts" />

import * as Hapi from 'hapi';
import * as Controllers from './controllers/index'; 
import UserRoutes from './routes/UserRoutes';
import * as Core from '../core'

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

UserRoutes(server);

server.start((err) => {
    if (err) { throw err; }
    console.log('Server at:', server.info.uri);
});

export default server;