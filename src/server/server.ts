/// <reference path="../../typings/index.d.ts" />

import * as Hapi from 'hapi';

const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 8000
});

server.start((err) => {
    if (err) { throw err; }
    console.log('Server at:', server.info.uri);
});